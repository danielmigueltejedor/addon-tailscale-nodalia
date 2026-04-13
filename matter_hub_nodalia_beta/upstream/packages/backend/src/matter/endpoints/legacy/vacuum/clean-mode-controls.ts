import type {
  VacuumDeviceAttributes,
} from "@home-assistant-matter-hub/common";
import type { HomeAssistantAction } from "../../../../services/home-assistant/home-assistant-actions.js";
import type {
  VacuumCleanModeCompanionEntity,
  VacuumCleanModeOption,
} from "./clean-mode-data.js";
import { VacuumMatterCleanMode } from "./clean-mode-data.js";

interface SelectCompanionControl {
  entityId: string;
  current?: string;
  options: string[];
}

interface VacuumFanControl {
  kind: "select" | "vacuum";
  entityId: string;
  current?: string;
  options: string[];
}

interface VacuumCleanModeControls {
  fan?: VacuumFanControl;
  mopIntensity?: SelectCompanionControl;
  mopMode?: SelectCompanionControl;
}

const OFF_KEYWORDS = [
  "off",
  "apagad",
  "desactiv",
  "disabled",
  "none",
  "ninguna",
  "ninguno",
  "sin_fregado",
  "sin_mopa",
] as const;

const FAN_CONTROL_KEYWORDS = [
  "fan",
  "ventil",
  "suction",
  "succion",
  "aspir",
  "aspiration",
  "potencia",
  "power",
  "suction_level",
  "nivel_de_succion",
] as const;

const MOP_KEYWORDS = ["mop", "mopa", "freg"] as const;
const INTENSITY_KEYWORDS = [
  "intensity",
  "intensidad",
  "water",
  "agua",
  "flow",
  "caudal",
] as const;
const MODE_KEYWORDS = ["mode", "modo"] as const;

const FAN_VACUUM_PREFERENCES = [
  "balanced",
  "equilibrado",
  "standard",
  "estandar",
  "normal",
  "medium",
  "medio",
  "auto",
  "quiet",
  "silencioso",
  "low",
  "bajo",
  "turbo",
  "high",
  "alto",
  "max",
] as const;

const FAN_COMBINED_PREFERENCES = [
  "medium",
  "medio",
  "balanced",
  "equilibrado",
  "standard",
  "estandar",
  "normal",
  "auto",
  "quiet",
  "silencioso",
  "low",
  "bajo",
  "turbo",
  "high",
  "alto",
  "max",
] as const;

const MOP_INTENSITY_PREFERENCES = [
  "medium",
  "medio",
  "balanced",
  "equilibrado",
  "standard",
  "estandar",
  "normal",
  "high",
  "alto",
  "max",
  "low",
  "bajo",
] as const;

const MOP_MODE_PREFERENCES = [
  "standard",
  "estandar",
  "normal",
  "default",
  "balanced",
  "equilibrado",
  "medium",
  "medio",
  "deep",
  "profundo",
] as const;

const SMART_PLAN_KEYWORDS = [
  "smartplan",
  "smartmode",
  "smart_plan",
  "smart_mode",
  "intelligent",
  "inteligente",
  "plan_inteligente",
] as const;

export function resolveVacuumCurrentModeFromControls(
  attributes: VacuumDeviceAttributes & Record<string, unknown>,
  companionEntities: VacuumCleanModeCompanionEntity[],
): VacuumMatterCleanMode | undefined {
  const controls = resolveVacuumCleanModeControls(attributes, companionEntities);
  if (isSmartPlanModeActive(attributes, controls, companionEntities)) {
    return VacuumMatterCleanMode.Auto;
  }

  const fanEnabled = resolveEnabledState(controls.fan?.current);
  const mopEnabled = resolveEnabledState(controls.mopIntensity?.current);

  if (fanEnabled == null || mopEnabled == null) {
    return undefined;
  }

  if (fanEnabled && mopEnabled) {
    return VacuumMatterCleanMode.VacuumAndMop;
  }
  if (fanEnabled) {
    return VacuumMatterCleanMode.Vacuum;
  }
  if (mopEnabled) {
    return VacuumMatterCleanMode.Mop;
  }

  return undefined;
}

