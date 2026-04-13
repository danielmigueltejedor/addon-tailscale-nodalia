import type { HomeAssistantEntityInformation } from "@home-assistant-matter-hub/common";
import { describe, expect, it } from "vitest";
import {
  resolveEffectiveVacuumCleanModeDataForEntity,
} from "./vacuum-rvc-clean-mode-server.js";
import {
  type VacuumCleanModeCompanionEntity,
  VacuumMatterCleanMode,
} from "../clean-mode-data.js";

describe("resolveEffectiveVacuumCleanModeDataForEntity", () => {
  it("should keep Auto supported when a primary selector only exposes three manual modes", () => {
    const entity = createVacuumEntity({
      fan_speed: "smart_mode",
      fan_speed_list: [
        "quiet",
        "balanced",
        "turbo",
        "max",
        "max_plus",
        "off",
        "smart_mode",
        "custom",
      ],
    });

    const companions: VacuumCleanModeCompanionEntity[] = [
      {
        entityId: "select.roborock_qrevo_s_cleaning_mode",
        friendlyName: "Cleaning mode",
        state: "Vacuum",
        options: ["Vacuum & Mop", "Vacuum", "Mop"],
      },
      {
        entityId: "select.roborock_qrevo_s_intensidad_de_la_mopa",
        friendlyName: "Intensidad de la mopa",
        state: "smart_mode",
        options: ["off", "medium", "smart_mode"],
      },
      {
        entityId: "select.roborock_qrevo_s_modo_mopa",
        friendlyName: "Modo mopa",
        state: "smart_mode",
        options: ["standard", "deep", "smart_mode"],
      },
    ];

    const data = resolveEffectiveVacuumCleanModeDataForEntity(entity, companions);

    expect(data.currentMode).toBe(VacuumMatterCleanMode.Auto);
    expect(data.supportedModes.map((mode) => mode.matterMode)).toEqual([
      VacuumMatterCleanMode.VacuumAndMop,
      VacuumMatterCleanMode.Vacuum,
      VacuumMatterCleanMode.Mop,
      VacuumMatterCleanMode.Auto,
    ]);
    expect(data.supportedModes[3]).toMatchObject({
      matterMode: VacuumMatterCleanMode.Auto,
      label: "SmartPlan",
      option: "smart_mode",
    });
    expect(data.actionEntityIds).toEqual({
      [VacuumMatterCleanMode.VacuumAndMop]:
        "select.roborock_qrevo_s_cleaning_mode",
      [VacuumMatterCleanMode.Vacuum]:
        "select.roborock_qrevo_s_cleaning_mode",
      [VacuumMatterCleanMode.Mop]: "select.roborock_qrevo_s_cleaning_mode",
    });
  });
});

function createVacuumEntity(
  attributes: Record<string, unknown> = {},
): HomeAssistantEntityInformation {
  return {
    entity_id: "vacuum.roborock_qrevo_s",
    registry: {
      device_id: "vacuum_device",
      entity_id: "vacuum.roborock_qrevo_s",
    },
    deviceRegistry: {
      id: "vacuum_device",
    },
    state: {
      entity_id: "vacuum.roborock_qrevo_s",
      state: "docked",
      last_changed: "2026-04-02T00:00:00.000Z",
      last_updated: "2026-04-02T00:00:00.000Z",
      attributes,
      context: { id: "context-id" },
    },
  };
}
