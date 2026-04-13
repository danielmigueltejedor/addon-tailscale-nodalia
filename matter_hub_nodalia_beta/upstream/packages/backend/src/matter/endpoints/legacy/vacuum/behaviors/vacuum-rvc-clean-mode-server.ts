import type { HomeAssistantEntityInformation } from "@home-assistant-matter-hub/common";
import type { Agent } from "@matter/main";
import { RvcCleanMode } from "@matter/main/clusters";
import { HomeAssistantRegistry } from "../../../../../services/home-assistant/home-assistant-registry.js";
import { HomeAssistantEntityBehavior } from "../../../../behaviors/home-assistant-entity-behavior.js";
import { RvcCleanModeServer } from "../../../../behaviors/rvc-clean-mode-server.js";
import {
  resolveVacuumCleanModeData,
  type VacuumCleanModeCompanionEntity,
  type VacuumCleanModeData,
  type VacuumCleanModeOption,
  VacuumMatterCleanMode,
} from "../clean-mode-data.js";
import {
  buildVacuumCleanModeControlActions,
  resolveVacuumCurrentModeFromControls,
  resolveVacuumSupportedModesFromControls,
} from "../clean-mode-controls.js";

const DEFAULT_VACUUM_CLEAN_MODE_DATA: VacuumCleanModeData = {
  currentMode: VacuumMatterCleanMode.VacuumAndMop,
  supportedModes: [
    {
      matterMode: VacuumMatterCleanMode.VacuumAndMop,
      label: "Vacuum & Mop",
      option: "Vacuum & Mop",
      sequential: false,
    },
    {
      matterMode: VacuumMatterCleanMode.Vacuum,
      label: "Vacuum",
      option: "Vacuum",
      sequential: false,
    },
    {
      matterMode: VacuumMatterCleanMode.Mop,
      label: "Mop",
      option: "Mop",
      sequential: false,
    },
  ],
};

export const VacuumRvcCleanModeServer = RvcCleanModeServer({
  getCurrentMode: (_, agent) => {
    const data = resolveEffectiveVacuumCleanModeData(agent);
    return data.currentMode;
  },
  getSupportedModes: (_, agent) => {
    return toMatterSupportedModes(
      resolveEffectiveVacuumCleanModeData(agent).supportedModes,
    );
  },
  changeToMode: (newMode, agent) => {
    const entity = agent.get(HomeAssistantEntityBehavior).entity;
    const companions = collectRelatedCleanModeEntities(agent, entity);
    const data = resolveEffectiveVacuumCleanModeData(agent, companions);

    const selectedMode = data.supportedModes.find(
      (mode) => mode.matterMode === newMode,
    );
    if (selectedMode == null) {
      return undefined;
    }

    const actionEntityId = data.actionEntityIds?.[newMode as VacuumMatterCleanMode];
    if (actionEntityId != null) {
      console.debug(
        `VacuumCleanMode selecting option ${JSON.stringify(selectedMode.option)} on ${actionEntityId}`,
      );
      return {
        action: "select.select_option",
        entityId: actionEntityId,
        data: { option: selectedMode.option },
      };
    }

    const attributes = entity.state.attributes as Record<string, unknown>;
    const controlActions = buildVacuumCleanModeControlActions(
      entity.entity_id,
      attributes,
      companions,
      newMode as VacuumMatterCleanMode,
    );
    if (controlActions != null) {
      console.debug(
        `VacuumCleanMode derived ${controlActions.length} Home Assistant action(s) for mode ${newMode}`,
      );
      return controlActions;
    }

    console.debug(
      `VacuumCleanMode has no actionable companion controls for mode ${newMode}`,
    );
    return undefined;
  },
});

function resolveEffectiveVacuumCleanModeData(
  agent: Agent,
  companions?: VacuumCleanModeCompanionEntity[],
): VacuumCleanModeData {
  const entity = agent.get(HomeAssistantEntityBehavior).entity;
  const relatedEntities =
    companions ?? collectRelatedCleanModeEntities(agent, entity);
  return resolveEffectiveVacuumCleanModeDataForEntity(entity, relatedEntities);
}