export function resolveVacuumSupportedModesFromControls(
  attributes: VacuumDeviceAttributes & Record<string, unknown>,
  companionEntities: VacuumCleanModeCompanionEntity[],
): VacuumCleanModeOption[] {
  const smartPlanControls = collectSmartPlanCapableControls(
    attributes,
    companionEntities,
  );
  if (smartPlanControls.length < 2) {
    return [];
  }

  const label = selectSmartPlanOption(smartPlanControls[0]?.options);
  if (label == null) {
    return [];
  }

  return [
    {
      matterMode: VacuumMatterCleanMode.Auto,
      label: buildAutoModeLabel(label),
      option: label,
      sequential: false,
    },
  ];
}

export function buildVacuumCleanModeControlActions(
  vacuumEntityId: string,
  attributes: VacuumDeviceAttributes & Record<string, unknown>,
  companionEntities: VacuumCleanModeCompanionEntity[],
  newMode: VacuumMatterCleanMode,
): HomeAssistantAction[] | undefined {
  const controls = resolveVacuumCleanModeControls(attributes, companionEntities);
  const actions: HomeAssistantAction[] = [];

  switch (newMode) {
    case VacuumMatterCleanMode.Auto: {
      appendActions(actions, buildSmartPlanControlActions(
        vacuumEntityId,
        attributes,
        companionEntities,
      ));
      break;
    }
    case VacuumMatterCleanMode.Mop: {
      appendAction(
        actions,
        createFanSpeedAction(
          vacuumEntityId,
          controls.fan,
          selectOffOption(controls.fan?.options),
        ),
      );
      appendAction(
        actions,
        createSelectAction(
          controls.mopIntensity?.entityId,
          selectPreferredOption(
            controls.mopIntensity?.options,
            undefined,
            MOP_INTENSITY_PREFERENCES,
          ),
        ),
      );
      appendAction(
        actions,
        createSelectAction(
          controls.mopMode?.entityId,
          selectPreferredOption(
            controls.mopMode?.options,
            undefined,
            MOP_MODE_PREFERENCES,
          ),
        ),
      );
      break;
    }
    case VacuumMatterCleanMode.Vacuum: {
      appendAction(
        actions,
        createSelectAction(
          controls.mopIntensity?.entityId,
          selectOffOption(controls.mopIntensity?.options),
        ),
      );
      appendAction(
        actions,
        createFanSpeedAction(
          vacuumEntityId,
          controls.fan,
          selectPreferredOption(
            controls.fan?.options,
            controls.fan?.current,
            FAN_VACUUM_PREFERENCES,
          ),
        ),
      );
      break;
    }
    case VacuumMatterCleanMode.VacuumAndMop:
    default: {
      appendAction(
        actions,
        createFanSpeedAction(
          vacuumEntityId,
          controls.fan,
          selectPreferredOption(
            controls.fan?.options,
            undefined,
            FAN_COMBINED_PREFERENCES,
          ),
        ),
      );
      appendAction(
        actions,
        createSelectAction(
          controls.mopMode?.entityId,
          selectPreferredOption(
            controls.mopMode?.options,
            undefined,
            MOP_MODE_PREFERENCES,
          ),
        ),
      );
      appendAction(
        actions,
        createSelectAction(
          controls.mopIntensity?.entityId,
          selectPreferredOption(
            controls.mopIntensity?.options,
            undefined,
            MOP_INTENSITY_PREFERENCES,
          ),
        ),
      );
      break;
    }
  }

  if (actions.length === 0) {
    return undefined;
  }

  return dedupeActions(actions);
}

function resolveVacuumCleanModeControls(
  attributes: VacuumDeviceAttributes & Record<string, unknown>,
  companionEntities: VacuumCleanModeCompanionEntity[],
): VacuumCleanModeControls {
  return {
    fan: resolveBestFanControl(companionEntities) ?? resolvePrimaryFanControl(attributes),
    mopIntensity: resolveBestSelectControl(
      companionEntities,
      scoreMopIntensityControl,
    ),
    mopMode: resolveBestSelectControl(companionEntities, scoreMopModeControl),
  };
}

function resolveBestFanControl(
  companionEntities: VacuumCleanModeCompanionEntity[],
): VacuumFanControl | undefined {
  const control = resolveBestSelectControl(companionEntities, scoreFanControl);
  if (control == null) {
    return undefined;
  }

  return {
    kind: "select",
    entityId: control.entityId,
    current: control.current,
    options: control.options,
  };
}

function resolvePrimaryFanControl(
  attributes: VacuumDeviceAttributes & Record<string, unknown>,
): VacuumFanControl | undefined {
  const options = toStringArray(attributes.fan_speed_list);
  if (options.length < 2) {
    return undefined;
  }

  return {
    kind: "vacuum",
    entityId: "vacuum",
    current: toStringValue(attributes.fan_speed),
    options,
  };
}

