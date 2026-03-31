import { describe, expect, it } from "vitest";
import {
  buildVacuumCleanModeControlActions,
  resolveVacuumCurrentModeFromControls,
} from "./clean-mode-controls.js";
import type { VacuumCleanModeCompanionEntity } from "./clean-mode-data.js";
import { VacuumMatterCleanMode } from "./clean-mode-data.js";

describe("clean-mode-controls", () => {
  const attributes = {
    fan_speed: "Apagado",
    fan_speed_list: ["Apagado", "Equilibrado", "Medio", "Turbo"],
  };

  const companions: VacuumCleanModeCompanionEntity[] = [
    {
      entityId: "select.roborock_qrevo_s_intensidad_de_la_mopa",
      friendlyName: "Intensidad de la mopa",
      state: "Medio",
      options: ["Apagada", "Baja", "Media", "Medio", "Alta"],
    },
    {
      entityId: "select.roborock_qrevo_s_modo_mopa",
      friendlyName: "Modo mopa",
      state: "Profundo",
      options: ["Estandar", "Profundo"],
    },
  ];

  it("should derive mop mode when fan is off and mop intensity is enabled", () => {
    expect(
      resolveVacuumCurrentModeFromControls(attributes, companions),
    ).toBe(VacuumMatterCleanMode.Mop);
  });

  it("should build robrock-compatible actions for mop mode", () => {
    expect(
      buildVacuumCleanModeControlActions(
        "vacuum.roborock_qrevo_s",
        attributes,
        companions,
        VacuumMatterCleanMode.Mop,
      ),
    ).toEqual([
      {
        action: "vacuum.set_fan_speed",
        entityId: "vacuum.roborock_qrevo_s",
        data: { fan_speed: "Apagado" },
      },
      {
        action: "select.select_option",
        entityId: "select.roborock_qrevo_s_intensidad_de_la_mopa",
        data: { option: "Medio" },
      },
      {
        action: "select.select_option",
        entityId: "select.roborock_qrevo_s_modo_mopa",
        data: { option: "Estandar" },
      },
    ]);
  });

  it("should build robrock-compatible actions for vacuum mode", () => {
    expect(
      buildVacuumCleanModeControlActions(
        "vacuum.roborock_qrevo_s",
        attributes,
        companions,
        VacuumMatterCleanMode.Vacuum,
      ),
    ).toEqual([
      {
        action: "select.select_option",
        entityId: "select.roborock_qrevo_s_intensidad_de_la_mopa",
        data: { option: "Apagada" },
      },
      {
        action: "vacuum.set_fan_speed",
        entityId: "vacuum.roborock_qrevo_s",
        data: { fan_speed: "Equilibrado" },
      },
    ]);
  });

  it("should build robrock-compatible actions for vacuum-and-mop mode", () => {
    expect(
      buildVacuumCleanModeControlActions(
        "vacuum.roborock_qrevo_s",
        attributes,
        companions,
        VacuumMatterCleanMode.VacuumAndMop,
      ),
    ).toEqual([
      {
        action: "vacuum.set_fan_speed",
        entityId: "vacuum.roborock_qrevo_s",
        data: { fan_speed: "Medio" },
      },
      {
        action: "select.select_option",
        entityId: "select.roborock_qrevo_s_modo_mopa",
        data: { option: "Estandar" },
      },
      {
        action: "select.select_option",
        entityId: "select.roborock_qrevo_s_intensidad_de_la_mopa",
        data: { option: "Medio" },
      },
    ]);
  });
});
