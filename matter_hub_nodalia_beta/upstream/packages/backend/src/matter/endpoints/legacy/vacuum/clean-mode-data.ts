import type {
  HomeAssistantEntityInformation,
  VacuumDeviceAttributes,
} from "@home-assistant-matter-hub/common";

export enum VacuumMatterCleanMode {
  VacuumAndMop = 0,
  Vacuum = 1,
  Mop = 2,
}

export interface VacuumCleanModeOption {
  matterMode: VacuumMatterCleanMode;
  label: string;
  option: string;
  sequential: boolean;
}

export interface VacuumCleanModeData {
  currentMode?: VacuumMatterCleanMode;
  supportedModes: VacuumCleanModeOption[];
  entityId?: string;
}

export interface VacuumCleanModeCompanionEntity {
  entityId: string;
  friendlyName?: string;
  state?: string;
  options?: unknown;
}

interface VacuumCleanModeCandidate extends VacuumCleanModeData {
  score: number;
}

const VACUUM_MODE_KEYWORDS = [
  "vacuum",
  "aspir",
  "suction",
  "sweep",
  "barrer",
  "barre",
] as const;

const MOP_MODE_KEYWORDS = [
  "mop",
  "mopa",
  "fregar",
  "frieg",
  "trapear",
  "trapea",
] as const;

const SEQUENTIAL_KEYWORDS = [
  "then",
  "after",
  "despues",
  "despues_de",
  "después",
  "después_de",
  "seguido",
  "seguida",
  "and_then",
  "vacuum_then_mop",
  "mop_after_vacuum",
] as const;

const CLEAN_MODE_ENTITY_HINTS = [
  "clean_mode",
  "cleaning_mode",
  "modo_de_limpieza",
  "modo_limpieza",
  "mop_mode",
  "vacuum_mode",
  "clean",
  "limpieza",
  "mop",
  "mopa",
  "aspir",
] as const;

const CURRENT_MODE_ATTRIBUTE_KEYS = [
  "cleaning_mode",
  "clean_mode",
  "mop_mode",
  "vacuum_mode",
  "selected_cleaning_mode",
  "selected_clean_mode",
  "current_cleaning_mode",
  "current_clean_mode",
  "current_mop_mode",
  "current_vacuum_mode",
  "mode",
  "task_mode",
  "work_mode",
] as const;

const MODE_OPTIONS_ATTRIBUTE_KEYS = [
  "cleaning_mode_list",
  "clean_mode_list",
  "mop_mode_list",
  "vacuum_mode_list",
  "mode_list",
  "available_cleaning_modes",
  "available_clean_modes",
  "available_mop_modes",
  "available_vacuum_modes",
  "options",
] as const;

export function resolveVacuumCleanModeData(
  entity: HomeAssistantEntityInformation,
  companionEntities: VacuumCleanModeCompanionEntity[] = [],
): VacuumCleanModeData | undefined {
  const attributes = asRecord(entity.state.attributes) as VacuumDeviceAttributes &
    Record<string, unknown>;

  const overrideCandidate = resolveManualOverrideCandidate(attributes);
  const primaryCandidate = resolvePrimaryAttributeCandidate(attributes);
  const companionCandidates = companionEntities
    .map((companion) => resolveCompanionCandidate(companion))
    .filter((candidate): candidate is VacuumCleanModeCandidate => candidate != null);

  const candidates = [
    ...(overrideCandidate != null ? [overrideCandidate] : []),
    ...(primaryCandidate != null ? [primaryCandidate] : []),
    ...companionCandidates,
  ];

  if (candidates.length === 0) {
    return undefined;
  }

  const currentModeFromPrimary = resolveCurrentModeFromAttributes(attributes);
  const [bestCandidate] = [...candidates].sort((left, right) => {
    return right.score - left.score;
  });

  return {
    entityId: bestCandidate.entityId,
    supportedModes: bestCandidate.supportedModes,
    currentMode: bestCandidate.currentMode ?? currentModeFromPrimary,
  };
}

function resolveManualOverrideCandidate(
  attributes: VacuumDeviceAttributes & Record<string, unknown>,
): VacuumCleanModeCandidate | undefined {
  const entityId = toStringValue(attributes.matter_clean_mode_entity);
  if (entityId == null) {
    return undefined;
  }

  const supportedModes = buildSupportedModesFromOptionStrings([
    toStringValue(attributes.matter_clean_mode_vacuum_and_mop_option),
    toStringValue(attributes.matter_clean_mode_vacuum_option),
    toStringValue(attributes.matter_clean_mode_mop_option),
  ]);
  if (supportedModes.length < 2) {
    return undefined;
  }

  return {
    entityId,
    supportedModes,
    currentMode: resolveCurrentModeFromAttributes(attributes),
    score: 1000,
  };
}