function resolveBestSelectControl(
  companionEntities: VacuumCleanModeCompanionEntity[],
  scorer: (companion: VacuumCleanModeCompanionEntity) => number,
): SelectCompanionControl | undefined {
  let bestScore = 0;
  let bestCompanion: SelectCompanionControl | undefined;

  for (const companion of companionEntities) {
    const score = scorer(companion);
    if (score <= bestScore) {
      continue;
    }

    bestScore = score;
    bestCompanion = {
      entityId: companion.entityId,
      current: companion.state,
      options: toStringArray(companion.options),
    };
  }

  return bestCompanion;
}

function scoreFanControl(companion: VacuumCleanModeCompanionEntity): number {
  const options = toStringArray(companion.options);
  if (options.length < 2) {
    return 0;
  }

  const haystack = `${normalizeText(companion.entityId) ?? ""}_${normalizeText(companion.friendlyName) ?? ""}`;
  const score =
    countKeywordHits(haystack, FAN_CONTROL_KEYWORDS) * 25 +
    (selectOffOption(options) != null ? 20 : 0) +
    (selectPreferredOption(options, undefined, FAN_VACUUM_PREFERENCES) != null
      ? 20
      : 0);

  return score >= 45 ? score : 0;
}

function scoreMopIntensityControl(
  companion: VacuumCleanModeCompanionEntity,
): number {
  const options = toStringArray(companion.options);
  if (options.length < 2) {
    return 0;
  }

  const haystack = `${normalizeText(companion.entityId) ?? ""}_${normalizeText(companion.friendlyName) ?? ""}`;
  const hasMop = containsAnyKeyword(haystack, MOP_KEYWORDS);
  const hasIntensity = containsAnyKeyword(haystack, INTENSITY_KEYWORDS);

  if (!hasMop || !hasIntensity) {
    return 0;
  }

  return (
    100 +
    (selectOffOption(options) != null ? 20 : 0) +
    (selectPreferredOption(options, undefined, MOP_INTENSITY_PREFERENCES) != null
      ? 20
      : 0)
  );
}

function scoreMopModeControl(companion: VacuumCleanModeCompanionEntity): number {
  const options = toStringArray(companion.options);
  if (options.length < 2) {
    return 0;
  }

  const haystack = `${normalizeText(companion.entityId) ?? ""}_${normalizeText(companion.friendlyName) ?? ""}`;
  const hasMop = containsAnyKeyword(haystack, MOP_KEYWORDS);
  const hasMode = containsAnyKeyword(haystack, MODE_KEYWORDS);

  if (!hasMop || !hasMode) {
    return 0;
  }

  return (
    100 +
    (selectPreferredOption(options, undefined, MOP_MODE_PREFERENCES) != null
      ? 20
      : 0)
  );
}

function createFanSpeedAction(
  vacuumEntityId: string,
  control: VacuumFanControl | undefined,
  option: string | undefined,
): HomeAssistantAction | undefined {
  if (control == null || option == null) {
    return undefined;
  }

  if (control.kind === "select") {
    return createSelectAction(control.entityId, option);
  }

  return {
    action: "vacuum.set_fan_speed",
    entityId: vacuumEntityId,
    data: { fan_speed: option },
  };
}

function createSelectAction(
  entityId: string | undefined,
  option: string | undefined,
): HomeAssistantAction | undefined {
  if (entityId == null || option == null) {
    return undefined;
  }

  return {
    action: "select.select_option",
    entityId,
    data: { option },
  };
}

function selectOffOption(options: string[] | undefined): string | undefined {
  if (options == null) {
    return undefined;
  }

  return options.find((option) => isOffOption(option));
}

function selectPreferredOption(
  options: string[] | undefined,
  current: string | undefined,
  preferences: readonly string[],
): string | undefined {
  if (options == null || options.length === 0) {
    return undefined;
  }

  if (
    current != null &&
    !isOffOption(current) &&
    !isSmartPlanOption(current) &&
    options.includes(current)
  ) {
    return current;
  }

  for (const preference of preferences) {
    const matched = options.find((option) => {
      return (normalizeText(option) ?? "").includes(preference);
    });
    if (matched != null && !isOffOption(matched)) {
      return matched;
    }
  }

  return options.find((option) => !isOffOption(option));
}

function resolveEnabledState(value: string | undefined): boolean | undefined {
  if (value == null) {
    return undefined;
  }
  return !isOffOption(value);
}

