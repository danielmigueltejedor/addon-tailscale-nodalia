import { describe, expect, it } from "vitest";
import {
  buildVacuumCleanModeControlActions,
  resolveVacuumCurrentModeFromControls,
  resolveVacuumSupportedModesFromControls,
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

  it("should expose SmartPlan as auto mode when fan and mop controls support it", () => {
    const smartPlanAttributes = {
      fan_speed: "SmartPlan",
      fan_speed_list: ["Apagado", "Equilibrado", "Medio", "SmartPlan"],
    };
    const smartPlanCompanions: VacuumCleanModeCompanionEntity[] = [
      {
        entityId: "select.roborock_qrevo_s_intensidad_de_la_mopa",
        friendlyName: "Intensidad de la mopa",
        state: "SmartPlan",
        options: ["Apagada", "Medio", "SmartPlan"],
      },
      {
        entityId: "select.roborock_qrevo_s_modo_mopa",
        friendlyName: "Modo mopa",
        state: "SmartPlan",
        options: ["Estandar", "Profundo", "SmartPlan"],
      },
    ];

    expect(
      resolveVacuumSupportedModesFromControls(
        smartPlanAttributes,
        smartPlanCompanions,
      ),
    ).toEqual([
      {
        matterMode: VacuumMatterCleanMode.Auto,
        label: "SmartPlan",
        option: "SmartPlan",
        sequential: false,
      },
    ]);
    expect(
      resolveVacuumCurrentModeFromControls(
        smartPlanAttributes,
        smartPlanCompanions,
      ),
    ).toBe(VacuumMatterCleanMode.Auto);
  });

  it("should build robrock-compatible actions for SmartPlan mode", () => {
    const smartPlanAttributes = {
      fan_speed: "Apagado",
      fan_speed_list: ["Apagado", "Equilibrado", "Medio", "SmartPlan"],
    };
    const smartPlanCompanions: VacuumCleanModeCompanionEntity[] = [
      {
        entityId: "select.roborock_qrevo_s_intensidad_de_la_mopa",
        friendlyName: "Intensidad de la mopa",
        state: "Medio",
        options: ["Apagada", "Medio", "SmartPlan"],
      },
      {
        entityId: "select.roborock_qrevo_s_modo_mopa",
        friendlyName: "Modo mopa",
        state: "Estandar",
        options: ["Estandar", "Profundo", "SmartPlan"],
      },
    ];

    expect(
      buildVacuumCleanModeControlActions(
        "vacuum.roborock_qrevo_s",
        smartPlanAttributes,
        smartPlanCompanions,
        VacuumMatterCleanMode.Auto,
      ),
    ).toEqual([
      {
        action: "vacuum.set_fan_speed",
        entityId: "vacuum.roborock_qrevo_s",
        data: { fan_speed: "SmartPlan" },
      },
      {
        action: "select.select_option",
        entityId: "select.roborock_qrevo_s_intensidad_de_la_mopa",
        data: { option: "SmartPlan" },
      },
      {
        action: "select.select_option",
        entityId: "select.roborock_qrevo_s_modo_mopa",
        data: { option: "SmartPlan" },
      },
    ]);
  });

  it("should not keep SmartPlan when switching back to vacuum mode", () => {
    const smartPlanAttributes = {
      fan_speed: "SmartPlan",
      fan_speed_list: ["Apagado", "Equilibrado", "Medio", "SmartPlan"],
    };
    const smartPlanCompanions: VacuumCleanModeCompanionEntity[] = [
      {
        entityId: "select.roborock_qrevo_s_intensidad_de_la_mopa",
        friendlyName: "Intensidad de la mopa",
        state: "SmartPlan",
        options: ["Apagada", "Medio", "SmartPlan"],
      },
      {
        entityId: "select.roborock_qrevo_s_modo_mopa",
        friendlyName: "Modo mopa",
        state: "SmartPlan",
        options: ["Estandar", "Profundo", "SmartPlan"],
      },
    ];

    expect(
      buildVacuumCleanModeControlActions(
        "vacuum.roborock_qrevo_s",
        smartPlanAttributes,
        smartPlanCompanions,
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

  it("should recognize smart_mode aliases from fan and companion selects", () => {
    const smartModeAttributes = {
      fan_speed: "smart_mode",
      fan_speed_list: ["quiet", "balanced", "turbo", "max", "max_plus", "off", "smart_mode", "custom"],
    };
    const smartModeCompanions: VacuumCleanModeCompanionEntity[] = [
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

    expect(
      resolveVacuumSupportedModesFromControls(
        smartModeAttributes,
        smartModeCompanions,
      ),
    ).toEqual([
      {
        matterMode: VacuumMatterCleanMode.Auto,
        label: "smart_mode",
        option: "smart_mode",
        sequential: false,
      },
    ]);
    expect(
      resolveVacuumCurrentModeFromControls(
        smartModeAttributes,
        smartModeCompanions,
      ),
    ).toBe(VacuumMatterCleanMode.Auto);
  });
});