export function resolveEffectiveVacuumCleanModeDataForEntity(
  entity: HomeAssistantEntityInformation,
  relatedEntities: VacuumCleanModeCompanionEntity[],
): VacuumCleanModeData {
  const attributes = entity.state.attributes as Record<string, unknown>;
  const resolved =
    resolveVacuumCleanModeData(entity, relatedEntities) ??
    DEFAULT_VACUUM_CLEAN_MODE_DATA;
  const controlSupportedModes = resolveVacuumSupportedModesFromControls(
    attributes,
    relatedEntities,
  );
  const derivedCurrentMode = resolveVacuumCurrentModeFromControls(
    attributes,
    relatedEntities,
  );
  const supportedModes = mergeSupportedModes(
    resolved.supportedModes,
    controlSupportedModes,
  );

  return (
    derivedCurrentMode == null
      ? {
          ...resolved,
          supportedModes,
        }
      : {
          ...resolved,
          supportedModes,
          currentMode: derivedCurrentMode,
        }
  );
}

function collectRelatedCleanModeEntities(
  agent: Agent,
  entity: HomeAssistantEntityInformation,
): VacuumCleanModeCompanionEntity[] {
  const deviceId = entity.deviceRegistry?.id ?? entity.registry?.device_id;
  if (deviceId == null) {
    return [];
  }

  let registry: HomeAssistantRegistry;
  try {
    registry = agent.env.get(HomeAssistantRegistry);
  } catch {
    return [];
  }

  const companions: VacuumCleanModeCompanionEntity[] = [];
  for (const relatedEntity of Object.values(registry.entities)) {
    if (
      relatedEntity.device_id !== deviceId ||
      relatedEntity.entity_id === entity.entity_id
    ) {
      continue;
    }

    const [domain] = relatedEntity.entity_id.split(".");
    if (domain !== "select") {
      continue;
    }

    const relatedState = registry.states[relatedEntity.entity_id];
    if (relatedState == null) {
      continue;
    }

    companions.push({
      entityId: relatedEntity.entity_id,
      friendlyName:
        toStringValue(relatedState.attributes?.friendly_name) ??
        relatedEntity.name ??
        relatedEntity.original_name,
      state: relatedState.state,
      options: asRecord(relatedState.attributes).options,
    });
  }

  return companions;
}

function toMatterSupportedModes(
  options: VacuumCleanModeOption[],
): RvcCleanMode.ModeOption[] {
  return options.map((option) => ({
    label: option.label,
    mode: option.matterMode,
    modeTags: buildModeTags(option),
  }));
}

function buildModeTags(
  option: VacuumCleanModeOption,
): RvcCleanMode.ModeTagStruct[] {
  switch (option.matterMode) {
    case VacuumMatterCleanMode.Auto:
      return isRegularSmartPlanMode(option)
        ? [{ value: RvcCleanMode.ModeTag.VacuumThenMop }]
        : [{ value: RvcCleanMode.ModeTag.Auto }];
    case VacuumMatterCleanMode.VacuumAndMop:
      return option.sequential
        ? [{ value: RvcCleanMode.ModeTag.VacuumThenMop }]
        : [
            { value: RvcCleanMode.ModeTag.Vacuum },
            { value: RvcCleanMode.ModeTag.Mop },
          ];
    case VacuumMatterCleanMode.Mop:
      return [{ value: RvcCleanMode.ModeTag.Mop }];
    case VacuumMatterCleanMode.Vacuum:
    default:
      return [{ value: RvcCleanMode.ModeTag.Vacuum }];
  }
}

function asRecord(value: unknown): Record<string, unknown> {
  if (value == null || typeof value !== "object") {
    return {};
  }
  return value as Record<string, unknown>;
}

function toStringValue(value: unknown): string | undefined {
  return typeof value === "string" && value.length > 0 ? value : undefined;
}

function mergeSupportedModes(
  primaryModes: VacuumCleanModeOption[],
  extraModes: VacuumCleanModeOption[],
): VacuumCleanModeOption[] {
  const merged = [...primaryModes];
  const seenModes = new Set(primaryModes.map((mode) => mode.matterMode));

  for (const mode of extraModes) {
    if (seenModes.has(mode.matterMode)) {
      continue;
    }

    seenModes.add(mode.matterMode);
    merged.push(mode);
  }

  return merged;
}

function isRegularSmartPlanMode(option: VacuumCleanModeOption): boolean {
  const normalizedLabel = normalizeText(option.label);
  const normalizedOption = normalizeText(option.option);
  return (
    normalizedLabel === "smartplan" ||
    normalizedLabel === "smart_plan" ||
    normalizedOption === "smart_mode" ||
    normalizedOption === "smartmode" ||
    normalizedOption === "smart_plan" ||
    normalizedOption === "smartplan"
  );
}

function normalizeText(value: unknown): string | undefined {
  if (typeof value !== "string") {
    return undefined;
  }

  const normalized = value
    .normalize("NFD")
    .replace(/\p{Diacritic}+/gu, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");

  return normalized.length > 0 ? normalized : undefined;
}