function isSmartPlanModeActive(
  attributes: VacuumDeviceAttributes & Record<string, unknown>,
  controls: VacuumCleanModeControls,
  companionEntities: VacuumCleanModeCompanionEntity[],
): boolean {
  const smartPlanControls = collectSmartPlanCapableControls(
    attributes,
    companionEntities,
    controls,
  );
  return smartPlanControls.some((control) => isSmartPlanOption(control.current));
}

function collectSmartPlanCapableControls(
  attributes: VacuumDeviceAttributes & Record<string, unknown>,
  companionEntities: VacuumCleanModeCompanionEntity[],
  controls = resolveVacuumCleanModeControls(attributes, companionEntities),
): Array<SelectCompanionControl | VacuumFanControl> {
  const smartPlanControls: Array<SelectCompanionControl | VacuumFanControl> = [];
  const seenEntityIds = new Set<string>();

  if (
    controls.fan != null &&
    selectSmartPlanOption(controls.fan.options) != null
  ) {
    smartPlanControls.push(controls.fan);
    seenEntityIds.add(controls.fan.entityId);
  }

  for (const companion of companionEntities) {
    const options = toStringArray(companion.options);
    if (options.length < 2 || selectSmartPlanOption(options) == null) {
      continue;
    }

    if (seenEntityIds.has(companion.entityId)) {
      continue;
    }

    smartPlanControls.push({
      entityId: companion.entityId,
      current: companion.state,
      options,
    });
    seenEntityIds.add(companion.entityId);
  }

  return smartPlanControls;
}

function buildSmartPlanControlActions(
  vacuumEntityId: string,
  attributes: VacuumDeviceAttributes & Record<string, unknown>,
  companionEntities: VacuumCleanModeCompanionEntity[],
): HomeAssistantAction[] {
  const controls = resolveVacuumCleanModeControls(attributes, companionEntities);
  const actions: HomeAssistantAction[] = [];

  appendAction(
    actions,
    createFanSpeedAction(
      vacuumEntityId,
      controls.fan,
      selectSmartPlanOption(controls.fan?.options),
    ),
  );

  for (const companion of companionEntities) {
    appendAction(
      actions,
      createSelectAction(
        companion.entityId,
        selectSmartPlanOption(toStringArray(companion.options)),
      ),
    );
  }

  return dedupeActions(actions);
}

function isOffOption(value: string): boolean {
  const normalized = normalizeText(value);
  if (normalized == null) {
    return false;
  }

  return OFF_KEYWORDS.some((keyword) => normalized.includes(keyword));
}

function isSmartPlanOption(value: string | undefined): boolean {
  const normalized = normalizeText(value);
  if (normalized == null) {
    return false;
  }

  return SMART_PLAN_KEYWORDS.some((keyword) => normalized.includes(keyword));
}

function selectSmartPlanOption(options: string[] | undefined): string | undefined {
  if (options == null) {
    return undefined;
  }

  return options.find((option) => isSmartPlanOption(option));
}

function buildAutoModeLabel(option: string): string {
  const normalized = normalizeText(option);
  if (
    normalized === "smart_mode" ||
    normalized === "smartmode" ||
    normalized === "smart_plan" ||
    normalized === "smartplan"
  ) {
    return "SmartPlan";
  }

  return option;
}

function appendAction(
  actions: HomeAssistantAction[],
  action: HomeAssistantAction | undefined,
): void {
  if (action != null) {
    actions.push(action);
  }
}

function appendActions(
  actions: HomeAssistantAction[],
  extraActions: readonly HomeAssistantAction[],
): void {
  actions.push(...extraActions);
}

function dedupeActions(actions: HomeAssistantAction[]): HomeAssistantAction[] {
  const seen = new Set<string>();
  return actions.filter((action) => {
    const key = `${action.action}|${action.entityId ?? ""}|${JSON.stringify(action.data ?? {})}`;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

function countKeywordHits(value: string, keywords: readonly string[]): number {
  return keywords.reduce((count, keyword) => {
    return count + (value.includes(keyword) ? 1 : 0);
  }, 0);
}

function containsAnyKeyword(value: string, keywords: readonly string[]): boolean {
  return keywords.some((keyword) => value.includes(keyword));
}

function toStringArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.flatMap((item) => toStringArray(item));
  }
  if (typeof value === "string") {
    return value.length > 0 ? [value] : [];
  }
  return [];
}

function toStringValue(value: unknown): string | undefined {
  return typeof value === "string" && value.length > 0 ? value : undefined;
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
