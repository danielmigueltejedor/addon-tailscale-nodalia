export var ClimateHvacMode;
(function (ClimateHvacMode) {
    ClimateHvacMode["off"] = "off";
    ClimateHvacMode["heat"] = "heat";
    ClimateHvacMode["cool"] = "cool";
    ClimateHvacMode["heat_cool"] = "heat_cool";
    ClimateHvacMode["auto"] = "auto";
    ClimateHvacMode["dry"] = "dry";
    ClimateHvacMode["fan_only"] = "fan_only";
})(ClimateHvacMode || (ClimateHvacMode = {}));
export var ClimateHvacAction;
(function (ClimateHvacAction) {
    ClimateHvacAction["off"] = "off";
    ClimateHvacAction["preheating"] = "preheating";
    ClimateHvacAction["heating"] = "heating";
    ClimateHvacAction["cooling"] = "cooling";
    ClimateHvacAction["drying"] = "drying";
    ClimateHvacAction["fan"] = "fan";
    ClimateHvacAction["idle"] = "idle";
    ClimateHvacAction["defrosting"] = "defrosting";
})(ClimateHvacAction || (ClimateHvacAction = {}));
export var ClimateDeviceFeature;
(function (ClimateDeviceFeature) {
    ClimateDeviceFeature[ClimateDeviceFeature["TARGET_TEMPERATURE"] = 1] = "TARGET_TEMPERATURE";
    ClimateDeviceFeature[ClimateDeviceFeature["TARGET_TEMPERATURE_RANGE"] = 2] = "TARGET_TEMPERATURE_RANGE";
    ClimateDeviceFeature[ClimateDeviceFeature["TARGET_HUMIDITY"] = 4] = "TARGET_HUMIDITY";
    ClimateDeviceFeature[ClimateDeviceFeature["FAN_MODE"] = 8] = "FAN_MODE";
    ClimateDeviceFeature[ClimateDeviceFeature["PRESET_MODE"] = 16] = "PRESET_MODE";
    ClimateDeviceFeature[ClimateDeviceFeature["SWING_MODE"] = 32] = "SWING_MODE";
    ClimateDeviceFeature[ClimateDeviceFeature["AUX_HEAT"] = 64] = "AUX_HEAT";
    ClimateDeviceFeature[ClimateDeviceFeature["TURN_OFF"] = 128] = "TURN_OFF";
    ClimateDeviceFeature[ClimateDeviceFeature["TURN_ON"] = 256] = "TURN_ON";
    ClimateDeviceFeature[ClimateDeviceFeature["SWING_HORIZONTAL_MODE"] = 512] = "SWING_HORIZONTAL_MODE";
})(ClimateDeviceFeature || (ClimateDeviceFeature = {}));
