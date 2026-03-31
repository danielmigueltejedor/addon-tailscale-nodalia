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
    return data.currentMode ?? data.supportedModes[0]?.matterMode ?? 0;
  },
  getSupportedModes: (_, agent) => {
    return toMatterSupportedModes(
      resolveEffectiveVacuumCleanModeData(agent).supportedModes,
    );
  },
  changeToMode: (newMode, agent) => {
    const data = resolveEffectiveVacuumCleanModeData(agent);
    if (data.entityId == null) {
      console.debug(
        `VacuumCleanMode has no actionable companion select for mode ${newMode}`,
      );
      return undefined;
    }

    const selectedMode = data.supportedModes.find(
      (mode) => mode.matterMode === newMode,
    );
    if (selectedMode == null) {
      return undefined;
    }

    console.debug(
      `VacuumCleanMode selecting option ${JSON.stringify(selectedMode.option)} on ${data.entityId}`,
    );
    return {
      action: "select.select_option",
      entityId: data.entityId,
      data: { option: selectedMode.option },
    };
  },
});

function resolveEffectiveVacuumCleanModeData(agent: Agent): VacuumCleanModeData {
  const entity = agent.get(HomeAssistantEntityBehavior).entity;
  return (
    resolveVacuumCleanModeData(entity, collectRelatedCleanModeEntities(agent, entity)) ??
    DEFAULT_VACUUM_CLEAN_MODE_DATA
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
