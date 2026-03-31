import type { HomeAssistantEntityInformation } from "@home-assistant-matter-hub/common";
import { describe, expect, it } from "vitest";
import {
  resolveVacuumCleanModeData,
  VacuumMatterCleanMode,
} from "./clean-mode-data.js";

describe("resolveVacuumCleanModeData", () => {
  it("should resolve clean-mode options from a companion select entity", () => {
    const data = resolveVacuumCleanModeData(createVacuumEntity(), [
      {
        entityId: "select.roborock_qrevo_s_cleaning_mode",
        friendlyName: "Cleaning mode",
        state: "Vacuum",
        options: ["Vacuum & Mop", "Vacuum", "Mop"],
      },
    ]);

    expect(data).toEqual({
      entityId: "select.roborock_qrevo_s_cleaning_mode",
      currentMode: VacuumMatterCleanMode.Vacuum,
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
    });
  });

  it("should classify spanish clean-mode values", () => {
    const data = resolveVacuumCleanModeData(createVacuumEntity(), [
      {
        entityId: "select.roborock_qrevo_s_modo_de_limpieza",
        friendlyName: "Modo de limpieza",
        state: "Solo fregar",
        options: ["Aspirar y fregar", "Solo aspirar", "Solo fregar"],
      },
    ]);

    expect(data?.entityId).toBe("select.roborock_qrevo_s_modo_de_limpieza");
    expect(data?.currentMode).toBe(VacuumMatterCleanMode.Mop);
    expect(data?.supportedModes.map((mode) => mode.matterMode)).toEqual([
      VacuumMatterCleanMode.VacuumAndMop,
      VacuumMatterCleanMode.Vacuum,
      VacuumMatterCleanMode.Mop,
    ]);
  });

  it("should honor manual clean-mode overrides when provided", () => {
    const data = resolveVacuumCleanModeData(
      createVacuumEntity({
        cleaning_mode: "Solo aspirar",
        matter_clean_mode_entity: "select.mi_robot_modo_de_limpieza",
        matter_clean_mode_vacuum_and_mop_option: "Aspirar y fregar",
        matter_clean_mode_vacuum_option: "Solo aspirar",
        matter_clean_mode_mop_option: "Solo fregar",
      }),
    );

    expect(data?.entityId).toBe("select.mi_robot_modo_de_limpieza");
    expect(data?.currentMode).toBe(VacuumMatterCleanMode.Vacuum);
    expect(data?.supportedModes.map((mode) => mode.option)).toEqual([
      "Aspirar y fregar",
      "Solo aspirar",
      "Solo fregar",
    ]);
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
      last_changed: "2026-03-31T00:00:00.000Z",
      last_updated: "2026-03-31T00:00:00.000Z",
      attributes,
      context: { id: "context-id" },
    },
  };
}