function resolvePrimaryAttributeCandidate(
  attributes: VacuumDeviceAttributes & Record<string, unknown>,
): VacuumCleanModeCandidate | undefined {
  const supportedModes = buildSupportedModesFromOptionStrings(
    MODE_OPTIONS_ATTRIBUTE_KEYS.flatMap((key) => toStringArray(attributes[key])),
  );
  if (supportedModes.length < 2) {
    return undefined;
  }

  return {
    supportedModes,
    currentMode: resolveCurrentModeFromAttributes(attributes),
    score: supportedModes.length * 100,
  };
}

function resolveCompanionCandidate(
  companion: VacuumCleanModeCompanionEntity,
): VacuumCleanModeCandidate | undefined {
  const supportedModes = buildSupportedModesFromOptionStrings(companion.options);
  if (supportedModes.length < 2) {
    return undefined;
  }

  const normalizedEntityId = normalizeText(companion.entityId) ?? "";
  const normalizedFriendlyName = normalizeText(companion.friendlyName) ?? "";
  const hintScore = CLEAN_MODE_ENTITY_HINTS.reduce((score, hint) => {
    return score +
      (normalizedEntityId.includes(hint) ? 15 : 0) +
      (normalizedFriendlyName.includes(hint) ? 15 : 0);
  }, 0);

  return {
    entityId: companion.entityId,
    supportedModes,
    currentMode: resolveCurrentModeFromValue(companion.state, supportedModes),
    score: 250 + supportedModes.length * 100 + hintScore,
  };
}

function resolveCurrentModeFromAttributes(
  attributes: VacuumDeviceAttributes & Record<string, unknown>,
): VacuumMatterCleanMode | undefined {
  for (const key of CURRENT_MODE_ATTRIBUTE_KEYS) {
    const currentMode = resolveCurrentModeFromValue(attributes[key]);
    if (currentMode != null) {
      return currentMode;
    }
  }

  return undefined;
}

function resolveCurrentModeFromValue(
  value: unknown,
  supportedModes?: VacuumCleanModeOption[],
): VacuumMatterCleanMode | undefined {
  const classification = classifyCleanModeValue(value);
  if (classification == null) {
    return undefined;
  }

  if (
    supportedModes == null ||
    supportedModes.some((mode) => mode.matterMode === classification.matterMode)
  ) {
    return classification.matterMode;
  }

  return undefined;
}

function buildSupportedModesFromOptionStrings(
  values: unknown,
): VacuumCleanModeOption[] {
  const options = toStringArray(values);
  const supportedModes: VacuumCleanModeOption[] = [];
  const seenModes = new Set<VacuumMatterCleanMode>();

  for (const option of options) {
    const classification = classifyCleanModeValue(option);
    if (classification == null || seenModes.has(classification.matterMode)) {
      continue;
    }

    supportedModes.push({
      matterMode: classification.matterMode,
      label: option,
      option,
      sequential: classification.sequential,
    });
    seenModes.add(classification.matterMode);
  }

  return supportedModes;
}

function classifyCleanModeValue(
  value: unknown,
): { matterMode: VacuumMatterCleanMode; sequential: boolean } | undefined {
  const normalized = normalizeText(value);
  if (normalized == null) {
    return undefined;
  }

  const hasVacuum = containsAnyKeyword(normalized, VACUUM_MODE_KEYWORDS);
  const hasMop = containsAnyKeyword(normalized, MOP_MODE_KEYWORDS);

  if (hasVacuum && hasMop) {
    return {
      matterMode: VacuumMatterCleanMode.VacuumAndMop,
      sequential: containsAnyKeyword(normalized, SEQUENTIAL_KEYWORDS),
    };
  }

  if (hasVacuum) {
    return {
      matterMode: VacuumMatterCleanMode.Vacuum,
      sequential: false,
    };
  }

  if (hasMop) {
    return {
      matterMode: VacuumMatterCleanMode.Mop,
      sequential: false,
    };
  }

  return undefined;
}

function containsAnyKeyword(
  value: string,
  keywords: readonly string[],
): boolean {
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

function asRecord(value: unknown): Record<string, unknown> {
  if (value == null || typeof value !== "object") {
    return {};
  }
  return value as Record<string, unknown>;
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
