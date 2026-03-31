#!/usr/bin/env node

// src/cli.ts
import "./bootstrap.js";

// src/polyfills.ts
var JSON_SPECIAL_KEY_TYPE = "__object__";
var JSON_SPECIAL_KEY_VALUE = "__value__";
BigInt.prototype.toJSON = function() {
  return `{"${JSON_SPECIAL_KEY_TYPE}":"BigInt","${JSON_SPECIAL_KEY_VALUE}":"${this.toString()}"}`;
};

// src/cli.ts
import * as path4 from "node:path";
import * as url from "node:url";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

// src/commands/start/start-command.ts
import "@matter/nodejs";

// src/commands/start/start-handler.ts
import * as ws from "ws";

// src/api/web-api.ts
import express3 from "express";
import basicAuth from "express-basic-auth";
import AccessControl from "express-ip-access-control";
import nocache from "nocache";

// src/core/ioc/service.ts
var Service = class {
  constructor(serviceName) {
    this.serviceName = serviceName;
  }
  construction = new Promise((resolve) => {
    setImmediate(() => {
      const init = this.initialize?.bind(this) ?? (async () => {
      });
      init().then(resolve);
    });
  });
};

// src/api/access-log.ts
function accessLogger(logger) {
  return (req, res, next) => {
    res.on("finish", () => {
      logger.debug(
        `${req.method} ${decodeURI(req.originalUrl)} ${res.statusCode} ${res.statusMessage} from ${req.socket.remoteAddress}`
      );
    });
    next();
  };
}

// ../common/dist/bridge-data.js
var BridgeStatus;
(function(BridgeStatus2) {
  BridgeStatus2["Starting"] = "starting";
  BridgeStatus2["Running"] = "running";
  BridgeStatus2["Stopped"] = "stopped";
  BridgeStatus2["Failed"] = "failed";
})(BridgeStatus || (BridgeStatus = {}));

// ../common/dist/clusters/door-lock.js
var DoorLockStatus;
(function(DoorLockStatus2) {
  DoorLockStatus2[DoorLockStatus2["locked"] = 1] = "locked";
  DoorLockStatus2[DoorLockStatus2["unlocked"] = 2] = "unlocked";
})(DoorLockStatus || (DoorLockStatus = {}));

// ../common/dist/clusters/fan-control.js
var FanControlFanMode;
(function(FanControlFanMode2) {
  FanControlFanMode2[FanControlFanMode2["Off"] = 0] = "Off";
  FanControlFanMode2[FanControlFanMode2["Low"] = 1] = "Low";
  FanControlFanMode2[FanControlFanMode2["Medium"] = 2] = "Medium";
  FanControlFanMode2[FanControlFanMode2["High"] = 3] = "High";
  FanControlFanMode2[FanControlFanMode2["On"] = 4] = "On";
  FanControlFanMode2[FanControlFanMode2["Auto"] = 5] = "Auto";
  FanControlFanMode2[FanControlFanMode2["Smart"] = 6] = "Smart";
})(FanControlFanMode || (FanControlFanMode = {}));
var FanControlAirflowDirection;
(function(FanControlAirflowDirection2) {
  FanControlAirflowDirection2[FanControlAirflowDirection2["Forward"] = 0] = "Forward";
  FanControlAirflowDirection2[FanControlAirflowDirection2["Reverse"] = 1] = "Reverse";
})(FanControlAirflowDirection || (FanControlAirflowDirection = {}));
var FanControlFanModeSequence;
(function(FanControlFanModeSequence2) {
  FanControlFanModeSequence2[FanControlFanModeSequence2["OffLowMedHigh"] = 0] = "OffLowMedHigh";
  FanControlFanModeSequence2[FanControlFanModeSequence2["OffLowHigh"] = 1] = "OffLowHigh";
  FanControlFanModeSequence2[FanControlFanModeSequence2["OffLowMedHighAuto"] = 2] = "OffLowMedHighAuto";
  FanControlFanModeSequence2[FanControlFanModeSequence2["OffLowHighAuto"] = 3] = "OffLowHighAuto";
  FanControlFanModeSequence2[FanControlFanModeSequence2["OffHighAuto"] = 4] = "OffHighAuto";
  FanControlFanModeSequence2[FanControlFanModeSequence2["OffHigh"] = 5] = "OffHigh";
})(FanControlFanModeSequence || (FanControlFanModeSequence = {}));

// ../common/dist/clusters/rvc-operational-state.js
var RvcOperationalState;
(function(RvcOperationalState4) {
  RvcOperationalState4[RvcOperationalState4["Stopped"] = 0] = "Stopped";
  RvcOperationalState4[RvcOperationalState4["Running"] = 1] = "Running";
  RvcOperationalState4[RvcOperationalState4["Paused"] = 2] = "Paused";
  RvcOperationalState4[RvcOperationalState4["Error"] = 3] = "Error";
  RvcOperationalState4[RvcOperationalState4["SeekingCharger"] = 64] = "SeekingCharger";
  RvcOperationalState4[RvcOperationalState4["Charging"] = 65] = "Charging";
  RvcOperationalState4[RvcOperationalState4["Docked"] = 66] = "Docked";
})(RvcOperationalState || (RvcOperationalState = {}));

// ../common/dist/clusters/thermostat.js
var ThermostatSystemMode;
(function(ThermostatSystemMode2) {
  ThermostatSystemMode2[ThermostatSystemMode2["Off"] = 0] = "Off";
  ThermostatSystemMode2[ThermostatSystemMode2["Auto"] = 1] = "Auto";
  ThermostatSystemMode2[ThermostatSystemMode2["Cool"] = 3] = "Cool";
  ThermostatSystemMode2[ThermostatSystemMode2["Heat"] = 4] = "Heat";
  ThermostatSystemMode2[ThermostatSystemMode2["EmergencyHeat"] = 5] = "EmergencyHeat";
  ThermostatSystemMode2[ThermostatSystemMode2["Precooling"] = 6] = "Precooling";
  ThermostatSystemMode2[ThermostatSystemMode2["FanOnly"] = 7] = "FanOnly";
  ThermostatSystemMode2[ThermostatSystemMode2["Dry"] = 8] = "Dry";
  ThermostatSystemMode2[ThermostatSystemMode2["Sleep"] = 9] = "Sleep";
})(ThermostatSystemMode || (ThermostatSystemMode = {}));

// ../common/dist/clusters/index.js
var ClusterId;
(function(ClusterId2) {
  ClusterId2["homeAssistantEntity"] = "homeAssistantEntity";
  ClusterId2["identify"] = "identify";
  ClusterId2["groups"] = "groups";
  ClusterId2["scenesManagement"] = "scenesManagement";
  ClusterId2["bridgedDeviceBasicInformation"] = "bridgedDeviceBasicInformation";
  ClusterId2["booleanState"] = "booleanState";
  ClusterId2["colorControl"] = "colorControl";
  ClusterId2["doorLock"] = "doorLock";
  ClusterId2["levelControl"] = "levelControl";
  ClusterId2["fanControl"] = "fanControl";
  ClusterId2["illuminanceMeasurement"] = "illuminanceMeasurement";
  ClusterId2["occupancySensing"] = "occupancySensing";
  ClusterId2["onOff"] = "onOff";
  ClusterId2["relativeHumidityMeasurement"] = "relativeHumidityMeasurement";
  ClusterId2["temperatureMeasurement"] = "temperatureMeasurement";
  ClusterId2["thermostat"] = "thermostat";
  ClusterId2["windowCovering"] = "windowCovering";
  ClusterId2["mediaInput"] = "mediaInput";
  ClusterId2["rvcCleanMode"] = "rvcCleanMode";
  ClusterId2["rvcRunMode"] = "rvcRunMode";
  ClusterId2["rvcOperationalState"] = "rvcOperationalState";
  ClusterId2["serviceArea"] = "serviceArea";
})(ClusterId || (ClusterId = {}));

// ../common/dist/domains/binary-sensor.js
var BinarySensorDeviceClass;
(function(BinarySensorDeviceClass2) {
  BinarySensorDeviceClass2["Battery"] = "battery";
  BinarySensorDeviceClass2["BatteryCharging"] = "battery_charging";
  BinarySensorDeviceClass2["CarbonMonoxide"] = "carbon_monoxide";
  BinarySensorDeviceClass2["Cold"] = "cold";
  BinarySensorDeviceClass2["Connectivity"] = "connectivity";
  BinarySensorDeviceClass2["Door"] = "door";
  BinarySensorDeviceClass2["GarageDoor"] = "garage_door";
  BinarySensorDeviceClass2["Gas"] = "gas";
  BinarySensorDeviceClass2["Heat"] = "heat";
  BinarySensorDeviceClass2["Light"] = "light";
  BinarySensorDeviceClass2["Lock"] = "lock";
  BinarySensorDeviceClass2["Moisture"] = "moisture";
  BinarySensorDeviceClass2["Motion"] = "motion";
  BinarySensorDeviceClass2["Moving"] = "moving";
  BinarySensorDeviceClass2["Occupancy"] = "occupancy";
  BinarySensorDeviceClass2["Opening"] = "opening";
  BinarySensorDeviceClass2["Plug"] = "plug";
  BinarySensorDeviceClass2["Power"] = "power";
  BinarySensorDeviceClass2["Presence"] = "presence";
  BinarySensorDeviceClass2["Problem"] = "problem";
  BinarySensorDeviceClass2["Running"] = "running";
  BinarySensorDeviceClass2["Safety"] = "safety";
  BinarySensorDeviceClass2["Smoke"] = "smoke";
  BinarySensorDeviceClass2["Sound"] = "sound";
  BinarySensorDeviceClass2["Tamper"] = "tamper";
  BinarySensorDeviceClass2["Update"] = "update";
  BinarySensorDeviceClass2["Vibration"] = "vibration";
  BinarySensorDeviceClass2["Window"] = "window";
})(BinarySensorDeviceClass || (BinarySensorDeviceClass = {}));

// ../common/dist/domains/climate.js
var ClimateHvacMode;
(function(ClimateHvacMode2) {
  ClimateHvacMode2["off"] = "off";
  ClimateHvacMode2["heat"] = "heat";
  ClimateHvacMode2["cool"] = "cool";
  ClimateHvacMode2["heat_cool"] = "heat_cool";
  ClimateHvacMode2["auto"] = "auto";
  ClimateHvacMode2["dry"] = "dry";
  ClimateHvacMode2["fan_only"] = "fan_only";
})(ClimateHvacMode || (ClimateHvacMode = {}));
var ClimateHvacAction;
(function(ClimateHvacAction2) {
  ClimateHvacAction2["off"] = "off";
  ClimateHvacAction2["preheating"] = "preheating";
  ClimateHvacAction2["heating"] = "heating";
  ClimateHvacAction2["cooling"] = "cooling";
  ClimateHvacAction2["drying"] = "drying";
  ClimateHvacAction2["fan"] = "fan";
  ClimateHvacAction2["idle"] = "idle";
  ClimateHvacAction2["defrosting"] = "defrosting";
})(ClimateHvacAction || (ClimateHvacAction = {}));
var ClimateDeviceFeature;
(function(ClimateDeviceFeature2) {
  ClimateDeviceFeature2[ClimateDeviceFeature2["TARGET_TEMPERATURE"] = 1] = "TARGET_TEMPERATURE";
  ClimateDeviceFeature2[ClimateDeviceFeature2["TARGET_TEMPERATURE_RANGE"] = 2] = "TARGET_TEMPERATURE_RANGE";
  ClimateDeviceFeature2[ClimateDeviceFeature2["TARGET_HUMIDITY"] = 4] = "TARGET_HUMIDITY";
  ClimateDeviceFeature2[ClimateDeviceFeature2["FAN_MODE"] = 8] = "FAN_MODE";
  ClimateDeviceFeature2[ClimateDeviceFeature2["PRESET_MODE"] = 16] = "PRESET_MODE";
  ClimateDeviceFeature2[ClimateDeviceFeature2["SWING_MODE"] = 32] = "SWING_MODE";
  ClimateDeviceFeature2[ClimateDeviceFeature2["AUX_HEAT"] = 64] = "AUX_HEAT";
  ClimateDeviceFeature2[ClimateDeviceFeature2["TURN_OFF"] = 128] = "TURN_OFF";
  ClimateDeviceFeature2[ClimateDeviceFeature2["TURN_ON"] = 256] = "TURN_ON";
  ClimateDeviceFeature2[ClimateDeviceFeature2["SWING_HORIZONTAL_MODE"] = 512] = "SWING_HORIZONTAL_MODE";
})(ClimateDeviceFeature || (ClimateDeviceFeature = {}));

// ../common/dist/domains/cover.js
var CoverDeviceState;
(function(CoverDeviceState2) {
  CoverDeviceState2["closed"] = "closed";
  CoverDeviceState2["open"] = "open";
  CoverDeviceState2["closing"] = "closing";
  CoverDeviceState2["opening"] = "opening";
})(CoverDeviceState || (CoverDeviceState = {}));
var CoverSupportedFeatures = {
  support_open: 1,
  support_close: 2,
  support_set_position: 4,
  support_stop: 8,
  support_open_tilt: 16,
  support_close_tilt: 32,
  support_stop_tilt: 64,
  support_set_tilt_position: 128
};

// ../common/dist/domains/fan.js
var FanDeviceDirection;
(function(FanDeviceDirection2) {
  FanDeviceDirection2["FORWARD"] = "forward";
  FanDeviceDirection2["REVERSE"] = "reverse";
})(FanDeviceDirection || (FanDeviceDirection = {}));
var FanDeviceFeature;
(function(FanDeviceFeature2) {
  FanDeviceFeature2[FanDeviceFeature2["SET_SPEED"] = 1] = "SET_SPEED";
  FanDeviceFeature2[FanDeviceFeature2["OSCILLATE"] = 2] = "OSCILLATE";
  FanDeviceFeature2[FanDeviceFeature2["DIRECTION"] = 4] = "DIRECTION";
  FanDeviceFeature2[FanDeviceFeature2["PRESET_MODE"] = 8] = "PRESET_MODE";
  FanDeviceFeature2[FanDeviceFeature2["TURN_OFF"] = 16] = "TURN_OFF";
  FanDeviceFeature2[FanDeviceFeature2["TURN_ON"] = 32] = "TURN_ON";
})(FanDeviceFeature || (FanDeviceFeature = {}));

// ../common/dist/domains/light.js
var LightDeviceColorMode;
(function(LightDeviceColorMode2) {
  LightDeviceColorMode2["UNKNOWN"] = "unknown";
  LightDeviceColorMode2["ONOFF"] = "onoff";
  LightDeviceColorMode2["BRIGHTNESS"] = "brightness";
  LightDeviceColorMode2["COLOR_TEMP"] = "color_temp";
  LightDeviceColorMode2["HS"] = "hs";
  LightDeviceColorMode2["XY"] = "xy";
  LightDeviceColorMode2["RGB"] = "rgb";
  LightDeviceColorMode2["RGBW"] = "rgbw";
  LightDeviceColorMode2["RGBWW"] = "rgbww";
  LightDeviceColorMode2["WHITE"] = "white";
})(LightDeviceColorMode || (LightDeviceColorMode = {}));

// ../common/dist/domains/media-player.js
var MediaPlayerDeviceClass;
(function(MediaPlayerDeviceClass2) {
  MediaPlayerDeviceClass2["Tv"] = "tv";
  MediaPlayerDeviceClass2["Speaker"] = "speaker";
  MediaPlayerDeviceClass2["Receiver"] = "receiver";
})(MediaPlayerDeviceClass || (MediaPlayerDeviceClass = {}));
var MediaPlayerDeviceFeature;
(function(MediaPlayerDeviceFeature2) {
  MediaPlayerDeviceFeature2[MediaPlayerDeviceFeature2["PAUSE"] = 1] = "PAUSE";
  MediaPlayerDeviceFeature2[MediaPlayerDeviceFeature2["SEEK"] = 2] = "SEEK";
  MediaPlayerDeviceFeature2[MediaPlayerDeviceFeature2["VOLUME_SET"] = 4] = "VOLUME_SET";
  MediaPlayerDeviceFeature2[MediaPlayerDeviceFeature2["VOLUME_MUTE"] = 8] = "VOLUME_MUTE";
  MediaPlayerDeviceFeature2[MediaPlayerDeviceFeature2["PREVIOUS_TRACK"] = 16] = "PREVIOUS_TRACK";
  MediaPlayerDeviceFeature2[MediaPlayerDeviceFeature2["NEXT_TRACK"] = 32] = "NEXT_TRACK";
  MediaPlayerDeviceFeature2[MediaPlayerDeviceFeature2["TURN_ON"] = 128] = "TURN_ON";
  MediaPlayerDeviceFeature2[MediaPlayerDeviceFeature2["TURN_OFF"] = 256] = "TURN_OFF";
  MediaPlayerDeviceFeature2[MediaPlayerDeviceFeature2["PLAY_MEDIA"] = 512] = "PLAY_MEDIA";
  MediaPlayerDeviceFeature2[MediaPlayerDeviceFeature2["VOLUME_STEP"] = 1024] = "VOLUME_STEP";
  MediaPlayerDeviceFeature2[MediaPlayerDeviceFeature2["SELECT_SOURCE"] = 2048] = "SELECT_SOURCE";
  MediaPlayerDeviceFeature2[MediaPlayerDeviceFeature2["STOP"] = 4096] = "STOP";
  MediaPlayerDeviceFeature2[MediaPlayerDeviceFeature2["CLEAR_PLAYLIST"] = 8192] = "CLEAR_PLAYLIST";
  MediaPlayerDeviceFeature2[MediaPlayerDeviceFeature2["PLAY"] = 16384] = "PLAY";
  MediaPlayerDeviceFeature2[MediaPlayerDeviceFeature2["SHUFFLE_SET"] = 32768] = "SHUFFLE_SET";
  MediaPlayerDeviceFeature2[MediaPlayerDeviceFeature2["SELECT_SOUND_MODE"] = 65536] = "SELECT_SOUND_MODE";
  MediaPlayerDeviceFeature2[MediaPlayerDeviceFeature2["BROWSE_MEDIA"] = 131072] = "BROWSE_MEDIA";
  MediaPlayerDeviceFeature2[MediaPlayerDeviceFeature2["REPEAT_SET"] = 262144] = "REPEAT_SET";
  MediaPlayerDeviceFeature2[MediaPlayerDeviceFeature2["GROUPING"] = 524288] = "GROUPING";
  MediaPlayerDeviceFeature2[MediaPlayerDeviceFeature2["MEDIA_ANNOUNCE"] = 1048576] = "MEDIA_ANNOUNCE";
  MediaPlayerDeviceFeature2[MediaPlayerDeviceFeature2["MEDIA_ENQUEUE"] = 2097152] = "MEDIA_ENQUEUE";
})(MediaPlayerDeviceFeature || (MediaPlayerDeviceFeature = {}));

// ../common/dist/domains/sensor.js
var SensorDeviceClass;
(function(SensorDeviceClass2) {
  SensorDeviceClass2["None"] = "None";
  SensorDeviceClass2["apparent_power"] = "apparent_power";
  SensorDeviceClass2["aqi"] = "aqi";
  SensorDeviceClass2["atmospheric_pressure"] = "atmospheric_pressure";
  SensorDeviceClass2["battery"] = "battery";
  SensorDeviceClass2["carbon_dioxide"] = "carbon_dioxide";
  SensorDeviceClass2["carbon_monoxide"] = "carbon_monoxide";
  SensorDeviceClass2["current"] = "current";
  SensorDeviceClass2["data_rate"] = "data_rate";
  SensorDeviceClass2["data_size"] = "data_size";
  SensorDeviceClass2["date"] = "date";
  SensorDeviceClass2["distance"] = "distance";
  SensorDeviceClass2["duration"] = "duration";
  SensorDeviceClass2["energy"] = "energy";
  SensorDeviceClass2["energy_storage"] = "energy_storage";
  SensorDeviceClass2["enum"] = "enum";
  SensorDeviceClass2["frequency"] = "frequency";
  SensorDeviceClass2["gas"] = "gas";
  SensorDeviceClass2["humidity"] = "humidity";
  SensorDeviceClass2["illuminance"] = "illuminance";
  SensorDeviceClass2["irradiance"] = "irradiance";
  SensorDeviceClass2["moisture"] = "moisture";
  SensorDeviceClass2["monetary"] = "monetary";
  SensorDeviceClass2["nitrogen_dioxide"] = "nitrogen_dioxide";
  SensorDeviceClass2["nitrogen_monoxide"] = "nitrogen_monoxide";
  SensorDeviceClass2["nitrous_oxide"] = "nitrous_oxide";
  SensorDeviceClass2["ozone"] = "ozone";
  SensorDeviceClass2["ph"] = "ph";
  SensorDeviceClass2["pm1"] = "pm1";
  SensorDeviceClass2["pm25"] = "pm25";
  SensorDeviceClass2["pm10"] = "pm10";
  SensorDeviceClass2["power_factor"] = "power_factor";
  SensorDeviceClass2["power"] = "power";
  SensorDeviceClass2["precipitation"] = "precipitation";
  SensorDeviceClass2["precipitation_intensity"] = "precipitation_intensity";
  SensorDeviceClass2["pressure"] = "pressure";
  SensorDeviceClass2["reactive_power"] = "reactive_power";
  SensorDeviceClass2["signal_strength"] = "signal_strength";
  SensorDeviceClass2["sound_pressure"] = "sound_pressure";
  SensorDeviceClass2["speed"] = "speed";
  SensorDeviceClass2["sulphur_dioxide"] = "sulphur_dioxide";
  SensorDeviceClass2["temperature"] = "temperature";
  SensorDeviceClass2["timestamp"] = "timestamp";
  SensorDeviceClass2["volatile_organic_compounds"] = "volatile_organic_compounds";
  SensorDeviceClass2["volatile_organic_compounds_parts"] = "volatile_organic_compounds_parts";
  SensorDeviceClass2["voltage"] = "voltage";
  SensorDeviceClass2["volume"] = "volume";
  SensorDeviceClass2["volume_flow_rate"] = "volume_flow_rate";
  SensorDeviceClass2["volume_storage"] = "volume_storage";
  SensorDeviceClass2["water"] = "water";
  SensorDeviceClass2["weight"] = "weight";
  SensorDeviceClass2["wind_speed"] = "wind_speed";
})(SensorDeviceClass || (SensorDeviceClass = {}));

// ../common/dist/domains/vacuum.js
var VacuumState;
(function(VacuumState2) {
  VacuumState2["cleaning"] = "cleaning";
  VacuumState2["docked"] = "docked";
  VacuumState2["returning"] = "returning";
  VacuumState2["error"] = "error";
  VacuumState2["idle"] = "idle";
  VacuumState2["paused"] = "paused";
})(VacuumState || (VacuumState = {}));
var VacuumDeviceFeature;
(function(VacuumDeviceFeature2) {
  VacuumDeviceFeature2[VacuumDeviceFeature2["TURN_ON"] = 1] = "TURN_ON";
  VacuumDeviceFeature2[VacuumDeviceFeature2["TURN_OFF"] = 2] = "TURN_OFF";
  VacuumDeviceFeature2[VacuumDeviceFeature2["PAUSE"] = 4] = "PAUSE";
  VacuumDeviceFeature2[VacuumDeviceFeature2["STOP"] = 8] = "STOP";
  VacuumDeviceFeature2[VacuumDeviceFeature2["RETURN_HOME"] = 16] = "RETURN_HOME";
  VacuumDeviceFeature2[VacuumDeviceFeature2["FAN_SPEED"] = 32] = "FAN_SPEED";
  VacuumDeviceFeature2[VacuumDeviceFeature2["BATTERY"] = 64] = "BATTERY";
  VacuumDeviceFeature2[VacuumDeviceFeature2["STATUS"] = 128] = "STATUS";
  VacuumDeviceFeature2[VacuumDeviceFeature2["SEND_COMMAND"] = 256] = "SEND_COMMAND";
  VacuumDeviceFeature2[VacuumDeviceFeature2["LOCATE"] = 512] = "LOCATE";
  VacuumDeviceFeature2[VacuumDeviceFeature2["CLEAN_SPOT"] = 1024] = "CLEAN_SPOT";
  VacuumDeviceFeature2[VacuumDeviceFeature2["MAP"] = 2048] = "MAP";
  VacuumDeviceFeature2[VacuumDeviceFeature2["STATE"] = 4096] = "STATE";
  VacuumDeviceFeature2[VacuumDeviceFeature2["START"] = 8192] = "START";
})(VacuumDeviceFeature || (VacuumDeviceFeature = {}));
var VacuumFanSpeed;
(function(VacuumFanSpeed2) {
  VacuumFanSpeed2["off"] = "off";
  VacuumFanSpeed2["low"] = "low";
  VacuumFanSpeed2["medium"] = "medium";
  VacuumFanSpeed2["high"] = "high";
  VacuumFanSpeed2["turbo"] = "turbo";
  VacuumFanSpeed2["auto"] = "auto";
  VacuumFanSpeed2["max"] = "max";
})(VacuumFanSpeed || (VacuumFanSpeed = {}));

// ../common/dist/home-assistant-domain.js
var HomeAssistantDomain;
(function(HomeAssistantDomain2) {
  HomeAssistantDomain2["automation"] = "automation";
  HomeAssistantDomain2["button"] = "button";
  HomeAssistantDomain2["binary_sensor"] = "binary_sensor";
  HomeAssistantDomain2["camera"] = "camera";
  HomeAssistantDomain2["climate"] = "climate";
  HomeAssistantDomain2["cover"] = "cover";
  HomeAssistantDomain2["fan"] = "fan";
  HomeAssistantDomain2["humidifier"] = "humidifier";
  HomeAssistantDomain2["input_boolean"] = "input_boolean";
  HomeAssistantDomain2["input_button"] = "input_button";
  HomeAssistantDomain2["light"] = "light";
  HomeAssistantDomain2["lock"] = "lock";
  HomeAssistantDomain2["media_player"] = "media_player";
  HomeAssistantDomain2["scene"] = "scene";
  HomeAssistantDomain2["script"] = "script";
  HomeAssistantDomain2["sensor"] = "sensor";
  HomeAssistantDomain2["switch"] = "switch";
  HomeAssistantDomain2["vacuum"] = "vacuum";
})(HomeAssistantDomain || (HomeAssistantDomain = {}));

// ../common/dist/home-assistant-filter.js
var HomeAssistantMatcherType;
(function(HomeAssistantMatcherType2) {
  HomeAssistantMatcherType2["Pattern"] = "pattern";
  HomeAssistantMatcherType2["Domain"] = "domain";
  HomeAssistantMatcherType2["Platform"] = "platform";
  HomeAssistantMatcherType2["Label"] = "label";
  HomeAssistantMatcherType2["Area"] = "area";
  HomeAssistantMatcherType2["EntityCategory"] = "entity_category";
})(HomeAssistantMatcherType || (HomeAssistantMatcherType = {}));

// ../common/dist/schemas/bridge-config-schema.js
var homeAssistantMatcherSchema = {
  type: "object",
  default: { type: "", value: "" },
  properties: {
    type: {
      title: "Tipo",
      type: "string",
      enum: Object.values(HomeAssistantMatcherType)
    },
    value: {
      title: "Valor",
      type: "string",
      minLength: 1
    }
  },
  required: ["type", "value"],
  additionalProperties: false
};
var homeAssistantFilterSchema = {
  title: "Incluir o excluir entidades",
  type: "object",
  properties: {
    include: {
      title: "Incluir",
      type: "array",
      items: homeAssistantMatcherSchema
    },
    exclude: {
      title: "Excluir",
      type: "array",
      items: homeAssistantMatcherSchema
    }
  },
  required: ["include", "exclude"],
  additionalProperties: false
};
var featureFlagSchema = {
  title: "Funciones avanzadas",
  type: "object",
  properties: {
    coverDoNotInvertPercentage: {
      title: "No invertir porcentajes en persianas",
      description: "Mantiene el mismo porcentaje que Home Assistant para persianas/cortinas (no est\xE1ndar Matter).",
      type: "boolean",
      default: false
    },
    includeHiddenEntities: {
      title: "Incluir entidades ocultas",
      description: "Incluye entidades marcadas como ocultas en Home Assistant.",
      type: "boolean",
      default: false
    }
  },
  additionalProperties: false
};
var deviceIdentitySchema = {
  title: "Identidad del dispositivo bridged",
  description: "Opcional: sobrescribe metadatos visibles en ecosistemas Matter (fabricante/modelo/serie/firmware) cuando Home Assistant no aporta valores correctos.",
  type: "object",
  properties: {
    vendorName: {
      title: "Fabricante",
      type: "string",
      minLength: 1,
      maxLength: 32
    },
    productName: {
      title: "Modelo",
      type: "string",
      minLength: 1,
      maxLength: 32
    },
    productLabel: {
      title: "Etiqueta de producto",
      type: "string",
      minLength: 1,
      maxLength: 64
    },
    serialNumber: {
      title: "N\xFAmero de serie",
      type: "string",
      minLength: 1,
      maxLength: 32
    },
    softwareVersionString: {
      title: "Firmware (texto)",
      description: "Opcional. D\xE9jalo vac\xEDo para usar autom\xE1ticamente la versi\xF3n detectada en Home Assistant (ej: 02.07.14).",
      type: "string",
      minLength: 1,
      maxLength: 64
    }
  },
  additionalProperties: false
};
var bridgeConfigSchema = {
  type: "object",
  title: "Configuraci\xF3n del puente",
  properties: {
    name: {
      title: "Nombre",
      type: "string",
      minLength: 1,
      maxLength: 32
    },
    port: {
      title: "Puerto",
      type: "number",
      minimum: 1
    },
    countryCode: {
      title: "C\xF3digo de pa\xEDs",
      type: "string",
      description: "C\xF3digo ISO 3166-1 alfa-2 del pa\xEDs donde se encuentra el nodo. Solo es necesario si el comisionado falla por falta de c\xF3digo de pa\xEDs.",
      minLength: 2,
      maxLength: 3
    },
    filter: homeAssistantFilterSchema,
    featureFlags: featureFlagSchema,
    deviceIdentity: deviceIdentitySchema
  },
  required: ["name", "port", "filter"],
  additionalProperties: false
};

// ../common/dist/schemas/create-bridge-request-schema.js
var createBridgeRequestSchema = bridgeConfigSchema;

// ../common/dist/schemas/update-bridge-request-schema.js
var updateBridgeRequestSchema = {
  ...bridgeConfigSchema,
  properties: {
    ...bridgeConfigSchema.properties,
    id: {
      type: "string"
    }
  },
  required: [...bridgeConfigSchema?.required ?? [], "id"]
};

// ../common/dist/utils/color-converter.js
import Color from "color";
var ColorConverter = class _ColorConverter {
  /**
   * Create a color object from `hs_color` value
   * @param hue Hue, Values between 0 and 360
   * @param saturation Saturation, Values between 0 and 100
   * @return Color
   */
  static fromHomeAssistantHS(hue, saturation) {
    return Color.hsv(hue, saturation, 100);
  }
  /**
   * Create a color object from `hue` and `saturation` values set via Matter
   * @param hue Hue, Values between 0 and 255
   * @param saturation Saturation, Values between 0 and 255
   * @return Color
   */
  static fromMatterHS(hue, saturation) {
    return Color.hsv(Math.round(hue / 254 * 360), Math.round(saturation / 254 * 100), 100);
  }
  /**
   * Create a color object from `x` and `y` values set via Matter.
   * This function was inspired by color utils of Home Assistant Core (`homeassistant.util.color.color_xy_brightness_to_RGB`).
   * @param x X, Values between 0 and 1
   * @param y Y, Values between 0 and 1
   * @return Color
   */
  static fromXY(x, y) {
    function toXYZ(x2, y2) {
      const Y = 1;
      const X = Y / y2 * x2;
      const Z = Y / y2 * (1 - x2 - y2);
      return [X, Y, Z];
    }
    function toRGB_D65(X, Y, Z) {
      const r2 = X * 1.656492 - Y * 0.354851 - Z * 0.255038;
      const g2 = -X * 0.707196 + Y * 1.655397 + Z * 0.036152;
      const b2 = X * 0.051713 - Y * 0.121364 + Z * 1.01153;
      return [r2, g2, b2];
    }
    function applyReverseGammaCorrection(x2) {
      if (x2 <= 31308e-7) {
        return 12.92 * x2;
      }
      return (1 + 0.055) * x2 ** (1 / 2.4) - 0.055;
    }
    const XYZ = toXYZ(x, y);
    let rgb = toRGB_D65(...XYZ).map(applyReverseGammaCorrection).map((v) => Math.max(v, 0));
    const maxValue = Math.max(...rgb);
    if (maxValue > 1) {
      rgb = rgb.map((v) => v / maxValue);
    }
    const [r, g, b] = rgb.map((v) => Math.round(v * 255));
    return _ColorConverter.fromRGB(r, g, b);
  }
  /**
   * Create a color object from `rgb_color` value
   * @param r Red, 0-255
   * @param g Green, 0-255
   * @param b Blue, 0-255
   * @return Color
   */
  static fromRGB(r, g, b) {
    return Color.rgb(r, g, b);
  }
  /**
   * Create a color object from `rgbw_color` value
   * @param r Red, 0-255
   * @param g Green, 0-255
   * @param b Blue, 0-255
   * @param w White, 0-255
   * @return Color
   */
  static fromRGBW(r, g, b, w) {
    return _ColorConverter.fromRGB(Math.min(255, r + w), Math.min(255, g + w), Math.min(255, b + w));
  }
  /**
   * Create a color object from `rgbww_color` value
   * @param r Red, 0-255
   * @param g Green, 0-255
   * @param b Blue, 0-255
   * @param cw Cold White, 0-255
   * @param ww Warm White, 0-255
   * @returns
   */
  static fromRGBWW(r, g, b, cw, ww) {
    return _ColorConverter.fromRGBW(r, g, b, (cw + ww) / 2);
  }
  /**
   * Extract Hue and Saturation compatible with Home Assistant
   * @param color The Color
   * @return [hue, saturation]
   */
  static toHomeAssistantHS(color) {
    const [h, s] = color.hsv().array();
    return [h, s];
  }
  /**
   * Extract Hue and Saturation compatible with Matter
   * @param color The Color
   * @return [hue, saturation]
   */
  static toMatterHS(color) {
    const [h, s] = color.hsv().array();
    return [Math.round(h / 360 * 254), Math.round(s / 100 * 254)];
  }
  /**
   * Convert Color Tempareture from Mireds to Kelvin
   * @param temperatureMireds Temperature in Mireds
   * @return Temperature in Kelvin
   */
  static temperatureMiredsToKelvin(temperatureMireds) {
    return 1e6 / temperatureMireds;
  }
  /**
   * Convert Color Tempareture from Kelvin to Mireds
   * @param temperatureKelvin Temperature in Kelvin
   * @param rounding Whether to floor or to ceil after conversion
   * @param boundaries Min and Max Boundaries to apply
   * @return Temperature in Mireds
   */
  static temperatureKelvinToMireds(temperatureKelvin, boundaries = [0, 65279]) {
    const result = 1e6 / temperatureKelvin;
    const [min, max] = boundaries;
    return Math.min(Math.max(result, min), max);
  }
};

// src/api/matter-api.ts
import { Ajv } from "ajv";
import express from "express";

// src/utils/json/endpoint-to-json.ts
function endpointToJson(endpoint, parentId) {
  const globalId = [parentId, endpoint.id].filter((i) => !!i).join(".");
  return {
    id: {
      global: globalId,
      local: endpoint.id
    },
    type: {
      name: endpoint.type.name,
      id: `0x${endpoint.type.deviceType.toString(16).padStart(4, "0")}`
    },
    endpoint: endpoint.number,
    state: endpoint.state,
    parts: endpoint.parts.map((p) => endpointToJson(p, globalId))
  };
}

// src/api/matter-api.ts
var ajv = new Ajv();
function matterApi(bridgeService) {
  const router = express.Router();
  router.get("/", (_, res) => {
    res.status(200).json({});
  });
  router.get("/bridges", async (_, res) => {
    res.status(200).json(bridgeService.bridges.map((b) => b.data));
  });
  router.post("/bridges", async (req, res) => {
    const body = req.body;
    const isValid = ajv.validate(createBridgeRequestSchema, body);
    if (!isValid) {
      res.status(400).json(ajv.errors);
    } else {
      const bridge = await bridgeService.create(body);
      res.status(200).json(bridge.data);
    }
  });
  router.get("/bridges/:bridgeId", async (req, res) => {
    const bridgeId = req.params.bridgeId;
    const bridge = bridgeService.get(bridgeId);
    if (bridge) {
      res.status(200).json(bridge.data);
    } else {
      res.status(404).send("Not Found");
    }
  });
  router.put("/bridges/:bridgeId", async (req, res) => {
    const bridgeId = req.params.bridgeId;
    const body = req.body;
    const isValid = ajv.validate(updateBridgeRequestSchema, body);
    if (!isValid) {
      res.status(400).json(ajv.errors);
    } else if (bridgeId !== body.id) {
      res.status(400).send("Path variable `bridgeId` does not match `body.id`");
    } else {
      const bridge = await bridgeService.update(body);
      if (!bridge) {
        res.status(404).send("Not Found");
      } else {
        res.status(200).json(bridge.data);
      }
    }
  });
  router.delete("/bridges/:bridgeId", async (req, res) => {
    const bridgeId = req.params.bridgeId;
    await bridgeService.delete(bridgeId);
    res.status(204).send();
  });
  router.get("/bridges/:bridgeId/actions/factory-reset", async (req, res) => {
    const bridgeId = req.params.bridgeId;
    const bridge = bridgeService.bridges.find((b) => b.id === bridgeId);
    if (bridge) {
      await bridge.factoryReset();
      await bridge.start();
      res.status(200).json(bridge.data);
    } else {
      res.status(404).send("Not Found");
    }
  });
  router.get("/bridges/:bridgeId/devices", async (req, res) => {
    const bridgeId = req.params.bridgeId;
    const bridge = bridgeService.bridges.find((b) => b.id === bridgeId);
    if (bridge) {
      res.status(200).json(endpointToJson(bridge.server));
    } else {
      res.status(404).send("Not Found");
    }
  });
  return router;
}

// src/api/proxy-support.ts
import path from "node:path";
var ingressPath = "x-ingress-path";
var forwardedPrefix = "x-forwarded-prefix";
function supportIngress(req, _, next) {
  if (!(ingressPath in req.headers)) {
    return next();
  }
  const prefix = req.header(ingressPath);
  if (!prefix) {
    return next();
  }
  const baseUrl = buildPath(prefix, req.baseUrl);
  req.baseUrl = baseUrl;
  req.originalUrl = buildPath(baseUrl, req.url);
  req.url = buildPath(req.url);
  next();
}
function supportProxyLocation(req, res, next) {
  if (!(forwardedPrefix in req.headers)) {
    return next();
  }
  const prefix = req.header(forwardedPrefix);
  if (!prefix) {
    return next();
  }
  let baseUrl = buildPath(prefix, req.baseUrl);
  if (baseUrl.endsWith("/")) {
    baseUrl = baseUrl.slice(0, -1);
  }
  if (!req.url.startsWith(`${baseUrl}/`)) {
    res.status(400).contentType("text/plain").send(`URL ${req.url} does not match base url ${baseUrl}`);
    return;
  }
  req.baseUrl = baseUrl;
  req.originalUrl = req.url;
  req.url = req.url.slice(baseUrl.length);
  next();
}
function buildPath(...paths) {
  let result = path.posix.join(...paths);
  if (!result.startsWith("/")) {
    result = `/${result}`;
  }
  return result;
}

// src/api/web-ui.ts
import fs from "node:fs";
import path2 from "node:path";
import express2 from "express";
function webUi(dist) {
  const router = express2.Router();
  if (dist) {
    const index = replaceBase(dist);
    router.get("/", index);
    router.get("/index.html", index);
    router.use(express2.static(dist));
    router.get(/.*/, index);
  }
  return router;
}
function replaceBase(dist) {
  return (req, res) => {
    let baseUrl = req.baseUrl;
    if (!baseUrl.endsWith("/")) {
      baseUrl += "/";
    }
    const content = fs.readFileSync(path2.join(dist, "index.html"), "utf8").replace(
      /<!-- BASE -->[\s\S]*<!-- \/BASE -->/,
      `<base href='${baseUrl}' />`
    );
    res.status(200).contentType("text/html").send(content);
  };
}

// src/api/web-api.ts
var WebApi = class extends Service {
  constructor(logger, bridgeService, props) {
    super("WebApi");
    this.bridgeService = bridgeService;
    this.props = props;
    this.log = logger.get(this);
    this.accessLogger = accessLogger(this.log.createChild("Access Log"));
  }
  log;
  accessLogger;
  app;
  server;
  async initialize() {
    const api = express3.Router();
    api.use(express3.json()).use(nocache()).use("/matter", matterApi(this.bridgeService));
    const middlewares = [
      this.accessLogger,
      supportIngress,
      supportProxyLocation
    ];
    if (this.props.auth) {
      middlewares.push(
        basicAuth({
          users: { [this.props.auth.username]: this.props.auth.password },
          challenge: true,
          realm: "Home Assistant Matter Hub"
        })
      );
      this.log.info("Basic authentication enabled");
    }
    if (this.props.whitelist && this.props.whitelist.length > 0) {
      middlewares.push(
        AccessControl({
          log: (clientIp, access) => {
            this.log.silly(
              `Client ${clientIp} was ${access ? "granted" : "denied"}`
            );
          },
          mode: "allow",
          allows: this.props.whitelist
        })
      );
    }
    this.app = express3().use(...middlewares).use("/api", api).use(webUi(this.props.webUiDist));
  }
  async dispose() {
    await new Promise((resolve, reject) => {
      this.server?.close((error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }
  async start() {
    if (this.server) {
      return;
    }
    this.server = await new Promise((resolve) => {
      const server = this.app.listen(this.props.port, () => {
        this.log.info(
          `HTTP server (API ${this.props.webUiDist ? "& Web App" : "only"}) listening on port ${this.props.port}`
        );
        resolve(server);
      });
    });
  }
};

// src/core/app/configure-default-environment.ts
import { Environment, VariableService } from "@matter/main";

// src/core/app/logger.ts
import { LogFormat, Logger, LogLevel as MatterLogLevel } from "@matter/general";
function logLevelFromString(level) {
  const customNames = {
    SILLY: -1 /* SILLY */
  };
  if (level.toUpperCase() in customNames) {
    return customNames[level.toUpperCase()];
  }
  return MatterLogLevel(level);
}
var LoggerService = class {
  _level = MatterLogLevel.INFO;
  customLogLevelMapping = {
    [-1 /* SILLY */]: MatterLogLevel.DEBUG
  };
  constructor(options) {
    this._level = logLevelFromString(options.level ?? "info");
    Logger.level = this.customLogLevelMapping[this._level] ?? this._level;
    Logger.format = options.disableColors ? LogFormat.PLAIN : LogFormat.ANSI;
  }
  get(nameOrService) {
    let name;
    if (typeof nameOrService === "string") {
      name = nameOrService;
    } else {
      name = nameOrService.serviceName;
    }
    return new BetterLogger(name, this._level);
  }
};
var BetterLogger = class _BetterLogger extends Logger {
  constructor(name, _level) {
    super(name);
    this.name = name;
    this._level = _level;
  }
  createChild(name) {
    return new _BetterLogger(`${this.name} / ${name}`, this._level);
  }
  silly(...values4) {
    if (this._level <= -1 /* SILLY */) {
      this.debug(...["SILLY", ...values4]);
    }
  }
};

// src/core/app/mdns.ts
import { MdnsService } from "@matter/main/protocol";
function mdns(env, options) {
  new MdnsService(env, {
    ipv4: options.ipv4,
    networkInterface: options.networkInterface
  });
}

// src/core/app/storage.ts
import fs3 from "node:fs";
import os from "node:os";
import path3 from "node:path";
import { StorageService } from "@matter/main";

// src/core/app/storage/custom-storage.ts
import fs2 from "node:fs";
import { StorageBackendDisk } from "@matter/nodejs";
import { forEach } from "lodash-es";

// src/core/app/storage/legacy-custom-storage.ts
import { StorageBackendJsonFile } from "@matter/nodejs";
import { pickBy } from "lodash-es";
var LegacyCustomStorage = class extends StorageBackendJsonFile {
  constructor(log, path5) {
    super(path5);
    this.log = log;
    const parser = this;
    const serialize = parser.toJson.bind(parser);
    const deserialize = parser.fromJson.bind(parser);
    parser.fromJson = (json) => {
      if (json.trim().length === 0) {
        return {};
      }
      try {
        const object = deserialize(json);
        return this.removeClusters(object, Object.values(ClusterId));
      } catch (e) {
        this.log.error(
          `Failed to parse json file '${path5}' with content: 

${json}

`
        );
        throw e;
      }
    };
    parser.toJson = (object) => {
      const json = serialize(
        this.removeClusters(object, [ClusterId.homeAssistantEntity])
      );
      if (json.trim().length === 0) {
        throw new Error(`Tried to write empty storage to ${path5}`);
      }
      return json;
    };
  }
  removeClusters(object, clusters) {
    if (clusters.length === 0) {
      return object;
    }
    const keys3 = Object.keys(object).filter(
      (key) => key.startsWith("root.parts.") && clusters.some((cluster) => key.endsWith(`.${cluster}`))
    );
    return pickBy(object, (_, key) => !keys3.includes(key));
  }
};

// src/core/app/storage/custom-storage.ts
var CustomStorage = class extends StorageBackendDisk {
  constructor(log, path5) {
    super(path5);
    this.log = log;
    this.path = path5;
  }
  async initialize() {
    await super.initialize();
    if (fs2.existsSync(`${this.path}.json`)) {
      await this.migrateLegacyStorage();
    }
  }
  async keys(contexts) {
    const key = this.getContextBaseKey(contexts);
    const clusters = Object.values(ClusterId);
    if (key.startsWith("root.parts.aggregator.parts.") && clusters.some((cluster) => key.endsWith(cluster))) {
      return [];
    }
    return await super.keys(contexts);
  }
  async migrateLegacyStorage() {
    const path5 = this.path;
    this.log.warn(
      `Migrating legacy storage (JSON file) to new storage (directory): ${path5}`
    );
    const legacyStorage = new LegacyCustomStorage(this.log, `${path5}.json`);
    legacyStorage.initialize();
    forEach(legacyStorage.data, (values4, context) => {
      forEach(values4, (value, key) => {
        this.set([context], key, value);
      });
    });
    await legacyStorage.close();
    fs2.renameSync(`${path5}.json`, `${path5}/backup.alpha-69.json`);
  }
};

// src/core/app/storage.ts
function storage(environment, options) {
  const logger = environment.get(LoggerService).get("CustomStorage");
  const location = resolveStorageLocation(options.location);
  fs3.mkdirSync(location, { recursive: true });
  const storageService = environment.get(StorageService);
  storageService.location = location;
  storageService.factory = (ns) => new CustomStorage(logger, path3.resolve(location, ns));
}
function resolveStorageLocation(storageLocation) {
  const homedir = os.homedir();
  return storageLocation ? path3.resolve(storageLocation.replace(/^~\//, `${homedir}/`)) : path3.join(homedir, ".home-assistant-matter-hub");
}

// src/core/app/configure-default-environment.ts
function configureDefaultEnvironment(options) {
  const env = Environment.default;
  env.runtime;
  new VariableService(env);
  env.set(LoggerService, new LoggerService(options.logging));
  mdns(env, options.mdns);
  storage(env, options.storage);
  return env;
}

// src/core/app/options.ts
import os2 from "node:os";
import { VendorId } from "@matter/main";
var Options = class {
  constructor(startOptions) {
    this.startOptions = startOptions;
  }
  get mdns() {
    return {
      ipv4: true,
      networkInterface: resolveMdnsNetworkInterface(
        this.startOptions.mdnsNetworkInterface
      )
    };
  }
  get logging() {
    return {
      level: this.startOptions.logLevel,
      disableColors: this.startOptions.disableLogColors ?? false
    };
  }
  get storage() {
    return {
      location: notEmpty(this.startOptions.storageLocation)
    };
  }
  get homeAssistant() {
    return {
      url: this.startOptions.homeAssistantUrl,
      accessToken: this.startOptions.homeAssistantAccessToken,
      refreshInterval: this.startOptions.homeAssistantRefreshInterval
    };
  }
  get webApi() {
    const auth = this.startOptions.httpAuthUsername && this.startOptions.httpAuthPassword ? {
      username: this.startOptions.httpAuthUsername,
      password: this.startOptions.httpAuthPassword
    } : void 0;
    return {
      port: this.startOptions.httpPort,
      whitelist: this.startOptions.httpIpWhitelist?.map(
        (item) => item.toString()
      ),
      webUiDist: this.startOptions.webUiDist,
      auth
    };
  }
  get bridgeService() {
    return {
      basicInformation: {
        vendorId: VendorId(65521),
        vendorName: "t0bst4r",
        productId: 32768,
        productName: "MatterHub",
        productLabel: "Home Assistant Matter Hub",
        hardwareVersion: (/* @__PURE__ */ new Date()).getFullYear(),
        softwareVersion: (/* @__PURE__ */ new Date()).getFullYear()
      }
    };
  }
};
function notEmpty(val) {
  const value = val?.trim();
  if (value == null || value.length === 0) {
    return void 0;
  }
  return value;
}
function resolveMdnsNetworkInterface(val) {
  const networkInterface = notEmpty(val);
  if (networkInterface == null) {
    return void 0;
  }
  const interfaces = os2.networkInterfaces();
  const entries = interfaces[networkInterface];
  if (entries != null && entries.some((entry) => entry != null && entry.internal !== true)) {
    return networkInterface;
  }
  console.warn(
    `Configured mDNS network interface "${networkInterface}" is not available; falling back to automatic interface selection.`
  );
  return void 0;
}

// src/core/ioc/app-environment.ts
import { StorageService as StorageService2 } from "@matter/main";

// src/services/bridges/bridge-factory.ts
var BridgeFactory = class extends Service {
};

// src/services/bridges/bridge-service.ts
import crypto from "node:crypto";
var BridgeService = class extends Service {
  constructor(bridgeStorage, bridgeFactory, props) {
    super("BridgeService");
    this.bridgeStorage = bridgeStorage;
    this.bridgeFactory = bridgeFactory;
    this.props = props;
  }
  bridges = [];
  async initialize() {
    for (const data of this.bridgeStorage.bridges) {
      await this.addBridge(data);
    }
  }
  async dispose() {
    await Promise.all(this.bridges.map((bridge) => bridge.dispose()));
  }
  async startAll() {
    for (const bridge of this.bridges) {
      await bridge.start();
    }
  }
  async refreshAll() {
    for (const bridge of this.bridges) {
      await bridge.refreshDevices();
    }
  }
  get(id) {
    return this.bridges.find((bridge) => bridge.id === id);
  }
  async create(request) {
    if (this.portUsed(request.port)) {
      throw new Error(`Port already in use: ${request.port}`);
    }
    const bridge = await this.addBridge({
      ...request,
      id: crypto.randomUUID().replace(/-/g, ""),
      basicInformation: this.props.basicInformation
    });
    await this.bridgeStorage.add(bridge.data);
    await bridge.start();
    return bridge;
  }
  async update(request) {
    if (this.portUsed(request.port, [request.id])) {
      throw new Error(`Port already in use: ${request.port}`);
    }
    const bridge = this.get(request.id);
    if (!bridge) {
      return;
    }
    await bridge.update(request);
    await this.bridgeStorage.add(bridge.data);
    return bridge;
  }
  async delete(bridgeId) {
    const bridge = this.bridges.find((bridge2) => bridge2.id === bridgeId);
    if (!bridge) {
      return;
    }
    await bridge.stop();
    await bridge.delete();
    await bridge.dispose();
    this.bridges.splice(this.bridges.indexOf(bridge), 1);
    await this.bridgeStorage.remove(bridgeId);
  }
  async addBridge(bridgeData) {
    const bridge = await this.bridgeFactory.create(bridgeData);
    this.bridges.push(bridge);
    return bridge;
  }
  portUsed(port, notId) {
    return this.bridges.filter((bridge) => notId == null || !notId.includes(bridge.id)).some((bridge) => bridge.data.port === port);
  }
};

// src/services/home-assistant/home-assistant-actions.ts
import { callService } from "home-assistant-js-websocket";

// src/utils/debounce-context.ts
import debounce from "debounce";
var DebounceContext = class {
  constructor(fn) {
    this.fn = fn;
  }
  buffers = /* @__PURE__ */ new Map();
  debouncers = /* @__PURE__ */ new Map();
  get(key, wait) {
    if (!this.debouncers.has(key)) {
      this.debouncers.set(key, this.createDebouncer(key, wait));
    }
    return this.debouncers.get(key);
  }
  getBuffer(key) {
    if (!this.buffers.has(key)) {
      this.buffers.set(key, []);
    }
    return this.buffers.get(key);
  }
  createDebounceCallback(key, wait) {
    return debounce(() => {
      const buffer = this.getBuffer(key);
      if (buffer.length) {
        this.buffers.delete(key);
        this.fn(key, buffer);
      }
    }, wait);
  }
  createDebouncer(key, wait) {
    const bufferedFn = this.createDebounceCallback(key, wait);
    const debouncer = (payload) => {
      this.getBuffer(key).push(payload);
      bufferedFn();
    };
    return Object.assign(debouncer, {
      get isPending() {
        return bufferedFn.isPending;
      },
      clear: () => bufferedFn.clear(),
      flush: () => bufferedFn.flush(),
      trigger: () => bufferedFn.trigger(),
      unregister: () => {
        this.unregister(key);
      }
    });
  }
  unregisterAll() {
    const keys3 = Object.keys(this.fn);
    for (const key of keys3) {
      this.unregister(key);
    }
  }
  unregister(key) {
    const debouncer = this.debouncers.get(key);
    if (!debouncer) {
      return;
    }
    debouncer.clear();
    this.buffers.delete(key);
    this.debouncers.delete(key);
  }
};

// src/services/home-assistant/home-assistant-actions.ts
var HomeAssistantActions = class extends Service {
  constructor(logger, client) {
    super("HomeAssistantActions");
    this.client = client;
    this.log = logger.get(this);
  }
  log;
  debounceContext = new DebounceContext(
    this.processAction.bind(this)
  );
  processAction(_key, calls) {
    if (calls.length === 0) {
      return;
    }
    const entity_id = calls[0].entityId;
    const action = calls[0].action;
    const data = Object.assign({}, ...calls.map((c) => c.data));
    const [domain, actionName] = action.split(".");
    if (!domain || !actionName) {
      this.log.warn(
        `Skipping invalid action '${action}' for entity '${entity_id}'`
      );
      return;
    }
    void this.callAction(domain, actionName, data, { entity_id }, false).catch(
      (error) => {
        const message = error instanceof Error ? error.message : typeof error === "string" ? error : JSON.stringify(error);
        this.log.warn(
          `Action '${domain}.${actionName}' for '${entity_id}' failed: ${message}`
        );
      }
    );
  }
  call(action, entityId) {
    const resolvedEntityId = action.entityId ?? entityId;
    const key = `${resolvedEntityId}-${action.action}`;
    this.debounceContext.get(key, 100)({
      action: action.action,
      data: action.data,
      entityId: resolvedEntityId
    });
  }
  async callAction(domain, action, data, target, returnResponse) {
    this.log.debug(
      `Calling action '${domain}.${action}' for target ${JSON.stringify(target)} with data ${JSON.stringify(data ?? {})}`
    );
    const result = await callService(
      this.client.connection,
      domain,
      action,
      data,
      target,
      returnResponse
    );
    return result;
  }
  async dispose() {
    this.debounceContext.unregisterAll();
  }
};

// src/services/home-assistant/home-assistant-client.ts
import {
  createConnection,
  createLongLivedTokenAuth,
  ERR_CANNOT_CONNECT,
  ERR_INVALID_AUTH,
  getConfig
} from "home-assistant-js-websocket";
var HomeAssistantClient = class extends Service {
  constructor(logger, options) {
    super("HomeAssistantClient");
    this.options = options;
    this.log = logger.get(this);
  }
  static Options = /* @__PURE__ */ Symbol.for("HomeAssistantClientProps");
  _connection;
  log;
  get connection() {
    return this._connection;
  }
  async initialize() {
    this._connection = await this.createConnection(this.options);
  }
  async dispose() {
    this.connection?.close();
  }
  async createConnection(props) {
    try {
      const connection = await createConnection({
        auth: createLongLivedTokenAuth(
          props.url.replace(/\/$/, ""),
          props.accessToken
        )
      });
      await this.waitForHomeAssistantToBeUpAndRunning(connection);
      return connection;
    } catch (reason) {
      return this.handleInitializationError(reason, props);
    }
  }
  async handleInitializationError(reason, props) {
    if (reason === ERR_CANNOT_CONNECT) {
      this.log.error(
        `Unable to connect to home assistant with url: ${props.url}. Retrying in 5 seconds...`
      );
      await new Promise((resolve) => setTimeout(resolve, 5e3));
      return this.createConnection(props);
    }
    if (reason === ERR_INVALID_AUTH) {
      throw new Error(
        "Authentication failed while connecting to home assistant"
      );
    }
    throw new Error(`Unable to connect to home assistant: ${reason}`);
  }
  async waitForHomeAssistantToBeUpAndRunning(connection) {
    this.log.info(
      "Waiting for Home Assistant to be up and running - the application will be available once a connection to Home Assistant could be established."
    );
    const getState = async () => {
      const s = await getConfig(connection).then((config6) => config6.state);
      this.log.debug(
        `Got an update from Home Assistant. System state is '${s}'.`
      );
      return s;
    };
    let state;
    while (state !== "RUNNING") {
      await new Promise((resolve) => setTimeout(resolve, 5e3));
      state = await getState();
    }
    this.log.info("Home assistant reported to be up and running");
  }
};

// src/services/home-assistant/home-assistant-config.ts
import { getConfig as getConfig2 } from "home-assistant-js-websocket";
var HomeAssistantConfig = class extends Service {
  constructor(client) {
    super("HomeAssistantConfig");
    this.client = client;
  }
  config;
  get unitSystem() {
    return this.config.unit_system;
  }
  async initialize() {
    this.config = await getConfig2(this.client.connection);
  }
};

// src/services/home-assistant/home-assistant-registry.ts
import { createHash } from "node:crypto";
import { getStates } from "home-assistant-js-websocket";
import { fromPairs, keyBy, keys, uniq, values } from "lodash-es";

// src/services/home-assistant/api/get-registry.ts
async function getRegistry(connection) {
  return await connection.sendMessagePromise({
    type: "config/entity_registry/list"
  });
}
async function getDeviceRegistry(connection) {
  return connection.sendMessagePromise({
    type: "config/device_registry/list"
  });
}

// src/services/home-assistant/home-assistant-registry.ts
var HomeAssistantRegistry = class extends Service {
  constructor(client, options) {
    super("HomeAssistantRegistry");
    this.client = client;
    this.options = options;
  }
  autoRefresh;
  _devices = {};
  get devices() {
    return this._devices;
  }
  _entities = {};
  get entities() {
    return this._entities;
  }
  _states = {};
  get states() {
    return this._states;
  }
  async initialize() {
    await this.reload();
  }
  async dispose() {
    this.disableAutoRefresh();
  }
  enableAutoRefresh(onRefresh) {
    this.disableAutoRefresh();
    this.autoRefresh = setInterval(async () => {
      await this.reload();
      onRefresh();
    }, this.options.refreshInterval * 1e3);
  }
  disableAutoRefresh() {
    if (this.autoRefresh != null) {
      clearInterval(this.autoRefresh);
    }
    this.autoRefresh = void 0;
  }
  async reload() {
    const connection = this.client.connection;
    const entityRegistry = await getRegistry(connection);
    entityRegistry.forEach((e) => {
      e.device_id = e.device_id ?? mockDeviceId(e.entity_id);
    });
    const entities = keyBy(entityRegistry, "entity_id");
    const states = keyBy(
      await getStates(connection),
      "entity_id"
    );
    const entityIds = uniq(keys(entities).concat(keys(states)));
    const allEntities = keyBy(
      entityIds.map((id) => entities[id] ?? { entity_id: id, device_id: id }),
      "entity_id"
    );
    const deviceIds = values(allEntities).map(
      (e) => e.device_id ?? e.entity_id
    );
    const realDevices = keyBy(await getDeviceRegistry(connection), "id");
    const missingDeviceIds = uniq(deviceIds.filter((d) => !realDevices[d]));
    const missingDevices = fromPairs(missingDeviceIds.map((d) => [d, { id: d }]));
    this._devices = { ...missingDevices, ...realDevices };
    this._entities = entities;
    this._states = states;
  }
};
function mockDeviceId(entityId) {
  const hash2 = createHash("sha256").update(entityId).digest("hex").substring(0, 29);
  return `e__${hash2}`;
}

// src/services/storage/app-storage.ts
var AppStorage = class extends Service {
  constructor(storageService) {
    super("AppStorage");
    this.storageService = storageService;
  }
  storageManager;
  async initialize() {
    this.storageManager = await this.storageService.open("app");
  }
  async dispose() {
    await this.storageManager.close();
  }
  createContext(context) {
    return this.storageManager.createContext(context);
  }
};

// src/services/storage/migrations/bridge/v1-to-v2.ts
async function migrateBridgeV1ToV2(storage2) {
  const bridgeIds = JSON.parse(await storage2.get("ids", "[]"));
  await storage2.set("ids", bridgeIds);
  for (const bridgeId of bridgeIds) {
    const bridgeValue = await storage2.get(bridgeId);
    if (bridgeValue === void 0) {
      continue;
    }
    const bridge = JSON.parse(bridgeValue);
    bridge.compatibility = void 0;
    await storage2.set(bridgeId, bridge);
  }
  return 2;
}

// src/services/storage/migrations/bridge/v2-to-v3.ts
async function migrateBridgeV2ToV3(storage2) {
  const bridgeIdsValue = await storage2.get("ids", []);
  let bridgeIds;
  if (typeof bridgeIdsValue === "string") {
    bridgeIds = JSON.parse(bridgeIdsValue);
    await storage2.set("ids", bridgeIds);
  } else {
    bridgeIds = bridgeIdsValue;
  }
  for (const bridgeId of bridgeIds) {
    const bridgeValue = await storage2.get(bridgeId);
    if (bridgeValue === void 0) {
      continue;
    }
    let bridge;
    if (typeof bridgeValue === "string") {
      bridge = JSON.parse(bridgeValue);
    } else {
      bridge = bridgeValue;
    }
    await storage2.set(bridgeId, bridge);
  }
  return 3;
}

// src/services/storage/migrations/bridge/v3-to-v4.ts
async function migrateBridgeV3ToV4(storage2) {
  const bridgeIds = await storage2.get("ids", []);
  for (const bridgeId of bridgeIds) {
    const bridgeValue = await storage2.get(bridgeId);
    if (bridgeValue === void 0) {
      continue;
    }
    const bridge = bridgeValue;
    const featureFlags = bridge.featureFlags;
    if (featureFlags) {
      featureFlags.coverDoNotInvertPercentage = featureFlags.mimicHaCoverPercentage ?? false;
      featureFlags.coverSwapOpenClose = featureFlags.mimicHaCoverPercentage ?? false;
      featureFlags.mimicHaCoverPercentage = void 0;
      await storage2.set(bridgeId, bridgeValue);
    }
  }
  return 4;
}

// src/services/storage/migrations/bridge/v4-to-v5.ts
async function migrateBridgeV4ToV5(storage2) {
  const bridgeIds = await storage2.get("ids", []);
  for (const bridgeId of bridgeIds) {
    const bridgeValue = await storage2.get(bridgeId);
    if (bridgeValue === void 0) {
      continue;
    }
    const bridge = bridgeValue;
    const featureFlags = bridge.featureFlags;
    if (featureFlags) {
      featureFlags.coverSwapOpenClose = void 0;
      featureFlags.matterFans = void 0;
      featureFlags.matterSpeakers = void 0;
      featureFlags.useOnOffSensorAsDefaultForBinarySensors = void 0;
      await storage2.set(bridgeId, bridgeValue);
    }
  }
  return 5;
}

// src/services/storage/bridge-storage.ts
var BridgeStorage = class extends Service {
  constructor(appStorage) {
    super("BridgeStorage");
    this.appStorage = appStorage;
  }
  storage;
  _bridges = [];
  async initialize() {
    this.storage = this.appStorage.createContext("bridges");
    await this.migrate();
    const bridgeIds = await this.storage.get("ids", []);
    const bridges = await Promise.all(
      bridgeIds.map(
        async (bridgeId) => this.storage.get(bridgeId)
      )
    );
    this._bridges = bridges.filter((b) => b !== void 0).map((bridge) => bridge);
  }
  get bridges() {
    return this._bridges;
  }
  async add(bridge) {
    const idx = this._bridges.findIndex((b) => b.id === bridge.id);
    if (idx !== -1) {
      this._bridges[idx] = bridge;
    } else {
      this._bridges.push(bridge);
    }
    await this.storage.set(bridge.id, bridge);
    await this.persistIds();
  }
  async remove(bridgeId) {
    const idx = this._bridges.findIndex((b) => b.id === bridgeId);
    if (idx >= 0) {
      this._bridges.splice(idx, 1);
    }
    await this.storage.delete(bridgeId);
    await this.persistIds();
  }
  async persistIds() {
    await this.storage.set(
      "ids",
      this._bridges.map((b) => b.id)
    );
  }
  async migrate() {
    const version = await this.storage.get("version", 1);
    let migratedVersion = version;
    if (version === 1) {
      migratedVersion = await migrateBridgeV1ToV2(this.storage);
    } else if (version === 2) {
      migratedVersion = await migrateBridgeV2ToV3(this.storage);
    } else if (version === 3) {
      migratedVersion = await migrateBridgeV3ToV4(this.storage);
    } else if (version === 4) {
      migratedVersion = await migrateBridgeV4ToV5(this.storage);
    }
    if (migratedVersion !== version) {
      await this.storage.set("version", migratedVersion);
      return this.migrate();
    }
  }
};

// src/matter/endpoints/bridge-server-node.ts
import { ServerNode as ServerNode2 } from "@matter/main/node";

// src/utils/json/create-bridge-server-config.ts
import crypto2 from "node:crypto";
import { AggregatorEndpoint } from "@matter/main/endpoints";
import { ServerNode } from "@matter/main/node";
import { VendorId as VendorId2 } from "@matter/main/types";

// src/utils/trim-to-length.ts
function trimToLength(value, maxLength, suffix) {
  const stringValue = value?.toString();
  if (!stringValue?.trim().length) {
    return void 0;
  }
  if (stringValue.length <= maxLength) {
    return stringValue;
  }
  return stringValue.substring(0, maxLength - suffix.length) + suffix;
}

// src/utils/json/create-bridge-server-config.ts
function createBridgeServerConfig(data) {
  const vendorName = trimToLength(
    data.deviceIdentity?.vendorName ?? data.basicInformation.vendorName,
    32,
    "..."
  );
  const productName = trimToLength(
    data.deviceIdentity?.productName ?? data.basicInformation.productName,
    32,
    "..."
  );
  const productLabel = trimToLength(
    data.deviceIdentity?.productLabel ?? data.basicInformation.productLabel,
    64,
    "..."
  );
  const serialNumber = trimToLength(data.deviceIdentity?.serialNumber, 32, "...") ?? hashSerial(data.id);
  const softwareVersionString = trimToLength(
    data.deviceIdentity?.softwareVersionString,
    64,
    "..."
  );
  const softwareVersion = parseVersionStringAsNumber(softwareVersionString) ?? data.basicInformation.softwareVersion;
  return {
    type: ServerNode.RootEndpoint,
    id: data.id,
    network: {
      port: data.port
    },
    productDescription: {
      name: data.name,
      deviceType: AggregatorEndpoint.deviceType
    },
    basicInformation: {
      uniqueId: data.id,
      nodeLabel: trimToLength(data.name, 32, "..."),
      vendorId: VendorId2(data.basicInformation.vendorId),
      vendorName,
      productId: data.basicInformation.productId,
      productName,
      productLabel,
      serialNumber,
      hardwareVersion: data.basicInformation.hardwareVersion,
      softwareVersion,
      ...softwareVersionString ? { softwareVersionString } : {},
      ...data.countryCode ? { location: data.countryCode } : {}
    }
  };
}
function hashSerial(value) {
  return crypto2.createHash("md5").update(`serial-${value}`).digest("hex").substring(0, 32);
}
function parseVersionStringAsNumber(softwareVersion) {
  if (softwareVersion == null) {
    return void 0;
  }
  const digits = softwareVersion.replace(/[^0-9]/g, "");
  if (digits.length === 0) {
    return void 0;
  }
  const parsed = Number.parseInt(digits, 10);
  if (!Number.isSafeInteger(parsed) || parsed < 0 || parsed > 4294967295) {
    return void 0;
  }
  return parsed;
}

// src/matter/endpoints/bridge-server-node.ts
var BridgeServerNode = class extends ServerNode2 {
  constructor(env, bridgeData, aggregator) {
    const config6 = createBridgeServerConfig(bridgeData);
    super({
      ...config6,
      environment: env,
      parts: [...config6.parts ?? [], aggregator]
    });
  }
  async factoryReset() {
    await this.cancel();
    await this.erase();
  }
};

// src/services/bridges/bridge.ts
var Bridge = class {
  constructor(env, logger, dataProvider, endpointManager) {
    this.dataProvider = dataProvider;
    this.endpointManager = endpointManager;
    this.log = logger.get(`Bridge / ${dataProvider.id}`);
    this.server = new BridgeServerNode(
      env,
      this.dataProvider,
      this.endpointManager.root
    );
  }
  log;
  server;
  status = {
    code: BridgeStatus.Stopped,
    reason: void 0
  };
  get id() {
    return this.dataProvider.id;
  }
  get data() {
    return this.dataProvider.withMetadata(
      this.status,
      this.server,
      this.aggregator.parts.size
    );
  }
  get aggregator() {
    return this.endpointManager.root;
  }
  async initialize() {
    await this.server.construction.ready.then();
    await this.refreshDevices();
  }
  async dispose() {
    await this.stop();
  }
  async refreshDevices() {
    await this.endpointManager.refreshDevices();
  }
  async start() {
    if (this.status.code === BridgeStatus.Running) {
      return;
    }
    try {
      this.status = {
        code: BridgeStatus.Starting,
        reason: "The bridge is starting... Please wait."
      };
      await this.refreshDevices();
      this.endpointManager.startObserving();
      await this.server.start();
      this.status = { code: BridgeStatus.Running };
    } catch (e) {
      const reason = "Failed to start bridge due to error:";
      this.log.error(reason, e);
      await this.stop(BridgeStatus.Failed, `${reason}
${e?.toString()}`);
    }
  }
  async stop(code = BridgeStatus.Stopped, reason = "Manually stopped") {
    this.endpointManager.stopObserving();
    await this.server.cancel();
    this.status = { code, reason };
  }
  async update(update) {
    try {
      this.dataProvider.update(update);
      await this.refreshDevices();
    } catch (e) {
      const reason = "Failed to update bridge due to error:";
      this.log.error(reason, e);
      await this.stop(BridgeStatus.Failed, `${reason}
${e?.toString()}`);
    }
  }
  async factoryReset() {
    if (this.status.code !== BridgeStatus.Running) {
      return;
    }
    await this.server.factoryReset();
    this.status = { code: BridgeStatus.Stopped };
    await this.start();
  }
  async delete() {
    await this.server.delete();
  }
};

// src/services/bridges/bridge-data-provider.ts
import { values as values2 } from "lodash-es";
var BridgeDataProvider = class extends Service {
  data;
  constructor(initial) {
    super("BridgeDataProvider");
    this.data = Object.assign({}, initial);
  }
  /************************************************
   * BridgeData interface
   ************************************************/
  get id() {
    return this.data.id;
  }
  get basicInformation() {
    return this.data.basicInformation;
  }
  get name() {
    return this.data.name;
  }
  get port() {
    return this.data.port;
  }
  get filter() {
    return this.data.filter;
  }
  get featureFlags() {
    return this.data.featureFlags;
  }
  get deviceIdentity() {
    return this.data.deviceIdentity;
  }
  get countryCode() {
    return this.data.countryCode;
  }
  /************************************************
   * Functions
   ************************************************/
  update(data) {
    if (this.id !== data.id) {
      throw new Error("ID of update request does not match bridge data id.");
    }
    Object.assign(this.data, data);
  }
  mergeDeviceIdentityDefaults(defaults) {
    const next = {};
    for (const field of DEVICE_IDENTITY_FIELDS) {
      const value = normalizeString(defaults[field]);
      if (value != null) {
        next[field] = value;
      }
    }
    if (Object.keys(next).length === 0) {
      return;
    }
    const current = this.data.deviceIdentity ?? {};
    Object.assign(this.data, {
      deviceIdentity: {
        ...next,
        ...current
      }
    });
  }
  /**
   * @deprecated
   */
  withMetadata(status, serverNode, deviceCount) {
    const commissioning = serverNode.state.commissioning;
    return {
      id: this.id,
      name: this.name,
      filter: this.filter,
      port: this.port,
      featureFlags: this.featureFlags,
      deviceIdentity: this.deviceIdentity,
      basicInformation: this.basicInformation,
      countryCode: this.countryCode,
      status: status.code,
      statusReason: status.reason,
      commissioning: commissioning ? {
        isCommissioned: commissioning.commissioned,
        passcode: commissioning.passcode,
        discriminator: commissioning.discriminator,
        manualPairingCode: commissioning.pairingCodes.manualPairingCode,
        qrPairingCode: commissioning.pairingCodes.qrPairingCode,
        fabrics: values2(commissioning.fabrics).map((fabric) => ({
          fabricIndex: fabric.fabricIndex,
          fabricId: Number(fabric.fabricId),
          nodeId: Number(fabric.nodeId),
          rootNodeId: Number(fabric.rootNodeId),
          rootVendorId: fabric.rootVendorId,
          label: fabric.label
        }))
      } : void 0,
      deviceCount
    };
  }
};
var DEVICE_IDENTITY_FIELDS = [
  "vendorName",
  "productName",
  "productLabel",
  "serialNumber",
  "softwareVersionString"
];
function normalizeString(value) {
  if (typeof value !== "string") {
    return void 0;
  }
  const normalized = value.trim();
  return normalized.length > 0 ? normalized : void 0;
}

// src/matter/endpoints/aggregator-endpoint.ts
import { Endpoint } from "@matter/main";
import { AggregatorEndpoint as AggregatorEndpointType } from "@matter/main/endpoints";
var AggregatorEndpoint2 = class extends Endpoint {
  constructor(id) {
    super(AggregatorEndpointType, { id });
  }
};

// src/matter/endpoints/legacy/legacy-endpoint.ts
import {
  DestroyedDependencyError,
  TransactionDestroyedError
} from "@matter/general";
import debounce2 from "debounce";

// src/matter/behaviors/home-assistant-entity-behavior.ts
import { Behavior, EventEmitter } from "@matter/main";

// src/utils/async-observable.ts
import { AsyncObservable as Base } from "@matter/main";
var AsyncObservable = () => Base();

// src/matter/behaviors/home-assistant-entity-behavior.ts
var HomeAssistantEntityBehavior = class extends Behavior {
  static id = ClusterId.homeAssistantEntity;
  get entityId() {
    return this.entity.entity_id;
  }
  get entity() {
    return this.state.entity;
  }
  get onChange() {
    return this.events.entity$Changed;
  }
  get isAvailable() {
    return this.entity.state.state !== "unavailable" && this.entity.state.state !== "unknown";
  }
  callAction(action) {
    const actions = this.env.get(HomeAssistantActions);
    const actionList = Array.isArray(action) ? [...action] : [action];
    actionList.forEach((entry) => actions.call(entry, this.entityId));
  }
};
((HomeAssistantEntityBehavior2) => {
  class State {
    entity;
  }
  HomeAssistantEntityBehavior2.State = State;
  class Events extends EventEmitter {
    entity$Changed = AsyncObservable();
  }
  HomeAssistantEntityBehavior2.Events = Events;
})(HomeAssistantEntityBehavior || (HomeAssistantEntityBehavior = {}));

// src/matter/endpoints/entity-endpoint.ts
import { Endpoint as Endpoint2 } from "@matter/main";
var EntityEndpoint = class extends Endpoint2 {
  constructor(type, entityId) {
    super(type, { id: createEndpointId(entityId) });
    this.entityId = entityId;
  }
};
function createEndpointId(entityId) {
  return entityId.replace(/\./g, "_");
}

// src/matter/endpoints/legacy/automation/index.ts
import { OnOffPlugInUnitDevice } from "@matter/main/devices";

// src/matter/behaviors/basic-information-server.ts
import crypto3 from "node:crypto";
import { VendorId as VendorId3 } from "@matter/main";
import { BridgedDeviceBasicInformationServer as Base2 } from "@matter/main/behaviors";

// src/utils/apply-patch-state.ts
function applyPatchState(state, patch) {
  return applyPatch(state, patch);
}
function applyPatch(state, patch) {
  const actualPatch = {};
  for (const key in patch) {
    if (Object.hasOwn(patch, key)) {
      const patchValue = patch[key];
      if (patchValue !== void 0) {
        const stateValue = state[key];
        if (!deepEqual(stateValue, patchValue)) {
          actualPatch[key] = patchValue;
        }
      }
    }
  }
  try {
    for (const key in actualPatch) {
      if (Object.hasOwn(actualPatch, key)) {
        state[key] = actualPatch[key];
      }
    }
  } catch (e) {
    throw new Error(
      `Failed to patch the following properties: ${JSON.stringify(actualPatch, null, 2)}`,
      { cause: e }
    );
  }
  return actualPatch;
}
function deepEqual(a, b) {
  if (a == null || b == null) {
    return a === b;
  }
  if (typeof a !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    return false;
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.length === b.length && a.every((vA, idx) => deepEqual(vA, b[idx]));
  }
  if (typeof a === "object" && typeof b === "object") {
    const keys3 = Object.keys({ ...a, ...b });
    return keys3.every((key) => deepEqual(a[key], b[key]));
  }
  return a === b;
}

// src/matter/behaviors/basic-information-server.ts
var BasicInformationServer = class extends Base2 {
  async initialize() {
    await super.initialize();
    const homeAssistant = await this.agent.load(HomeAssistantEntityBehavior);
    this.update(homeAssistant.entity);
    this.reactTo(homeAssistant.onChange, this.update);
  }
  update(entity) {
    const { basicInformation, deviceIdentity } = this.env.get(BridgeDataProvider);
    const device = entity.deviceRegistry;
    const attributes4 = asRecord(entity.state?.attributes);
    const vendorName = resolveVendorName(
      device,
      attributes4,
      deviceIdentity,
      basicInformation.vendorName
    );
    const productName = resolveProductName(
      device,
      attributes4,
      vendorName,
      deviceIdentity,
      basicInformation.productName
    );
    const productLabel = resolveProductLabel(
      device,
      attributes4,
      productName,
      deviceIdentity,
      basicInformation.productLabel
    );
    const relatedSerialNumber = this.resolveRelatedSerialNumber(entity);
    const serialNumber = resolveSerialNumber(
      device,
      attributes4,
      deviceIdentity,
      relatedSerialNumber,
      entity.entity_id
    );
    const softwareVersionString = resolveSoftwareVersionString(
      device,
      attributes4,
      deviceIdentity,
      this.resolveRelatedSoftwareVersionString(entity)
    );
    const softwareVersion = resolveSoftwareVersionNumber(
      basicInformation.softwareVersion,
      softwareVersionString
    );
    applyPatchState(this.state, {
      vendorId: VendorId3(basicInformation.vendorId),
      vendorName,
      productName,
      productLabel,
      hardwareVersion: basicInformation.hardwareVersion,
      softwareVersion,
      hardwareVersionString: ellipse(64, device?.hw_version),
      softwareVersionString,
      nodeLabel: ellipse(32, entity.state?.attributes?.friendly_name) ?? ellipse(32, entity.entity_id),
      reachable: entity.state?.state != null && entity.state.state !== "unavailable",
      serialNumber
    });
  }
  resolveRelatedSoftwareVersionString(entity) {
    const deviceId = entity.deviceRegistry?.id ?? entity.registry?.device_id;
    if (deviceId == null) {
      return void 0;
    }
    let registry;
    try {
      registry = this.env.get(HomeAssistantRegistry);
    } catch {
      return void 0;
    }
    for (const relatedEntity of Object.values(registry.entities)) {
      if (relatedEntity.device_id !== deviceId || relatedEntity.entity_id === entity.entity_id) {
        continue;
      }
      const relatedState = registry.states[relatedEntity.entity_id];
      if (relatedState == null) {
        continue;
      }
      const attributes4 = asRecord(relatedState.attributes);
      const [domain] = relatedEntity.entity_id.split(".");
      const fromUpdateEntity = domain === "update" ? firstNonEmpty(
        toVersionStringValue(attributes4.installed_version),
        toVersionStringValue(attributes4.current_version),
        toVersionStringValue(attributes4.latest_version),
        toVersionStringValue(attributes4.sw_version),
        toVersionStringValue(attributes4.software_version),
        toVersionStringValue(attributes4.firmware_version)
      ) : void 0;
      if (fromUpdateEntity != null) {
        return fromUpdateEntity;
      }
      if (!isLikelySoftwareVersionEntity(
        relatedEntity.entity_id,
        toStringValue(attributes4.friendly_name)
      )) {
        continue;
      }
      const fromVersionEntity = firstNonEmpty(
        toVersionStringValue(attributes4.sw_version),
        toVersionStringValue(attributes4.software_version),
        toVersionStringValue(attributes4.firmware_version),
        toFirmwareLikeVersionValue(attributes4.version),
        toFirmwareLikeVersionValue(relatedState.state)
      );
      if (fromVersionEntity != null) {
        return fromVersionEntity;
      }
    }
    return void 0;
  }
  resolveRelatedSerialNumber(entity) {
    const deviceId = entity.deviceRegistry?.id ?? entity.registry?.device_id;
    if (deviceId == null) {
      return void 0;
    }
    let registry;
    try {
      registry = this.env.get(HomeAssistantRegistry);
    } catch {
      return void 0;
    }
    for (const relatedEntity of Object.values(registry.entities)) {
      if (relatedEntity.device_id !== deviceId || relatedEntity.entity_id === entity.entity_id) {
        continue;
      }
      const relatedState = registry.states[relatedEntity.entity_id];
      if (relatedState == null) {
        continue;
      }
      const attributes4 = asRecord(relatedState.attributes);
      if (!isLikelySerialEntity(
        relatedEntity.entity_id,
        toStringValue(attributes4.friendly_name)
      )) {
        continue;
      }
      const serial = firstNonEmpty(
        toSerialStringValue(attributes4.serial_number),
        toSerialStringValue(attributes4.serialNumber),
        toSerialStringValue(attributes4.device_serial_number),
        toSerialStringValue(attributes4.device_sn),
        toSerialStringValue(attributes4.robot_serial_number),
        toSerialStringValue(attributes4.serial),
        toSerialStringValue(attributes4.sn),
        toSerialStringValue(relatedState.state)
      );
      if (serial != null) {
        return serial;
      }
    }
    return void 0;
  }
};
function resolveVendorName(device, attributes4, identityOverrides, fallback) {
  return ellipse(
    32,
    firstNonEmpty(
      identityOverrides?.vendorName,
      toStringValue(attributes4.matter_vendor_name),
      toStringValue(attributes4.vendor_name),
      toStringValue(attributes4.manufacturer),
      toStringValue(attributes4.brand),
      device?.manufacturer,
      device?.default_manufacturer
    )
  ) ?? hash(32, fallback);
}
function resolveProductName(device, attributes4, vendorName, identityOverrides, fallback) {
  const humanName = stripVendorPrefix(
    firstNonEmpty(
      toStringValue(attributes4.friendly_name),
      device?.name_by_user,
      device?.name
    ),
    vendorName
  );
  const modelName = firstNonEmpty(
    identityOverrides?.productName,
    toStringValue(attributes4.matter_product_name),
    toStringValue(attributes4.product_name),
    toStringValue(attributes4.model_name),
    toStringValue(attributes4.model),
    toStringValue(attributes4.device_model),
    device?.model,
    device?.default_model,
    device?.model_id
  );
  const preferredName = modelName == null ? humanName : isLikelyOpaqueModelName(modelName) && humanName != null ? humanName : modelName;
  return ellipse(32, preferredName) ?? hash(32, fallback);
}
function resolveProductLabel(device, attributes4, productName, identityOverrides, fallback) {
  return ellipse(
    64,
    firstNonEmpty(
      identityOverrides?.productLabel,
      toStringValue(attributes4.matter_product_label),
      toStringValue(attributes4.product_label),
      toStringValue(attributes4.friendly_name),
      device?.name_by_user,
      device?.name,
      productName,
      device?.model,
      device?.default_model,
      device?.model_id
    )
  ) ?? hash(64, fallback);
}
function resolveSerialNumber(device, attributes4, identityOverrides, relatedSerialNumber, fallback) {
  return ellipse(
    32,
    firstNonEmpty(
      identityOverrides?.serialNumber,
      toStringValue(attributes4.serial_number),
      toStringValue(attributes4.serialNumber),
      toStringValue(attributes4.device_serial_number),
      toStringValue(attributes4.device_sn),
      toStringValue(attributes4.robot_serial_number),
      toStringValue(attributes4.serial),
      toStringValue(attributes4.sn),
      device?.serial_number,
      relatedSerialNumber
    )
  ) ?? hash(32, fallback);
}
function resolveSoftwareVersionString(device, attributes4, identityOverrides, relatedSoftwareVersion) {
  return ellipse(
    64,
    firstNonEmpty(
      identityOverrides?.softwareVersionString,
      toVersionStringValue(attributes4.sw_version),
      toVersionStringValue(attributes4.software_version),
      toVersionStringValue(attributes4.firmware_version),
      toVersionStringValue(attributes4.current_version),
      toVersionStringValue(attributes4.installed_version),
      toVersionStringValue(attributes4.latest_version),
      toVersionStringValue(attributes4.fw_version),
      relatedSoftwareVersion,
      device?.sw_version,
      toFirmwareLikeVersionValue(attributes4.version)
    )
  );
}
function resolveSoftwareVersionNumber(fallback, softwareVersionString) {
  const parsed = parseVersionStringAsNumber2(softwareVersionString);
  return parsed ?? fallback;
}
function asRecord(value) {
  if (value == null || typeof value !== "object") {
    return {};
  }
  return value;
}
function toStringValue(value) {
  if (typeof value !== "string") {
    return void 0;
  }
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : void 0;
}
function toVersionStringValue(value) {
  const normalized = toStringValue(value);
  if (normalized == null) {
    return void 0;
  }
  if (!/[0-9]/.test(normalized)) {
    return void 0;
  }
  if (/^(unknown|unavailable|none|null|on|off)$/i.test(normalized)) {
    return void 0;
  }
  return normalized;
}
function toSerialStringValue(value) {
  const normalized = toStringValue(value);
  if (normalized == null) {
    return void 0;
  }
  if (/^(unknown|unavailable|none|null)$/i.test(normalized)) {
    return void 0;
  }
  return normalized;
}
function toFirmwareLikeVersionValue(value) {
  const normalized = toVersionStringValue(value);
  if (normalized == null) {
    return void 0;
  }
  if (!/[._-]/.test(normalized)) {
    return void 0;
  }
  return normalized;
}
function firstNonEmpty(...values4) {
  for (const value of values4) {
    if (value != null && value.trim().length > 0) {
      return value;
    }
  }
  return void 0;
}
function stripVendorPrefix(value, vendor) {
  if (value == null) {
    return void 0;
  }
  const trimmed = value.trim();
  if (trimmed.length === 0) {
    return void 0;
  }
  const vendorTrimmed = vendor.trim();
  if (vendorTrimmed.length === 0) {
    return trimmed;
  }
  const prefixPattern = new RegExp(
    `^${escapeRegExp(vendorTrimmed)}[\\s\\-_:|,.]*`,
    "i"
  );
  const stripped = trimmed.replace(prefixPattern, "").trim();
  return stripped.length > 0 ? stripped : trimmed;
}
function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function isLikelySoftwareVersionEntity(entityId, friendlyName) {
  const normalized = `${entityId} ${friendlyName ?? ""}`.toLowerCase();
  return normalized.includes("firmware") || normalized.includes("software") || normalized.includes("version") || normalized.includes("versi") || normalized.includes("sw_version") || normalized.includes("fw_version");
}
function isLikelySerialEntity(entityId, friendlyName) {
  const normalized = `${entityId} ${friendlyName ?? ""}`.toLowerCase();
  return normalized.includes("serial") || normalized.includes("serie") || normalized.includes("sn") || normalized.includes("device_sn");
}
function isLikelyOpaqueModelName(value) {
  const normalized = value.trim();
  if (normalized.length === 0) {
    return false;
  }
  return normalized.includes(".") || normalized.includes("_") || /[a-z]+\.[a-z]+/i.test(normalized) || /[a-z]{2,}\d{2,}/i.test(normalized);
}
function ellipse(maxLength, value) {
  return trimToLength(value, maxLength, "...");
}
function hash(maxLength, value) {
  const hashLength = 4;
  const suffix = crypto3.createHash("md5").update(value ?? "").digest("hex").substring(0, hashLength);
  return trimToLength(value, maxLength, suffix) ?? suffix;
}
function parseVersionStringAsNumber2(softwareVersion) {
  if (softwareVersion == null) {
    return void 0;
  }
  const digits = softwareVersion.replace(/[^0-9]/g, "");
  if (digits.length === 0) {
    return void 0;
  }
  const parsed = Number.parseInt(digits, 10);
  if (!Number.isSafeInteger(parsed) || parsed < 0 || parsed > 4294967295) {
    return void 0;
  }
  return parsed;
}

// src/matter/behaviors/identify-server.ts
import { IdentifyServer as Base3 } from "@matter/main/behaviors";
var IdentifyServer = class extends Base3 {
};

// src/matter/behaviors/on-off-server.ts
import { OnOffServer as Base4 } from "@matter/main/behaviors";
var FeaturedBase = Base4.with("Lighting");
var OnOffServerBase = class extends FeaturedBase {
  async initialize() {
    super.initialize();
    const homeAssistant = await this.agent.load(HomeAssistantEntityBehavior);
    this.update(homeAssistant.entity);
    this.reactTo(homeAssistant.onChange, this.update);
  }
  update({ state }) {
    applyPatchState(this.state, {
      onOff: this.isOn(state)
    });
  }
  isOn(entity) {
    return this.state.config?.isOn?.(entity, this.agent) ?? (this.agent.get(HomeAssistantEntityBehavior).isAvailable && entity.state !== "off");
  }
  on() {
    const { turnOn } = this.state.config;
    if (turnOn === null) {
      setTimeout(this.callback(this.autoReset), 1e3);
      return;
    }
    const homeAssistant = this.agent.get(HomeAssistantEntityBehavior);
    homeAssistant.callAction(
      turnOn?.(void 0, this.agent) ?? { action: "homeassistant.turn_on" }
    );
  }
  off() {
    const { turnOff } = this.state.config;
    if (turnOff === null) {
      setTimeout(this.callback(this.autoReset), 1e3);
      return;
    }
    const homeAssistant = this.agent.get(HomeAssistantEntityBehavior);
    homeAssistant.callAction(
      turnOff?.(void 0, this.agent) ?? { action: "homeassistant.turn_off" }
    );
  }
  autoReset() {
    const homeAssistant = this.agent.get(HomeAssistantEntityBehavior);
    this.update(homeAssistant.entity);
  }
};
((OnOffServerBase2) => {
  class State extends FeaturedBase.State {
    config;
  }
  OnOffServerBase2.State = State;
})(OnOffServerBase || (OnOffServerBase = {}));
function OnOffServer(config6 = {}) {
  return OnOffServerBase.set({ config: config6 });
}

// src/matter/endpoints/legacy/automation/index.ts
var AutomationOnOffServer = OnOffServer({
  isOn: () => false,
  turnOn: () => ({
    action: "automation.trigger"
  }),
  turnOff: null
}).with("Lighting");
var AutomationDeviceType = OnOffPlugInUnitDevice.with(
  BasicInformationServer,
  IdentifyServer,
  HomeAssistantEntityBehavior,
  AutomationOnOffServer
);
function AutomationDevice(homeAssistantEntity) {
  return AutomationDeviceType.set({ homeAssistantEntity });
}

// src/matter/endpoints/legacy/binary-sensor/contact-sensor.ts
import { ContactSensorDevice } from "@matter/main/devices";

// src/matter/behaviors/boolean-state-server.ts
import { BooleanStateServer as Base5 } from "@matter/main/behaviors/boolean-state";
var BooleanStateServerBase = class extends Base5 {
  async initialize() {
    await super.initialize();
    const homeAssistant = await this.agent.load(HomeAssistantEntityBehavior);
    this.update(homeAssistant.entity);
    this.reactTo(homeAssistant.onChange, this.update);
  }
  update(entity) {
    const newState = this.getStateValue(entity.state);
    applyPatchState(this.state, { stateValue: newState });
  }
  getStateValue(entity) {
    const inverted = this.state.config?.inverted;
    const isOn = this.agent.get(HomeAssistantEntityBehavior).isAvailable && entity.state !== "off";
    return inverted ? !isOn : isOn;
  }
};
((BooleanStateServerBase2) => {
  class State extends Base5.State {
    config;
  }
  BooleanStateServerBase2.State = State;
})(BooleanStateServerBase || (BooleanStateServerBase = {}));
function BooleanStateServer(config6) {
  return BooleanStateServerBase.set({ config: config6 });
}

// src/matter/endpoints/legacy/binary-sensor/contact-sensor.ts
var ContactSensorType = ContactSensorDevice.with(
  BasicInformationServer,
  IdentifyServer,
  HomeAssistantEntityBehavior,
  BooleanStateServer({ inverted: true })
);

// src/matter/endpoints/legacy/binary-sensor/occupancy-sensor.ts
import { OccupancySensorDevice } from "@matter/main/devices";

// src/matter/behaviors/occupancy-sensing-server.ts
import { OccupancySensingServer as Base6 } from "@matter/main/behaviors";
import { OccupancySensing } from "@matter/main/clusters";
var OccupancySensingServer = class extends Base6 {
  async initialize() {
    await super.initialize();
    const homeAssistant = await this.agent.load(HomeAssistantEntityBehavior);
    this.update(homeAssistant.entity);
    this.reactTo(homeAssistant.onChange, this.update);
  }
  update({ state }) {
    applyPatchState(this.state, {
      occupancy: { occupied: this.isOccupied(state) },
      occupancySensorType: OccupancySensing.OccupancySensorType.PhysicalContact,
      occupancySensorTypeBitmap: {
        pir: false,
        physicalContact: true,
        ultrasonic: false
      }
    });
  }
  isOccupied(state) {
    return this.agent.get(HomeAssistantEntityBehavior).isAvailable && state.state !== "off";
  }
};

// src/matter/endpoints/legacy/binary-sensor/occupancy-sensor.ts
var OccupancySensorType = OccupancySensorDevice.with(
  BasicInformationServer,
  IdentifyServer,
  HomeAssistantEntityBehavior,
  OccupancySensingServer
);

// src/matter/endpoints/legacy/binary-sensor/on-off-sensor.ts
import { OnOffSensorDevice } from "@matter/main/devices";
var OnOffSensorServer = OnOffServer({
  turnOn: null,
  turnOff: null
}).with();
var OnOffSensorType = OnOffSensorDevice.with(
  BasicInformationServer,
  IdentifyServer,
  HomeAssistantEntityBehavior,
  OnOffSensorServer
);

// src/matter/endpoints/legacy/binary-sensor/water-leak-detector.ts
import { WaterLeakDetectorDevice } from "@matter/main/devices";
var WaterLeakDetectorType = WaterLeakDetectorDevice.with(
  BasicInformationServer,
  IdentifyServer,
  HomeAssistantEntityBehavior,
  BooleanStateServer()
);

// src/matter/endpoints/legacy/binary-sensor/index.ts
var deviceClasses = {
  [BinarySensorDeviceClass.Occupancy]: OccupancySensorType,
  [BinarySensorDeviceClass.Motion]: OccupancySensorType,
  [BinarySensorDeviceClass.Moving]: OccupancySensorType,
  [BinarySensorDeviceClass.Presence]: OccupancySensorType,
  [BinarySensorDeviceClass.Door]: ContactSensorType,
  [BinarySensorDeviceClass.Window]: ContactSensorType,
  [BinarySensorDeviceClass.GarageDoor]: ContactSensorType,
  [BinarySensorDeviceClass.Lock]: ContactSensorType,
  [BinarySensorDeviceClass.Moisture]: WaterLeakDetectorType
};
function BinarySensorDevice(homeAssistantEntity) {
  const defaultDeviceType = OnOffSensorType;
  const attributes4 = homeAssistantEntity.entity.state.attributes;
  const deviceClass = attributes4.device_class;
  const type = deviceClass && deviceClasses[deviceClass] ? deviceClasses[deviceClass] : defaultDeviceType;
  return type.set({ homeAssistantEntity });
}

// src/matter/endpoints/legacy/button/index.ts
import { OnOffPlugInUnitDevice as OnOffPlugInUnitDevice2 } from "@matter/main/devices";
var ButtonOnOffServer = OnOffServer({
  turnOn: () => ({
    action: "button.press"
  }),
  turnOff: null
}).with("Lighting");
var ButtonEndpointType = OnOffPlugInUnitDevice2.with(
  BasicInformationServer,
  IdentifyServer,
  HomeAssistantEntityBehavior,
  ButtonOnOffServer
);
function ButtonDevice(homeAssistantEntity) {
  return ButtonEndpointType.set({ homeAssistantEntity });
}

// src/matter/endpoints/legacy/camera/index.ts
import { OnOffPlugInUnitDevice as OnOffPlugInUnitDevice3 } from "@matter/main/devices";

// src/matter/endpoints/legacy/camera/behaviors/camera-on-off-server.ts
var OFF_STATES = /* @__PURE__ */ new Set(["off", "unavailable", "unknown"]);
var CameraOnOffServer = OnOffServer({
  isOn: (entity) => !OFF_STATES.has(String(entity.state).trim().toLowerCase()),
  turnOn: () => ({ action: "camera.turn_on" }),
  turnOff: () => ({ action: "camera.turn_off" })
});

// src/matter/endpoints/legacy/camera/index.ts
var CameraEndpointType = OnOffPlugInUnitDevice3.with(
  BasicInformationServer,
  IdentifyServer,
  HomeAssistantEntityBehavior,
  CameraOnOffServer
);
function CameraDevice(homeAssistantEntity) {
  return CameraEndpointType.set({ homeAssistantEntity });
}

// src/matter/endpoints/legacy/climate/index.ts
import { ThermostatDevice } from "@matter/main/devices";

// src/utils/errors/invalid-device-error.ts
var InvalidDeviceError = class extends Error {
  constructor(reason) {
    super(`Invalid device detected. Reason: ${reason}`);
  }
};

// src/utils/test-bit.ts
function testBit(value, bitValue) {
  return !!(value & bitValue);
}

// src/matter/behaviors/humidity-measurement-server.ts
import { RelativeHumidityMeasurementServer as Base7 } from "@matter/main/behaviors";
var HumidityMeasurementServerBase = class extends Base7 {
  async initialize() {
    super.initialize();
    const homeAssistant = await this.agent.load(HomeAssistantEntityBehavior);
    this.update(homeAssistant.entity);
    this.reactTo(homeAssistant.onChange, this.update);
  }
  update(entity) {
    const humidity = this.getHumidity(this.state.config, entity.state);
    applyPatchState(this.state, { measuredValue: humidity });
  }
  getHumidity(config6, entity) {
    const humidity = config6.getValue(entity, this.agent);
    if (humidity == null) {
      return null;
    }
    return humidity * 100;
  }
};
((HumidityMeasurementServerBase2) => {
  class State extends Base7.State {
    config;
  }
  HumidityMeasurementServerBase2.State = State;
})(HumidityMeasurementServerBase || (HumidityMeasurementServerBase = {}));
function HumidityMeasurementServer(config6) {
  return HumidityMeasurementServerBase.set({ config: config6 });
}

// src/matter/endpoints/legacy/climate/behaviors/climate-humidity-measurement-server.ts
var humidityConfig = {
  getValue(entity) {
    const attributes4 = entity.attributes;
    const humidity = attributes4.current_humidity;
    if (humidity == null || Number.isNaN(+humidity)) {
      return null;
    }
    return +humidity;
  }
};
var ClimateHumidityMeasurementServer = HumidityMeasurementServer(humidityConfig);

// src/matter/endpoints/legacy/climate/behaviors/climate-on-off-server.ts
var ClimateOnOffServer = OnOffServer({
  turnOn: () => ({ action: "climate.turn_on" }),
  turnOff: () => ({ action: "climate.turn_off" })
}).with("Lighting");

// src/matter/endpoints/legacy/climate/behaviors/climate-thermostat-server.ts
import { Thermostat as Thermostat2 } from "@matter/main/clusters";

// src/utils/converters/temperature.ts
function convertTemperatureToCelsius(value, sourceUnit) {
  switch (sourceUnit) {
    case "\xB0F":
    case "F":
      return (value - 32) * (5 / 9);
    case "\xB0K":
    case "K":
      return value - 273.15;
    default:
      return value;
  }
}
function convertTemperatureFromCelsius(celsius, targetUnit) {
  switch (targetUnit) {
    case "\xB0F":
    case "F":
      return celsius * (9 / 5) + 32;
    case "K":
    case "\xB0K":
      return celsius + 273.15;
    default:
      return celsius;
  }
}
function convertTemperature(value, sourceUnit, targetUnit) {
  let result;
  if (sourceUnit.replace("\xB0", "") === targetUnit.replace("\xB0", "")) {
    result = value;
  } else {
    const celsius = convertTemperatureToCelsius(value, sourceUnit);
    result = convertTemperatureFromCelsius(celsius, targetUnit);
  }
  return result;
}
var Temperature = class _Temperature {
  constructor(value, unit) {
    this.value = value;
    this.unit = unit;
  }
  static withUnit(value, unit) {
    if (Number.isNaN(value)) {
      return void 0;
    }
    return new _Temperature(value, unit);
  }
  static celsius(value) {
    return _Temperature.withUnit(value, "\xB0C");
  }
  celsius(matter) {
    const celsius = convertTemperature(this.value, this.unit, "\xB0C");
    if (matter) {
      return Math.round(celsius * 100);
    }
    return celsius;
  }
  static kelvin(value) {
    return _Temperature.withUnit(value, "K");
  }
  kelvin() {
    return convertTemperature(this.value, this.unit, "K");
  }
  static fahrenheit(value) {
    return _Temperature.withUnit(value, "\xB0F");
  }
  fahrenheit() {
    return convertTemperature(this.value, this.unit, "\xB0F");
  }
  toUnit(unit) {
    return convertTemperature(this.value, this.unit, unit);
  }
  plus(amount, unit) {
    const convertedAmount = convertTemperature(amount, unit, this.unit);
    return new _Temperature(this.value + convertedAmount, this.unit);
  }
  equals(other) {
    if (!other) {
      return false;
    }
    const otherValue = convertTemperature(other.value, other.unit, this.unit);
    return this.value === otherValue;
  }
};

// src/matter/behaviors/thermostat-server.ts
import { ThermostatServer as Base8 } from "@matter/main/behaviors";
import { Thermostat } from "@matter/main/clusters";

// src/utils/transaction-is-offline.ts
import { hasLocalActor } from "@matter/main/protocol";
function transactionIsOffline(context) {
  return !context || hasLocalActor(context);
}

// src/matter/behaviors/thermostat-server.ts
var SystemMode = Thermostat.SystemMode;
var RunningMode = Thermostat.ThermostatRunningMode;
var FeaturedBase2 = Base8.with("Heating", "Cooling", "AutoMode");
var ThermostatServerBase = class extends FeaturedBase2 {
  async initialize() {
    this.state.controlSequenceOfOperation = this.features.cooling && this.features.heating ? Thermostat.ControlSequenceOfOperation.CoolingAndHeating : this.features.cooling ? Thermostat.ControlSequenceOfOperation.CoolingOnly : Thermostat.ControlSequenceOfOperation.HeatingOnly;
    await super.initialize();
    const homeAssistant = await this.agent.load(HomeAssistantEntityBehavior);
    this.update(homeAssistant.entity);
    this.reactTo(this.events.systemMode$Changed, this.systemModeChanged);
    if (this.features.cooling) {
      this.reactTo(
        this.events.occupiedCoolingSetpoint$Changed,
        this.coolingSetpointChanged
      );
    }
    if (this.features.heating) {
      this.reactTo(
        this.events.occupiedHeatingSetpoint$Changed,
        this.heatingSetpointChanged
      );
    }
    this.reactTo(homeAssistant.onChange, this.update);
  }
  update(entity) {
    const config6 = this.state.config;
    const minSetpointLimit = config6.getMinTemperature(entity.state, this.agent)?.celsius(true);
    const maxSetpointLimit = config6.getMaxTemperature(entity.state, this.agent)?.celsius(true);
    const localTemperature = config6.getCurrentTemperature(entity.state, this.agent)?.celsius(true);
    const targetHeatingTemperature = config6.getTargetHeatingTemperature(entity.state, this.agent)?.celsius(true) ?? this.state.occupiedHeatingSetpoint;
    const targetCoolingTemperature = config6.getTargetHeatingTemperature(entity.state, this.agent)?.celsius(true) ?? this.state.occupiedCoolingSetpoint;
    const systemMode = this.getSystemMode(entity);
    const runningMode = config6.getRunningMode(entity.state, this.agent);
    applyPatchState(this.state, {
      localTemperature,
      systemMode,
      thermostatRunningState: this.getRunningState(systemMode, runningMode),
      ...this.features.heating ? {
        occupiedHeatingSetpoint: targetHeatingTemperature,
        minHeatSetpointLimit: minSetpointLimit,
        maxHeatSetpointLimit: maxSetpointLimit,
        absMinHeatSetpointLimit: minSetpointLimit,
        absMaxHeatSetpointLimit: maxSetpointLimit
      } : {},
      ...this.features.cooling ? {
        occupiedCoolingSetpoint: targetCoolingTemperature,
        minCoolSetpointLimit: minSetpointLimit,
        maxCoolSetpointLimit: maxSetpointLimit,
        absMinCoolSetpointLimit: minSetpointLimit,
        absMaxCoolSetpointLimit: maxSetpointLimit
      } : {},
      ...this.features.autoMode ? {
        minSetpointDeadBand: 0,
        thermostatRunningMode: runningMode
      } : {}
    });
  }
  setpointRaiseLower(request) {
    const config6 = this.state.config;
    const homeAssistant = this.agent.get(HomeAssistantEntityBehavior);
    const state = homeAssistant.entity.state;
    let cool = config6.getTargetCoolingTemperature(state, this.agent);
    let heat = config6.getTargetHeatingTemperature(state, this.agent);
    if (!heat && !cool) {
      return;
    }
    heat = heat ?? cool;
    cool = cool ?? heat;
    const adjustedCool = request.mode !== Thermostat.SetpointRaiseLowerMode.Heat ? cool.plus(request.amount / 1e3, "\xB0C") : cool;
    const adjustedHeat = request.mode !== Thermostat.SetpointRaiseLowerMode.Cool ? heat.plus(request.amount / 1e3, "\xB0C") : heat;
    this.setTemperature(adjustedHeat, adjustedCool, request.mode);
  }
  heatingSetpointChanged(value, _oldValue, context) {
    if (transactionIsOffline(context)) {
      return;
    }
    const next = Temperature.celsius(value / 100);
    if (!next) {
      return;
    }
    this.setTemperature(
      next,
      Temperature.celsius(this.state.occupiedCoolingSetpoint / 100),
      Thermostat.SetpointRaiseLowerMode.Heat
    );
  }
  coolingSetpointChanged(value, _oldValue, context) {
    if (transactionIsOffline(context)) {
      return;
    }
    const next = Temperature.celsius(value / 100);
    if (!next) {
      return;
    }
    this.setTemperature(
      Temperature.celsius(this.state.occupiedHeatingSetpoint / 100),
      next,
      Thermostat.SetpointRaiseLowerMode.Cool
    );
  }
  setTemperature(low, high, mode) {
    const config6 = this.state.config;
    const homeAssistant = this.agent.get(HomeAssistantEntityBehavior);
    const supportsTemperatureRange = config6.supportsTemperatureRange(
      homeAssistant.entity.state,
      this.agent
    );
    let action;
    if (supportsTemperatureRange) {
      action = config6.setTargetTemperatureRange({ low, high }, this.agent);
    } else {
      const both = mode === Thermostat.SetpointRaiseLowerMode.Heat ? low : high;
      action = config6.setTargetTemperature(both, this.agent);
    }
    homeAssistant.callAction(action);
  }
  systemModeChanged(systemMode, _oldValue, context) {
    if (transactionIsOffline(context)) {
      return;
    }
    const homeAssistant = this.agent.get(HomeAssistantEntityBehavior);
    homeAssistant.callAction(
      this.state.config.setSystemMode(systemMode, this.agent)
    );
  }
  getSystemMode(entity) {
    let systemMode = this.state.config.getSystemMode(entity.state, this.agent);
    if (systemMode === Thermostat.SystemMode.Auto) {
      systemMode = this.features.autoMode ? SystemMode.Auto : this.features.heating ? SystemMode.Heat : this.features.cooling ? SystemMode.Cool : SystemMode.Sleep;
    }
    return systemMode;
  }
  getRunningState(systemMode, runningMode) {
    const allOff = {
      cool: false,
      fan: false,
      heat: false,
      heatStage2: false,
      coolStage2: false,
      fanStage2: false,
      fanStage3: false
    };
    const heat = { ...allOff, heat: true };
    const cool = { ...allOff, cool: true };
    const dry = { ...allOff, heat: true, fan: true };
    const fanOnly = { ...allOff, fan: true };
    switch (systemMode) {
      case SystemMode.Heat:
      case SystemMode.EmergencyHeat:
        return heat;
      case SystemMode.Cool:
      case SystemMode.Precooling:
        return cool;
      case SystemMode.Dry:
        return dry;
      case SystemMode.FanOnly:
        return fanOnly;
      case SystemMode.Off:
      case SystemMode.Sleep:
        return allOff;
      case SystemMode.Auto:
        switch (runningMode) {
          case RunningMode.Heat:
            return heat;
          case RunningMode.Cool:
            return cool;
          case RunningMode.Off:
            return allOff;
        }
    }
  }
};
((ThermostatServerBase2) => {
  class State extends FeaturedBase2.State {
    config;
  }
  ThermostatServerBase2.State = State;
})(ThermostatServerBase || (ThermostatServerBase = {}));
function ThermostatServer(config6) {
  return ThermostatServerBase.set({ config: config6 });
}

// src/matter/endpoints/legacy/climate/behaviors/climate-thermostat-server.ts
var getUnit = (agent) => agent.env.get(HomeAssistantConfig).unitSystem.temperature;
var attributes = (entity) => entity.attributes;
var getTemp = (agent, entity, attributeName) => {
  const temperature = attributes(entity)[attributeName];
  const unit = getUnit(agent);
  if (temperature != null) {
    return Temperature.withUnit(+temperature, unit);
  }
};
var systemModeToHvacMode = {
  [Thermostat2.SystemMode.Auto]: ClimateHvacMode.heat_cool,
  [Thermostat2.SystemMode.Precooling]: ClimateHvacMode.cool,
  [Thermostat2.SystemMode.Cool]: ClimateHvacMode.cool,
  [Thermostat2.SystemMode.Heat]: ClimateHvacMode.heat,
  [Thermostat2.SystemMode.EmergencyHeat]: ClimateHvacMode.heat,
  [Thermostat2.SystemMode.FanOnly]: ClimateHvacMode.fan_only,
  [Thermostat2.SystemMode.Dry]: ClimateHvacMode.dry,
  [Thermostat2.SystemMode.Sleep]: ClimateHvacMode.off,
  [Thermostat2.SystemMode.Off]: ClimateHvacMode.off
};
var hvacActionToRunningMode = {
  [ClimateHvacAction.preheating]: Thermostat2.ThermostatRunningMode.Heat,
  [ClimateHvacAction.defrosting]: Thermostat2.ThermostatRunningMode.Heat,
  [ClimateHvacAction.heating]: Thermostat2.ThermostatRunningMode.Heat,
  [ClimateHvacAction.drying]: Thermostat2.ThermostatRunningMode.Heat,
  [ClimateHvacAction.cooling]: Thermostat2.ThermostatRunningMode.Cool,
  [ClimateHvacAction.fan]: Thermostat2.ThermostatRunningMode.Off,
  [ClimateHvacAction.idle]: Thermostat2.ThermostatRunningMode.Off,
  [ClimateHvacAction.off]: Thermostat2.ThermostatRunningMode.Off
};
var hvacModeToSystemMode = {
  [ClimateHvacMode.heat]: Thermostat2.SystemMode.Heat,
  [ClimateHvacMode.cool]: Thermostat2.SystemMode.Cool,
  [ClimateHvacMode.auto]: Thermostat2.SystemMode.Auto,
  [ClimateHvacMode.heat_cool]: Thermostat2.SystemMode.Auto,
  [ClimateHvacMode.dry]: Thermostat2.SystemMode.Dry,
  [ClimateHvacMode.fan_only]: Thermostat2.SystemMode.FanOnly,
  [ClimateHvacMode.off]: Thermostat2.SystemMode.Off
};
var config = {
  supportsTemperatureRange: (entity) => testBit(
    entity.attributes.supported_features ?? 0,
    ClimateDeviceFeature.TARGET_TEMPERATURE_RANGE
  ),
  getMinTemperature: (entity, agent) => getTemp(agent, entity, "min_temp"),
  getMaxTemperature: (entity, agent) => getTemp(agent, entity, "max_temp"),
  getCurrentTemperature: (entity, agent) => getTemp(agent, entity, "current_temperature"),
  getTargetHeatingTemperature: (entity, agent) => getTemp(agent, entity, "target_temp_low") ?? getTemp(agent, entity, "target_temperature") ?? getTemp(agent, entity, "temperature"),
  getTargetCoolingTemperature: (entity, agent) => getTemp(agent, entity, "target_temp_high") ?? getTemp(agent, entity, "target_temperature") ?? getTemp(agent, entity, "temperature"),
  getSystemMode: (entity) => hvacModeToSystemMode[entity.state] ?? Thermostat2.SystemMode.Off,
  getRunningMode: (entity) => {
    const action = attributes(entity).hvac_action;
    if (!action) {
      return Thermostat2.ThermostatRunningMode.Off;
    }
    return hvacActionToRunningMode[action] ?? Thermostat2.ThermostatRunningMode.Off;
  },
  setSystemMode: (systemMode) => ({
    action: "climate.set_hvac_mode",
    data: {
      hvac_mode: systemModeToHvacMode[systemMode] ?? ClimateHvacMode.off
    }
  }),
  setTargetTemperature: (value, agent) => ({
    action: "climate.set_temperature",
    data: {
      temperature: value.toUnit(getUnit(agent))
    }
  }),
  setTargetTemperatureRange: ({ low, high }, agent) => ({
    action: "climate.set_temperature",
    data: {
      target_temp_low: low.toUnit(getUnit(agent)),
      target_temp_high: high.toUnit(getUnit(agent))
    }
  })
};
var ClimateThermostatServer = ThermostatServer(config);

// src/matter/endpoints/legacy/climate/index.ts
function thermostatFeatures(supportsCooling, supportsHeating) {
  const features = /* @__PURE__ */ new Set();
  if (supportsCooling) {
    features.add("Cooling");
  }
  if (supportsHeating) {
    features.add("Heating");
  }
  if (supportsHeating && supportsCooling) {
    features.add("AutoMode");
  }
  return features;
}
var ClimateDeviceType = (supportsCooling, supportsHeating, supportsOnOff, supportsHumidity) => {
  const features = thermostatFeatures(supportsCooling, supportsHeating);
  if (features.size === 0) {
    throw new InvalidDeviceError(
      'Climates have to support either "heating" or "cooling". Just "auto" is not enough.'
    );
  }
  const additionalClusters = [];
  if (supportsOnOff) {
    additionalClusters.push(ClimateOnOffServer);
  }
  if (supportsHumidity) {
    additionalClusters.push(ClimateHumidityMeasurementServer);
  }
  return ThermostatDevice.with(
    BasicInformationServer,
    IdentifyServer,
    HomeAssistantEntityBehavior,
    ClimateThermostatServer.with(...features),
    ...additionalClusters
  );
};
var coolingModes = [
  ClimateHvacMode.heat_cool,
  ClimateHvacMode.cool
];
var heatingModes = [
  ClimateHvacMode.heat_cool,
  ClimateHvacMode.heat
];
function ClimateDevice(homeAssistantEntity) {
  const attributes4 = homeAssistantEntity.entity.state.attributes;
  const supportedFeatures = attributes4.supported_features ?? 0;
  const supportsCooling = coolingModes.some(
    (mode) => attributes4.hvac_modes.includes(mode)
  );
  const supportsHeating = heatingModes.some(
    (mode) => attributes4.hvac_modes.includes(mode)
  );
  const supportsHumidity = testBit(
    supportedFeatures,
    ClimateDeviceFeature.TARGET_HUMIDITY
  );
  const supportsOnOff = testBit(supportedFeatures, ClimateDeviceFeature.TURN_ON) && testBit(supportedFeatures, ClimateDeviceFeature.TURN_OFF);
  return ClimateDeviceType(
    supportsCooling,
    supportsHeating,
    supportsOnOff,
    supportsHumidity
  ).set({ homeAssistantEntity });
}

// src/matter/endpoints/legacy/cover/index.ts
import { WindowCoveringDevice } from "@matter/main/devices";

// src/matter/endpoints/legacy/cover/behaviors/cover-window-covering-server.ts
import { WindowCovering as WindowCovering2 } from "@matter/main/clusters";

// src/matter/behaviors/window-covering-server.ts
import {
  WindowCoveringServer as Base9,
  MovementDirection,
  MovementType
} from "@matter/main/behaviors";
import { WindowCovering } from "@matter/main/clusters";
var FeaturedBase3 = Base9.with(
  "Lift",
  "PositionAwareLift",
  "Tilt",
  "PositionAwareTilt",
  "AbsolutePosition"
);
var WindowCoveringServerBase = class extends FeaturedBase3 {
  async initialize() {
    await super.initialize();
    const homeAssistant = await this.agent.load(HomeAssistantEntityBehavior);
    this.update(homeAssistant.entity);
    this.reactTo(homeAssistant.onChange, this.update);
  }
  update(entity) {
    const config6 = this.state.config;
    const state = entity.state;
    const movementStatus = config6.getMovementStatus(state, this.agent);
    const normalize = (value) => {
      if (value == null) {
        return value;
      }
      return Math.min(100, Math.abs(value));
    };
    const currentLift = normalize(
      config6.getCurrentLiftPosition(state, this.agent)
    );
    const currentLift100ths = currentLift != null ? currentLift * 100 : null;
    const currentTilt = normalize(
      config6.getCurrentTiltPosition(state, this.agent)
    );
    const currentTilt100ths = currentTilt != null ? currentTilt * 100 : null;
    applyPatchState(this.state, {
      type: this.features.lift && this.features.tilt ? WindowCovering.WindowCoveringType.TiltBlindLift : this.features.tilt ? WindowCovering.WindowCoveringType.TiltBlindTiltOnly : WindowCovering.WindowCoveringType.Rollershade,
      endProductType: this.features.lift && this.features.tilt ? WindowCovering.EndProductType.SheerShade : this.features.tilt ? WindowCovering.EndProductType.TiltOnlyInteriorBlind : WindowCovering.EndProductType.RollerShade,
      operationalStatus: {
        global: movementStatus,
        ...this.features.lift ? { lift: movementStatus } : {},
        ...this.features.tilt ? { tilt: movementStatus } : {}
      },
      ...this.features.absolutePosition && this.features.lift ? {
        installedOpenLimitLift: 0,
        installedClosedLimitLift: 1e4,
        currentPositionLift: currentLift100ths
      } : {},
      ...this.features.absolutePosition && this.features.tilt ? {
        installedOpenLimitTilt: 0,
        installedClosedLimitTilt: 1e4,
        currentPositionTilt: currentTilt100ths
      } : {},
      ...this.features.positionAwareLift ? {
        currentPositionLiftPercentage: currentLift,
        currentPositionLiftPercent100ths: currentLift100ths,
        targetPositionLiftPercent100ths: this.state.targetPositionLiftPercent100ths ?? currentLift100ths
      } : {},
      ...this.features.positionAwareTilt ? {
        currentPositionTiltPercentage: currentTilt,
        currentPositionTiltPercent100ths: currentTilt100ths,
        targetPositionTiltPercent100ths: this.state.targetPositionTiltPercent100ths ?? currentTilt100ths
      } : {}
    });
  }
  async handleMovement(type, _, direction, targetPercent100ths) {
    const currentLift = this.state.currentPositionLiftPercent100ths ?? 0;
    const currentTilt = this.state.currentPositionTiltPercent100ths ?? 0;
    if (type === MovementType.Lift) {
      if (targetPercent100ths != null && this.features.absolutePosition) {
        this.handleGoToLiftPosition(targetPercent100ths);
      } else if (direction === MovementDirection.Close || targetPercent100ths != null && targetPercent100ths > currentLift) {
        this.handleLiftClose();
      } else if (direction === MovementDirection.Open) {
        this.handleLiftOpen();
      }
    } else if (type === MovementType.Tilt) {
      if (targetPercent100ths != null && this.features.absolutePosition) {
        this.handleGoToTiltPosition(targetPercent100ths);
      } else if (direction === MovementDirection.Close || targetPercent100ths != null && targetPercent100ths > currentTilt) {
        this.handleTiltClose();
      } else if (direction === MovementDirection.Open) {
        this.handleTiltOpen();
      }
    }
  }
  handleStopMovement() {
    const homeAssistant = this.agent.get(HomeAssistantEntityBehavior);
    homeAssistant.callAction(this.state.config.stopCover(void 0, this.agent));
  }
  handleLiftOpen() {
    const homeAssistant = this.agent.get(HomeAssistantEntityBehavior);
    homeAssistant.callAction(
      this.state.config.openCoverLift(void 0, this.agent)
    );
  }
  handleLiftClose() {
    const homeAssistant = this.agent.get(HomeAssistantEntityBehavior);
    homeAssistant.callAction(
      this.state.config.closeCoverLift(void 0, this.agent)
    );
  }
  handleGoToLiftPosition(targetPercent100ths) {
    const homeAssistant = this.agent.get(HomeAssistantEntityBehavior);
    const config6 = this.state.config;
    const currentPosition = config6.getCurrentLiftPosition(
      homeAssistant.entity.state,
      this.agent
    );
    const targetPosition = targetPercent100ths / 100;
    if (targetPosition === currentPosition) {
      return;
    }
    homeAssistant.callAction(
      config6.setLiftPosition(targetPosition, this.agent)
    );
  }
  handleTiltOpen() {
    const homeAssistant = this.agent.get(HomeAssistantEntityBehavior);
    homeAssistant.callAction(
      this.state.config.openCoverTilt(void 0, this.agent)
    );
  }
  handleTiltClose() {
    const homeAssistant = this.agent.get(HomeAssistantEntityBehavior);
    homeAssistant.callAction(
      this.state.config.closeCoverTilt(void 0, this.agent)
    );
  }
  handleGoToTiltPosition(targetPercent100ths) {
    const homeAssistant = this.agent.get(HomeAssistantEntityBehavior);
    const config6 = this.state.config;
    const currentPosition = config6.getCurrentTiltPosition(
      homeAssistant.entity.state,
      this.agent
    );
    const targetPosition = targetPercent100ths / 100;
    if (targetPosition === currentPosition) {
      return;
    }
    homeAssistant.callAction(
      config6.setTiltPosition(targetPosition, this.agent)
    );
  }
};
((WindowCoveringServerBase2) => {
  class State extends FeaturedBase3.State {
    config;
  }
  WindowCoveringServerBase2.State = State;
})(WindowCoveringServerBase || (WindowCoveringServerBase = {}));
function WindowCoveringServer(config6) {
  return WindowCoveringServerBase.set({ config: config6 });
}

// src/matter/endpoints/legacy/cover/behaviors/cover-window-covering-server.ts
var attributes2 = (entity) => entity.attributes;
var adjustPosition = (position, agent) => {
  const { featureFlags } = agent.env.get(BridgeDataProvider);
  if (position == null) {
    return null;
  }
  let percentValue = position;
  if (featureFlags?.coverDoNotInvertPercentage !== true) {
    percentValue = 100 - percentValue;
  }
  return percentValue;
};
var config2 = {
  getCurrentLiftPosition: (entity, agent) => {
    let position = attributes2(entity).current_position;
    if (position == null) {
      const coverState = entity.state;
      position = coverState === CoverDeviceState.closed ? 100 : coverState === CoverDeviceState.open ? 0 : void 0;
    }
    return position == null ? null : adjustPosition(position, agent);
  },
  getCurrentTiltPosition: (entity, agent) => {
    let position = attributes2(entity).current_tilt_position;
    if (position == null) {
      const coverState = entity.state;
      position = coverState === CoverDeviceState.closed ? 100 : coverState === CoverDeviceState.open ? 0 : void 0;
    }
    return position == null ? null : adjustPosition(position, agent);
  },
  getMovementStatus: (entity) => {
    const coverState = entity.state;
    return coverState === CoverDeviceState.opening ? WindowCovering2.MovementStatus.Opening : coverState === CoverDeviceState.closing ? WindowCovering2.MovementStatus.Closing : WindowCovering2.MovementStatus.Stopped;
  },
  stopCover: () => ({ action: "cover.stop_cover" }),
  openCoverLift: () => ({ action: "cover.open_cover" }),
  closeCoverLift: () => ({ action: "cover.close_cover" }),
  setLiftPosition: (position, agent) => ({
    action: "cover.set_cover_position",
    data: { position: adjustPosition(position, agent) }
  }),
  openCoverTilt: () => ({ action: "cover.open_cover_tilt" }),
  closeCoverTilt: () => ({ action: "cover.close_cover_tilt" }),
  setTiltPosition: (position, agent) => ({
    action: "cover.set_cover_tilt_position",
    data: { tilt_position: adjustPosition(position, agent) }
  })
};
var CoverWindowCoveringServer = WindowCoveringServer(config2);

// src/matter/endpoints/legacy/cover/index.ts
var CoverDeviceType = (supportedFeatures) => {
  const features = /* @__PURE__ */ new Set();
  if (testBit(supportedFeatures, CoverSupportedFeatures.support_open)) {
    features.add("Lift");
    features.add("PositionAwareLift");
    if (testBit(supportedFeatures, CoverSupportedFeatures.support_set_position)) {
      features.add("AbsolutePosition");
    }
  }
  if (testBit(supportedFeatures, CoverSupportedFeatures.support_open_tilt)) {
    features.add("Tilt");
    features.add("PositionAwareTilt");
    if (testBit(
      supportedFeatures,
      CoverSupportedFeatures.support_set_tilt_position
    )) {
      features.add("AbsolutePosition");
    }
  }
  return WindowCoveringDevice.with(
    BasicInformationServer,
    IdentifyServer,
    HomeAssistantEntityBehavior,
    CoverWindowCoveringServer.with(...features)
  );
};
function CoverDevice(homeAssistantEntity) {
  const attributes4 = homeAssistantEntity.entity.state.attributes;
  return CoverDeviceType(attributes4.supported_features ?? 0).set({
    homeAssistantEntity
  });
}

// src/matter/endpoints/legacy/fan/index.ts
import { FanDevice as Device } from "@matter/main/devices";

// src/matter/endpoints/legacy/fan/behaviors/fan-fan-control-server.ts
import { FanControl as FanControl4 } from "@matter/main/clusters";

// src/matter/behaviors/fan-control-server.ts
import { FanControlServer as Base10 } from "@matter/main/behaviors";
import { FanControl as FanControl3 } from "@matter/main/clusters";

// src/utils/converters/fan-mode.ts
import { FanControl } from "@matter/main/clusters";
var FanMode = class _FanMode {
  constructor(mode, sequence) {
    this.mode = mode;
    this.sequence = sequence;
  }
  static create(mode, sequence) {
    let currentMode;
    if (mode === FanControl.FanMode.On) {
      currentMode = FanControl.FanMode.High;
    } else if (mode === FanControl.FanMode.Smart) {
      currentMode = FanControl.FanMode.Auto;
    } else {
      currentMode = mode;
    }
    if (currentMode === FanControl.FanMode.Auto && !_autoSupported(sequence)) {
      currentMode = FanControl.FanMode.High;
    }
    return new _FanMode(currentMode, sequence);
  }
  static fromSpeedPercent(percentage, sequence) {
    if (percentage === 0) {
      return _FanMode.create(FanControl.FanMode.Off, sequence);
    }
    const fanModes = _fanModesForSequence(sequence);
    const modeIndex = Math.ceil(percentage / 100 * fanModes.length) - 1;
    const mode = fanModes[modeIndex];
    return _FanMode.create(mode, sequence);
  }
  speedPercent() {
    if (this.mode === FanControl.FanMode.Off) {
      return 0;
    }
    if (this.mode === FanControl.FanMode.Auto) {
      return 100;
    }
    const sequence = _fanModesForSequence(this.sequence);
    let index = sequence.indexOf(this.mode);
    if (index === -1) {
      index = 0;
    }
    const percent = (index + 1) / sequence.length;
    return percent * 100;
  }
  equals(other) {
    return this.mode === other.mode && this.sequence === other.sequence;
  }
};
function _fanModesForSequence(sequence) {
  switch (sequence) {
    case FanControl.FanModeSequence.OffLowMedHigh:
    case FanControl.FanModeSequence.OffLowMedHighAuto:
      return [
        FanControl.FanMode.Low,
        FanControl.FanMode.Medium,
        FanControl.FanMode.High
      ];
    case FanControl.FanModeSequence.OffLowHigh:
    case FanControl.FanModeSequence.OffLowHighAuto:
      return [FanControl.FanMode.Low, FanControl.FanMode.High];
    case FanControl.FanModeSequence.OffHigh:
    case FanControl.FanModeSequence.OffHighAuto:
      return [FanControl.FanMode.High];
  }
}
function _autoSupported(sequence) {
  switch (sequence) {
    case FanControl.FanModeSequence.OffLowMedHighAuto:
    case FanControl.FanModeSequence.OffLowHighAuto:
    case FanControl.FanModeSequence.OffHighAuto:
      return true;
    case FanControl.FanModeSequence.OffLowMedHigh:
    case FanControl.FanModeSequence.OffLowHigh:
    case FanControl.FanModeSequence.OffHigh:
      return false;
  }
}

// src/utils/converters/fan-speed.ts
import { FanControl as FanControl2 } from "@matter/main/clusters";
var FanSpeed = class _FanSpeed {
  constructor(currentSpeed, maxSpeed) {
    this.currentSpeed = currentSpeed;
    this.maxSpeed = maxSpeed;
  }
  step(request) {
    const direction = request.direction === FanControl2.StepDirection.Increase ? 1 : -1;
    let next = this.currentSpeed + direction;
    if (next === 0 && !request.lowestOff) {
      next += direction;
    }
    if (request.wrap) {
      if (next < 0) {
        next = this.maxSpeed;
      } else if (next > this.maxSpeed) {
        next = !request.lowestOff ? 1 : 0;
      }
    }
    if (next < 0 || next > this.maxSpeed) {
      next = this.currentSpeed;
    }
    return new _FanSpeed(next, this.maxSpeed);
  }
};

// src/matter/behaviors/fan-control-server.ts
var defaultStepSize = 10;
var FeaturedBase4 = Base10.with(
  "Step",
  "MultiSpeed",
  "AirflowDirection",
  "Auto"
);
var FanControlServerBase = class extends FeaturedBase4 {
  async initialize() {
    super.initialize();
    const homeAssistant = await this.agent.load(HomeAssistantEntityBehavior);
    this.update(homeAssistant.entity);
    this.reactTo(homeAssistant.onChange, this.update);
    this.reactTo(
      this.events.percentSetting$Changed,
      this.targetPercentSettingChanged
    );
    this.reactTo(this.events.fanMode$Changed, this.targetFanModeChanged);
    if (this.features.multiSpeed) {
      this.reactTo(
        this.events.speedSetting$Changed,
        this.targetSpeedSettingChanged
      );
    }
    if (this.features.airflowDirection) {
      this.reactTo(
        this.events.airflowDirection$Changed,
        this.targetAirflowDirectionChanged
      );
    }
  }
  update(entity) {
    const config6 = this.state.config;
    const percentage = config6.getPercentage(entity.state, this.agent) ?? 0;
    const speedMax = Math.round(
      100 / (config6.getStepSize(entity.state, this.agent) ?? defaultStepSize)
    );
    const speed = Math.ceil(speedMax * (percentage / 100));
    const fanModeSequence = this.getFanModeSequence();
    const fanMode = config6.isInAutoMode(entity.state, this.agent) ? FanMode.create(FanControl3.FanMode.Auto, fanModeSequence) : FanMode.fromSpeedPercent(percentage, fanModeSequence);
    applyPatchState(this.state, {
      percentSetting: percentage,
      percentCurrent: percentage,
      fanMode: fanMode.mode,
      fanModeSequence,
      ...this.features.multiSpeed ? {
        speedMax,
        speedSetting: speed,
        speedCurrent: speed
      } : {},
      ...this.features.airflowDirection ? {
        airflowDirection: config6.getAirflowDirection(
          entity.state,
          this.agent
        )
      } : {}
    });
  }
  step(request) {
    const fanSpeed = new FanSpeed(this.state.speedCurrent, this.state.speedMax);
    this.targetSpeedSettingChanged(fanSpeed.step(request).currentSpeed);
  }
  targetSpeedSettingChanged(speed, _oldValue, context) {
    if (transactionIsOffline(context)) {
      return;
    }
    if (speed == null) {
      return;
    }
    const percentSetting = Math.floor(speed / this.state.speedMax * 100);
    this.targetPercentSettingChanged(
      percentSetting,
      this.state.percentSetting,
      context
    );
  }
  targetFanModeChanged(fanMode, _oldValue, context) {
    if (transactionIsOffline(context)) {
      return;
    }
    const homeAssistant = this.agent.get(HomeAssistantEntityBehavior);
    if (!homeAssistant.isAvailable) {
      return;
    }
    const targetFanMode = FanMode.create(fanMode, this.state.fanModeSequence);
    const config6 = this.state.config;
    if (targetFanMode.mode === FanControl3.FanMode.Auto) {
      homeAssistant.callAction(config6.setAutoMode(void 0, this.agent));
    } else {
      const percentage = targetFanMode.speedPercent();
      this.targetPercentSettingChanged(
        percentage,
        this.state.percentSetting,
        context
      );
    }
  }
  targetPercentSettingChanged(percentage, _oldValue, context) {
    if (transactionIsOffline(context)) {
      return;
    }
    if (percentage == null) {
      return;
    }
    const homeAssistant = this.agent.get(HomeAssistantEntityBehavior);
    if (!homeAssistant.isAvailable) {
      return;
    }
    if (percentage === 0) {
      homeAssistant.callAction(this.state.config.turnOff(void 0, this.agent));
    } else {
      homeAssistant.callAction(
        this.state.config.turnOn(percentage, this.agent)
      );
    }
  }
  targetAirflowDirectionChanged(airflowDirection, _oldValue, context) {
    if (transactionIsOffline(context)) {
      return;
    }
    const homeAssistant = this.agent.get(HomeAssistantEntityBehavior);
    if (!homeAssistant.isAvailable) {
      return;
    }
    const config6 = this.state.config;
    homeAssistant.callAction(
      config6.setAirflowDirection(airflowDirection, this.agent)
    );
  }
  getFanModeSequence() {
    if (this.features.multiSpeed) {
      return this.features.auto ? FanControl3.FanModeSequence.OffLowMedHighAuto : FanControl3.FanModeSequence.OffLowMedHigh;
    }
    return this.features.auto ? FanControl3.FanModeSequence.OffHighAuto : FanControl3.FanModeSequence.OffHigh;
  }
};
((FanControlServerBase2) => {
  class State extends FeaturedBase4.State {
    config;
  }
  FanControlServerBase2.State = State;
})(FanControlServerBase || (FanControlServerBase = {}));
function FanControlServer(config6) {
  return FanControlServerBase.set({ config: config6 });
}

// src/matter/endpoints/legacy/fan/behaviors/fan-fan-control-server.ts
var attributes3 = (e) => e.attributes;
var fanControlConfig = {
  getPercentage: (state) => state.state === "off" ? 0 : attributes3(state).percentage,
  getStepSize: (state) => attributes3(state).percentage_step,
  getAirflowDirection: (state) => attributes3(state).current_direction === FanDeviceDirection.FORWARD ? FanControl4.AirflowDirection.Forward : attributes3(state).current_direction === FanDeviceDirection.REVERSE ? FanControl4.AirflowDirection.Reverse : FanControl4.AirflowDirection.Forward,
  isInAutoMode: (state) => attributes3(state).preset_mode === "Auto",
  turnOff: () => ({ action: "fan.turn_off" }),
  turnOn: (percentage) => ({ action: "fan.turn_on", data: { percentage } }),
  setAutoMode: () => ({ action: "fan.turn_on", data: { preset_mode: "Auto" } }),
  setAirflowDirection: (direction) => ({
    action: "fan.set_direction",
    data: {
      direction: direction === FanControl4.AirflowDirection.Forward ? FanDeviceDirection.FORWARD : FanDeviceDirection.REVERSE
    }
  })
};
var FanFanControlServer = FanControlServer(fanControlConfig);

// src/matter/endpoints/legacy/fan/behaviors/fan-on-off-server.ts
var FanOnOffServer = OnOffServer({
  turnOn: () => ({ action: "fan.turn_on" }),
  turnOff: () => ({ action: "fan.turn_off" })
}).with("Lighting");

// src/matter/endpoints/legacy/fan/index.ts
function FanDevice(homeAssistantEntity) {
  const attributes4 = homeAssistantEntity.entity.state.attributes;
  const supportedFeatures = attributes4.supported_features ?? 0;
  const features = /* @__PURE__ */ new Set();
  if (testBit(supportedFeatures, FanDeviceFeature.SET_SPEED)) {
    features.add("MultiSpeed");
  }
  if (testBit(supportedFeatures, FanDeviceFeature.SET_SPEED)) {
    features.add("Step");
  }
  if (testBit(supportedFeatures, FanDeviceFeature.PRESET_MODE)) {
    features.add("Auto");
  }
  if (testBit(supportedFeatures, FanDeviceFeature.DIRECTION)) {
    features.add("AirflowDirection");
  }
  const device = Device.with(
    IdentifyServer,
    BasicInformationServer,
    HomeAssistantEntityBehavior,
    FanOnOffServer,
    FanFanControlServer.with(...features)
  );
  return device.set({ homeAssistantEntity });
}

// src/matter/endpoints/legacy/humidifier/index.ts
import { OnOffPlugInUnitDevice as OnOffPlugInUnitDevice4 } from "@matter/main/devices";

// src/matter/behaviors/level-control-server.ts
import { LevelControlServer as Base11 } from "@matter/main/behaviors";
var FeaturedBase5 = Base11.with("OnOff", "Lighting");
var LevelControlServerBase = class extends FeaturedBase5 {
  async initialize() {
    await super.initialize();
    const homeAssistant = await this.agent.load(HomeAssistantEntityBehavior);
    this.update(homeAssistant.entity);
    this.reactTo(homeAssistant.onChange, this.update);
  }
  update({ state }) {
    const config6 = this.state.config;
    const minLevel = 1;
    const maxLevel = 254;
    const levelRange = maxLevel - minLevel;
    const currentLevelPercent = config6.getValuePercent(state, this.agent) ?? this.state.currentLevelPercent;
    let currentLevel = currentLevelPercent != null ? currentLevelPercent * levelRange + minLevel : null;
    if (currentLevel != null) {
      currentLevel = Math.min(Math.max(minLevel, currentLevel), maxLevel);
    }
    applyPatchState(this.state, {
      minLevel,
      maxLevel,
      currentLevel,
      currentLevelPercent,
      onLevel: currentLevel ?? this.state.onLevel
    });
  }
  moveToLevelLogic(level) {
    const homeAssistant = this.agent.get(HomeAssistantEntityBehavior);
    const config6 = this.state.config;
    const levelRange = this.maxLevel - this.minLevel;
    const levelPercent = (level - this.minLevel) / levelRange;
    const current = config6.getValuePercent(
      homeAssistant.entity.state,
      this.agent
    );
    if (levelPercent === current) {
      return;
    }
    homeAssistant.callAction(
      config6.moveToLevelPercent(levelPercent, this.agent)
    );
  }
};
((LevelControlServerBase2) => {
  class State extends FeaturedBase5.State {
    config;
    currentLevelPercent = null;
  }
  LevelControlServerBase2.State = State;
})(LevelControlServerBase || (LevelControlServerBase = {}));
function LevelControlServer(config6) {
  return LevelControlServerBase.set({
    options: { executeIfOff: true },
    config: config6
  });
}

// src/matter/endpoints/legacy/humidifier/behaviors/humidifier-level-control-server.ts
var config3 = {
  getValuePercent: (state) => {
    const { min_humidity, max_humidity, humidity } = state.attributes;
    if (humidity != null) {
      return (humidity - min_humidity) / (max_humidity - min_humidity);
    }
    return null;
  },
  moveToLevelPercent: (humidityPercent, agent) => {
    const { min_humidity, max_humidity } = agent.get(
      HomeAssistantEntityBehavior
    ).entity.state.attributes;
    const humidity = (max_humidity - min_humidity) * humidityPercent + min_humidity;
    return {
      action: "humidifier.set_humidity",
      data: { humidity }
    };
  }
};
var HumidifierLevelControlServer = LevelControlServer(config3).with("OnOff");

// src/matter/endpoints/legacy/humidifier/index.ts
var HumidifierEndpointType = OnOffPlugInUnitDevice4.with(
  BasicInformationServer,
  IdentifyServer,
  HomeAssistantEntityBehavior,
  OnOffServer().with(),
  HumidifierLevelControlServer
);
function HumidifierDevice(homeAssistantEntity) {
  return HumidifierEndpointType.set({ homeAssistantEntity });
}

// src/matter/endpoints/legacy/input-button/index.ts
import { OnOffPlugInUnitDevice as OnOffPlugInUnitDevice5 } from "@matter/main/devices";
var InputButtonOnOffServer = OnOffServer({
  isOn: () => false,
  turnOn: () => ({
    action: "input_button.press"
  }),
  turnOff: null
}).with("Lighting");
var InputButtonEndpointType = OnOffPlugInUnitDevice5.with(
  BasicInformationServer,
  IdentifyServer,
  HomeAssistantEntityBehavior,
  InputButtonOnOffServer
);
function InputButtonDevice(homeAssistantEntity) {
  return InputButtonEndpointType.set({ homeAssistantEntity });
}

// src/matter/endpoints/legacy/light/devices/color-temperature-light.ts
import { ColorTemperatureLightDevice as Device2 } from "@matter/main/devices";

// src/matter/endpoints/legacy/light/behaviors/light-color-control-server.ts
import { ColorControl as ColorControl2 } from "@matter/main/clusters";

// src/matter/behaviors/color-control-server.ts
import { ColorControlServer as Base12 } from "@matter/main/behaviors/color-control";
import { ColorControl } from "@matter/main/clusters";
var FeaturedBase6 = Base12.with("ColorTemperature", "HueSaturation");
var ColorControlServerBase = class extends FeaturedBase6 {
  async initialize() {
    super.initialize();
    const homeAssistant = await this.agent.load(HomeAssistantEntityBehavior);
    this.update(homeAssistant.entity);
    this.reactTo(homeAssistant.onChange, this.update);
  }
  update(entity) {
    const config6 = this.state.config;
    const currentKelvin = config6.getCurrentKelvin(entity.state, this.agent);
    let minKelvin = config6.getMinColorTempKelvin(entity.state, this.agent) ?? 1500;
    let maxKelvin = config6.getMaxColorTempKelvin(entity.state, this.agent) ?? 8e3;
    minKelvin = Math.min(
      minKelvin,
      maxKelvin,
      currentKelvin ?? Number.POSITIVE_INFINITY
    );
    maxKelvin = Math.max(
      minKelvin,
      maxKelvin,
      currentKelvin ?? Number.NEGATIVE_INFINITY
    );
    const color = config6.getColor(entity.state, this.agent);
    const [hue, saturation] = color ? ColorConverter.toMatterHS(color) : [0, 0];
    const minMireds = Math.floor(
      ColorConverter.temperatureKelvinToMireds(maxKelvin)
    );
    const maxMireds = Math.ceil(
      ColorConverter.temperatureKelvinToMireds(minKelvin)
    );
    const startUpMireds = ColorConverter.temperatureKelvinToMireds(
      currentKelvin ?? maxKelvin
    );
    let currentMireds;
    if (currentKelvin != null) {
      currentMireds = ColorConverter.temperatureKelvinToMireds(currentKelvin);
      currentMireds = Math.max(Math.min(currentMireds, maxMireds), minMireds);
    }
    applyPatchState(this.state, {
      colorMode: this.getColorModeFromFeatures(
        config6.getCurrentMode(entity.state, this.agent)
      ),
      ...this.features.hueSaturation ? {
        currentHue: hue,
        currentSaturation: saturation
      } : {},
      ...this.features.colorTemperature ? {
        coupleColorTempToLevelMinMireds: minMireds,
        colorTempPhysicalMinMireds: minMireds,
        colorTempPhysicalMaxMireds: maxMireds,
        startUpColorTemperatureMireds: startUpMireds,
        colorTemperatureMireds: currentMireds
      } : {}
    });
  }
  moveToColorTemperatureLogic(targetMireds) {
    const homeAssistant = this.agent.get(HomeAssistantEntityBehavior);
    const current = homeAssistant.entity.state;
    const currentKelvin = this.state.config.getCurrentKelvin(
      current,
      this.agent
    );
    const targetKelvin = ColorConverter.temperatureMiredsToKelvin(targetMireds);
    if (currentKelvin === targetKelvin) {
      return;
    }
    const action = this.state.config.setTemperature(targetKelvin, this.agent);
    homeAssistant.callAction(action);
  }
  moveToHueLogic(targetHue) {
    this.moveToHueAndSaturationLogic(targetHue, this.state.currentSaturation);
  }
  moveToSaturationLogic(targetSaturation) {
    this.moveToHueAndSaturationLogic(this.state.currentHue, targetSaturation);
  }
  moveToHueAndSaturationLogic(targetHue, targetSaturation) {
    const homeAssistant = this.agent.get(HomeAssistantEntityBehavior);
    const haColor = this.state.config.getColor(
      homeAssistant.entity.state,
      this.agent
    );
    const [currentHue, currentSaturation] = haColor ? ColorConverter.toMatterHS(haColor) : [];
    if (currentHue === targetHue && currentSaturation === targetSaturation) {
      return;
    }
    const color = ColorConverter.fromMatterHS(targetHue, targetSaturation);
    const action = this.state.config.setColor(color, this.agent);
    homeAssistant.callAction(action);
  }
  getColorModeFromFeatures(mode) {
    if (this.features.colorTemperature && this.features.hueSaturation) {
      return mode ?? ColorControl.ColorMode.CurrentHueAndCurrentSaturation;
    }
    if (this.features.colorTemperature) {
      return ColorControl.ColorMode.ColorTemperatureMireds;
    }
    if (this.features.hueSaturation) {
      return ColorControl.ColorMode.CurrentHueAndCurrentSaturation;
    }
    throw new Error(
      "ColorControlServer does not support either HueSaturation or ColorTemperature"
    );
  }
};
((ColorControlServerBase2) => {
  class State extends FeaturedBase6.State {
    config;
  }
  ColorControlServerBase2.State = State;
})(ColorControlServerBase || (ColorControlServerBase = {}));
function ColorControlServer(config6) {
  return ColorControlServerBase.set({
    options: { executeIfOff: true },
    config: config6
  });
}

// src/matter/endpoints/legacy/light/behaviors/light-color-control-server.ts
function getMatterColor(entity) {
  let color;
  if (entity.attributes.hs_color != null) {
    const [hue, saturation] = entity.attributes.hs_color;
    color = ColorConverter.fromHomeAssistantHS(hue, saturation);
  } else if (entity.attributes.rgbww_color != null) {
    const [r, g, b, cw, ww] = entity.attributes.rgbww_color;
    color = ColorConverter.fromRGBWW(r, g, b, cw, ww);
  } else if (entity.attributes.rgbw_color != null) {
    const [r, g, b, w] = entity.attributes.rgbw_color;
    color = ColorConverter.fromRGBW(r, g, b, w);
  } else if (entity.attributes.rgb_color != null) {
    const [r, g, b] = entity.attributes.rgb_color;
    color = ColorConverter.fromRGB(r, g, b);
  } else if (entity.attributes.xy_color != null) {
    const [x, y] = entity.attributes.xy_color;
    color = ColorConverter.fromXY(x, y);
  }
  return color;
}
var config4 = {
  getCurrentMode: (entity) => entity.attributes.color_mode === LightDeviceColorMode.COLOR_TEMP ? ColorControl2.ColorMode.ColorTemperatureMireds : ColorControl2.ColorMode.CurrentHueAndCurrentSaturation,
  getCurrentKelvin: (entity) => entity.attributes.color_temp_kelvin,
  getMinColorTempKelvin: (entity) => entity.attributes.min_color_temp_kelvin,
  getMaxColorTempKelvin: (entity) => entity.attributes.max_color_temp_kelvin,
  getColor: (entity) => getMatterColor(entity),
  setTemperature: (temperatureKelvin) => ({
    action: "light.turn_on",
    data: {
      color_temp_kelvin: temperatureKelvin
    }
  }),
  setColor: (color) => ({
    action: "light.turn_on",
    data: {
      hs_color: ColorConverter.toHomeAssistantHS(color)
    }
  })
};
var LightColorControlServer = ColorControlServer(config4);

// src/matter/endpoints/legacy/light/behaviors/light-level-control-server.ts
var config5 = {
  getValuePercent: (state) => {
    const brightness = state.attributes.brightness;
    if (brightness != null) {
      return brightness / 255;
    }
    return null;
  },
  moveToLevelPercent: (brightnessPercent) => ({
    action: "light.turn_on",
    data: {
      brightness: Math.round(brightnessPercent * 255)
    }
  })
};
var LightLevelControlServer = LevelControlServer(config5).with(
  "OnOff",
  "Lighting"
);

// src/matter/endpoints/legacy/light/behaviors/light-on-off-server.ts
var LightOnOffServer = OnOffServer({
  turnOn: () => ({
    action: "light.turn_on"
  }),
  turnOff: () => ({
    action: "light.turn_off"
  }),
  isOn: (e) => e.state === "on"
}).with("Lighting");

// src/matter/endpoints/legacy/light/devices/color-temperature-light.ts
var ColorTemperatureLightType = Device2.with(
  IdentifyServer,
  BasicInformationServer,
  HomeAssistantEntityBehavior,
  LightOnOffServer,
  LightLevelControlServer,
  LightColorControlServer.with("ColorTemperature")
);

// src/matter/endpoints/legacy/light/devices/dimmable-light.ts
import { DimmableLightDevice as Device3 } from "@matter/main/devices";
var DimmableLightType = Device3.with(
  IdentifyServer,
  BasicInformationServer,
  HomeAssistantEntityBehavior,
  LightOnOffServer,
  LightLevelControlServer
);

// src/matter/endpoints/legacy/light/devices/extended-color-light.ts
import { ExtendedColorLightDevice as Device4 } from "@matter/main/devices";
var ExtendedColorLightType = (supportsTemperature) => {
  const features = /* @__PURE__ */ new Set([
    "HueSaturation"
  ]);
  if (supportsTemperature) {
    features.add("ColorTemperature");
  }
  return Device4.with(
    IdentifyServer,
    BasicInformationServer,
    HomeAssistantEntityBehavior,
    LightOnOffServer,
    LightLevelControlServer,
    LightColorControlServer.with(...features)
  );
};

// src/matter/endpoints/legacy/light/devices/on-off-light-device.ts
import { OnOffLightDevice as Device5 } from "@matter/main/devices";
var OnOffLightType = Device5.with(
  IdentifyServer,
  BasicInformationServer,
  HomeAssistantEntityBehavior,
  LightOnOffServer
);

// src/matter/endpoints/legacy/light/index.ts
var brightnessModes = Object.values(
  LightDeviceColorMode
).filter((mode) => mode !== LightDeviceColorMode.UNKNOWN).filter((mode) => mode !== LightDeviceColorMode.ONOFF);
var colorModes = [
  LightDeviceColorMode.HS,
  LightDeviceColorMode.RGB,
  LightDeviceColorMode.XY,
  LightDeviceColorMode.RGBW,
  LightDeviceColorMode.RGBWW
];
function LightDevice(homeAssistantEntity) {
  const attributes4 = homeAssistantEntity.entity.state.attributes;
  const supportedColorModes = attributes4.supported_color_modes ?? [];
  const supportsBrightness = supportedColorModes.some(
    (mode) => brightnessModes.includes(mode)
  );
  const supportsColorControl = !!attributes4.hs_color || supportedColorModes.some((mode) => colorModes.includes(mode));
  const supportsColorTemperature = supportedColorModes.includes(
    LightDeviceColorMode.COLOR_TEMP
  );
  const deviceType = supportsColorControl ? ExtendedColorLightType(supportsColorTemperature) : supportsColorTemperature ? ColorTemperatureLightType : supportsBrightness ? DimmableLightType : OnOffLightType;
  return deviceType.set({ homeAssistantEntity });
}

// src/matter/endpoints/legacy/lock/index.ts
import { DoorLock as DoorLock2 } from "@matter/main/clusters";
import { DoorLockDevice } from "@matter/main/devices";

// src/matter/behaviors/lock-server.ts
import { DoorLockServer as Base13 } from "@matter/main/behaviors";
import { DoorLock } from "@matter/main/clusters";
var LockServerBase = class extends Base13 {
  async initialize() {
    await super.initialize();
    const homeAssistant = await this.agent.load(HomeAssistantEntityBehavior);
    this.update(homeAssistant.entity);
    this.reactTo(homeAssistant.onChange, this.update);
  }
  update(entity) {
    applyPatchState(this.state, {
      lockState: this.state.config.getLockState(entity.state, this.agent),
      lockType: DoorLock.LockType.DeadBolt,
      operatingMode: DoorLock.OperatingMode.Normal,
      actuatorEnabled: true,
      supportedOperatingModes: {
        noRemoteLockUnlock: false,
        normal: true,
        passage: false,
        privacy: false,
        vacation: false
      }
    });
  }
  lockDoor() {
    const homeAssistant = this.agent.get(HomeAssistantEntityBehavior);
    homeAssistant.callAction(this.state.config.lock(void 0, this.agent));
  }
  unlockDoor() {
    const homeAssistant = this.agent.get(HomeAssistantEntityBehavior);
    homeAssistant.callAction(this.state.config.unlock(void 0, this.agent));
  }
};
((LockServerBase2) => {
  class State extends Base13.State {
    config;
  }
  LockServerBase2.State = State;
})(LockServerBase || (LockServerBase = {}));
function LockServer(config6) {
  return LockServerBase.set({ config: config6 });
}

// src/matter/endpoints/legacy/lock/index.ts
var mapHAState = {
  locked: DoorLock2.LockState.Locked,
  locking: DoorLock2.LockState.Locked,
  unlocked: DoorLock2.LockState.Unlocked,
  unlocking: DoorLock2.LockState.Unlocked
};
var lockServerConfig = {
  getLockState: (entity) => mapHAState[entity.state] ?? DoorLock2.LockState.NotFullyLocked,
  lock: () => ({ action: "lock.lock" }),
  unlock: () => ({ action: "lock.unlock" })
};
var LockDeviceType = DoorLockDevice.with(
  BasicInformationServer,
  IdentifyServer,
  HomeAssistantEntityBehavior,
  LockServer(lockServerConfig)
);
function LockDevice(homeAssistantEntity) {
  return LockDeviceType.set({ homeAssistantEntity });
}

// src/matter/endpoints/legacy/media-player/index.ts
import { SpeakerDevice } from "@matter/main/devices";

// src/matter/endpoints/legacy/media-player/behaviors/media-player-level-control-server.ts
var MediaPlayerLevelControlServer = LevelControlServer({
  getValuePercent: (state) => {
    const attributes4 = state.attributes;
    if (attributes4.volume_level != null) {
      return attributes4.volume_level;
    }
    return 0;
  },
  moveToLevelPercent: (value) => ({
    action: "media_player.volume_set",
    data: { volume_level: value }
  })
});

// src/matter/behaviors/media-input-server.ts
import { MediaInputServer as Base14 } from "@matter/main/behaviors";
import { MediaInput } from "@matter/main/clusters";
var MediaInputServerBase = class extends Base14 {
  async initialize() {
    super.initialize();
    const homeAssistant = await this.agent.load(HomeAssistantEntityBehavior);
    this.update(homeAssistant.entity);
    this.reactTo(homeAssistant.onChange, this.update);
  }
  update(entity) {
    const config6 = this.state.config;
    let source_idx = 0;
    const sourceList = config6.getSourceList(entity.state, this.agent)?.sort();
    const inputList = sourceList?.map((source) => ({
      index: source_idx++,
      inputType: MediaInput.InputType.Other,
      name: source,
      description: source
    }));
    const currentSource = config6.getCurrentSource(entity.state, this.agent);
    let currentInput = sourceList?.indexOf(currentSource ?? "");
    if (currentInput === -1 || currentInput == null) {
      currentInput = 0;
    }
    applyPatchState(this.state, {
      inputList,
      currentInput
    });
  }
  selectInput(request) {
    const homeAssistant = this.agent.get(HomeAssistantEntityBehavior);
    const target = this.state.inputList[request.index];
    homeAssistant.callAction(
      this.state.config.selectSource(target.name, this.agent)
    );
  }
  showInputStatus() {
  }
  hideInputStatus() {
  }
};
((MediaInputServerBase2) => {
  class State extends Base14.State {
    config;
  }
  MediaInputServerBase2.State = State;
})(MediaInputServerBase || (MediaInputServerBase = {}));
function MediaInputServer(config6) {
  return MediaInputServerBase.set({ config: config6 });
}

// src/matter/endpoints/legacy/media-player/behaviors/media-player-media-input-server.ts
var MediaPlayerMediaInputServer = MediaInputServer({
  getCurrentSource: (entity) => entity.attributes.source,
  getSourceList: (entity) => entity.attributes.source_list,
  selectSource: (source) => ({
    action: "media_player.select_source",
    data: { source }
  })
});

// src/matter/endpoints/legacy/media-player/behaviors/media-player-on-off-server.ts
var MediaPlayerOnOffServer = OnOffServer({
  isOn: (state) => {
    return !state.attributes.is_volume_muted;
  },
  turnOn: () => ({
    action: "media_player.volume_mute",
    data: { is_volume_muted: false }
  }),
  turnOff: () => ({
    action: "media_player.volume_mute",
    data: { is_volume_muted: true }
  })
}).with();

// src/matter/endpoints/legacy/media-player/index.ts
var SpeakerEndpointType = SpeakerDevice.with(
  BasicInformationServer,
  IdentifyServer,
  HomeAssistantEntityBehavior
);
function MediaPlayerDevice(homeAssistantEntity) {
  const attributes4 = homeAssistantEntity.entity.state.attributes;
  const supportedFeatures = attributes4.supported_features ?? 0;
  let device = SpeakerEndpointType;
  const supportsMute = testBit(
    supportedFeatures,
    MediaPlayerDeviceFeature.VOLUME_MUTE
  );
  const supportsVolume = testBit(
    supportedFeatures,
    MediaPlayerDeviceFeature.VOLUME_SET
  );
  if (supportsMute) {
    device = device.with(MediaPlayerOnOffServer);
  }
  if (supportsVolume) {
    const volumeFeatures = [];
    if (supportsMute) {
      volumeFeatures.push("OnOff");
    }
    device = device.with(MediaPlayerLevelControlServer.with(...volumeFeatures));
  }
  if (testBit(supportedFeatures, MediaPlayerDeviceFeature.SELECT_SOURCE)) {
    device = device.with(MediaPlayerMediaInputServer);
  }
  return device.set({ homeAssistantEntity });
}

// src/matter/endpoints/legacy/scene/index.ts
import { OnOffPlugInUnitDevice as OnOffPlugInUnitDevice6 } from "@matter/main/devices";
var SceneOnOffServer = OnOffServer({
  isOn: () => false,
  turnOn: () => ({
    action: "scene.turn_on"
  }),
  turnOff: null
}).with("Lighting");
var SceneDeviceType = OnOffPlugInUnitDevice6.with(
  BasicInformationServer,
  IdentifyServer,
  HomeAssistantEntityBehavior,
  SceneOnOffServer
);
function SceneDevice(homeAssistantEntity) {
  return SceneDeviceType.set({ homeAssistantEntity });
}

// src/matter/endpoints/legacy/script/index.ts
import { OnOffPlugInUnitDevice as OnOffPlugInUnitDevice7 } from "@matter/main/devices";
var ScriptOnOffServer = OnOffServer({
  turnOn: () => ({
    action: "script.turn_on"
  }),
  turnOff: () => ({
    action: "script.turn_off"
  })
}).with("Lighting");
var ScriptDeviceType = OnOffPlugInUnitDevice7.with(
  BasicInformationServer,
  IdentifyServer,
  HomeAssistantEntityBehavior,
  ScriptOnOffServer
);
function ScriptDevice(homeAssistantEntity) {
  return ScriptDeviceType.set({ homeAssistantEntity });
}

// src/matter/endpoints/legacy/sensor/devices/humidity-sensor.ts
import { HumiditySensorDevice } from "@matter/main/devices";
var humiditySensorConfig = {
  getValue({ state }) {
    if (state == null || Number.isNaN(+state)) {
      return null;
    }
    return +state;
  }
};
var HumiditySensorType = HumiditySensorDevice.with(
  BasicInformationServer,
  IdentifyServer,
  HomeAssistantEntityBehavior,
  HumidityMeasurementServer(humiditySensorConfig)
);

// src/matter/endpoints/legacy/sensor/devices/illuminance-sensor.ts
import { LightSensorDevice } from "@matter/main/devices";

// src/matter/behaviors/illuminance-measurement-server.ts
import { IlluminanceMeasurementServer as Base15 } from "@matter/main/behaviors";
var IlluminanceMeasurementServerBase = class extends Base15 {
  async initialize() {
    super.initialize();
    const homeAssistant = await this.agent.load(HomeAssistantEntityBehavior);
    this.update(homeAssistant.entity);
    this.reactTo(homeAssistant.onChange, this.update);
  }
  update(entity) {
    const illuminance = this.getIlluminance(this.state.config, entity.state);
    applyPatchState(this.state, { measuredValue: illuminance });
  }
  getIlluminance(config6, entity) {
    const illuminance = config6.getValue(entity, this.agent);
    if (illuminance == null) {
      return null;
    }
    if (illuminance < 1) {
      return 0;
    }
    const measuredValue = Math.round(1e4 * Math.log10(illuminance) + 1);
    return Math.min(65534, Math.max(1, measuredValue));
  }
};
((IlluminanceMeasurementServerBase2) => {
  class State extends Base15.State {
    config;
  }
  IlluminanceMeasurementServerBase2.State = State;
})(IlluminanceMeasurementServerBase || (IlluminanceMeasurementServerBase = {}));
function IlluminanceMeasurementServer(config6) {
  return IlluminanceMeasurementServerBase.set({ config: config6 });
}

// src/matter/endpoints/legacy/sensor/devices/illuminance-sensor.ts
var illuminanceSensorConfig = {
  getValue({ state }) {
    if (state == null || Number.isNaN(+state)) {
      return null;
    }
    return +state;
  }
};
var IlluminanceSensorType = LightSensorDevice.with(
  BasicInformationServer,
  IdentifyServer,
  HomeAssistantEntityBehavior,
  IlluminanceMeasurementServer(illuminanceSensorConfig)
);

// src/matter/endpoints/legacy/sensor/devices/temperature-sensor.ts
import { TemperatureSensorDevice } from "@matter/main/devices";

// src/matter/behaviors/temperature-measurement-server.ts
import { TemperatureMeasurementServer as Base16 } from "@matter/main/behaviors";
var TemperatureMeasurementServerBase = class extends Base16 {
  async initialize() {
    await super.initialize();
    const homeAssistant = await this.agent.load(HomeAssistantEntityBehavior);
    this.update(homeAssistant.entity);
    this.reactTo(homeAssistant.onChange, this.update);
  }
  update(entity) {
    applyPatchState(this.state, {
      measuredValue: this.getTemperature(entity.state) ?? null
    });
  }
  getTemperature(entity) {
    const value = this.state.config.getValue(entity, this.agent);
    if (!value) {
      return void 0;
    }
    return value.celsius(true);
  }
};
((TemperatureMeasurementServerBase2) => {
  class State extends Base16.State {
    config;
  }
  TemperatureMeasurementServerBase2.State = State;
})(TemperatureMeasurementServerBase || (TemperatureMeasurementServerBase = {}));
function TemperatureMeasurementServer(config6) {
  return TemperatureMeasurementServerBase.set({ config: config6 });
}

// src/matter/endpoints/legacy/sensor/devices/temperature-sensor.ts
var temperatureSensorConfig = {
  getValue(entity, agent) {
    const fallbackUnit = agent.env.get(HomeAssistantConfig).unitSystem.temperature;
    const state = entity.state;
    const attributes4 = entity.attributes;
    const temperature = state == null || Number.isNaN(+state) ? null : +state;
    if (temperature == null) {
      return void 0;
    }
    return Temperature.withUnit(
      temperature,
      attributes4.unit_of_measurement ?? fallbackUnit
    );
  }
};
var TemperatureSensorType = TemperatureSensorDevice.with(
  BasicInformationServer,
  IdentifyServer,
  HomeAssistantEntityBehavior,
  TemperatureMeasurementServer(temperatureSensorConfig)
);

// src/matter/endpoints/legacy/sensor/index.ts
function SensorDevice(homeAssistantEntity) {
  const attributes4 = homeAssistantEntity.entity.state.attributes;
  const deviceClass = attributes4.device_class;
  if (deviceClass === SensorDeviceClass.temperature) {
    return TemperatureSensorType.set({ homeAssistantEntity });
  }
  if (deviceClass === SensorDeviceClass.humidity) {
    return HumiditySensorType.set({ homeAssistantEntity });
  }
  if (deviceClass === SensorDeviceClass.illuminance) {
    return IlluminanceSensorType.set({ homeAssistantEntity });
  }
  return void 0;
}

// src/matter/endpoints/legacy/switch/index.ts
import { OnOffPlugInUnitDevice as OnOffPlugInUnitDevice8 } from "@matter/main/devices";
var SwitchOnOffServer = OnOffServer().with("Lighting");
var SwitchEndpointType = OnOffPlugInUnitDevice8.with(
  BasicInformationServer,
  IdentifyServer,
  HomeAssistantEntityBehavior,
  SwitchOnOffServer
);
function SwitchDevice(homeAssistantEntity) {
  return SwitchEndpointType.set({ homeAssistantEntity });
}

// src/matter/endpoints/legacy/vacuum/index.ts
import { RoboticVacuumCleanerDevice } from "@matter/main/devices";

// src/matter/endpoints/legacy/vacuum/behaviors/vacuum-identify-server.ts
var VacuumIdentifyServer = class extends IdentifyServer {
  identify(request) {
    const result = super.identify(request);
    if (request.identifyTime > 0) {
      this.playLocateSound("identify");
    }
    return result;
  }
  triggerEffect(request) {
    const result = super.triggerEffect(request);
    this.playLocateSound("triggerEffect");
    return result;
  }
  playLocateSound(source) {
    const entity = this.agent.get(HomeAssistantEntityBehavior);
    const attributes4 = entity.entity.state.attributes;
    const supportedFeatures = attributes4.supported_features ?? 0;
    if (!testBit(supportedFeatures, VacuumDeviceFeature.LOCATE)) {
      console.debug(
        `VacuumIdentifyServer skipped vacuum.locate (${source}: LOCATE unsupported)`
      );
      return;
    }
    console.debug(`VacuumIdentifyServer calling vacuum.locate (${source})`);
    entity.callAction({ action: "vacuum.locate" });
  }
};

// src/matter/endpoints/legacy/vacuum/behaviors/vacuum-rvc-clean-mode-server.ts
import { RvcCleanMode } from "@matter/main/clusters";

// src/matter/behaviors/rvc-clean-mode-server.ts
import { RvcCleanModeServer as Base17 } from "@matter/main/behaviors";
import { ModeBase } from "@matter/main/clusters/mode-base";
var RvcCleanModeServerBase = class extends Base17 {
  async initialize() {
    const homeAssistant = await this.agent.load(HomeAssistantEntityBehavior);
    this.update(homeAssistant.entity);
    this.reactTo(homeAssistant.onChange, this.update);
    await super.initialize();
  }
  update(entity) {
    const supportedModes = this.state.config.getSupportedModes(
      entity.state,
      this.agent
    );
    const resolvedCurrentMode = this.state.config.getCurrentMode(
      entity.state,
      this.agent
    );
    applyPatchState(this.state, {
      currentMode: resolvedCurrentMode ?? this.state.currentMode ?? supportedModes[0]?.mode ?? 0,
      supportedModes
    });
  }
  changeToMode(request) {
    const isSupportedMode = this.state.supportedModes.some(
      ({ mode }) => mode === request.newMode
    );
    if (!isSupportedMode) {
      return {
        status: ModeBase.ModeChangeStatus.UnsupportedMode,
        statusText: "Unsupported clean mode"
      };
    }
    if (request.newMode === this.state.currentMode) {
      return {
        status: ModeBase.ModeChangeStatus.Success,
        statusText: "Clean mode already active"
      };
    }
    const action = this.state.config.changeToMode(request.newMode, this.agent);
    if (action == null) {
      return {
        status: ModeBase.ModeChangeStatus.GenericFailure,
        statusText: "No Home Assistant clean-mode action available"
      };
    }
    this.state.currentMode = request.newMode;
    this.agent.get(HomeAssistantEntityBehavior).callAction(action);
    return {
      status: ModeBase.ModeChangeStatus.Success,
      statusText: "Successfully switched clean mode"
    };
  }
};
((RvcCleanModeServerBase2) => {
  class State extends Base17.State {
    config;
  }
  RvcCleanModeServerBase2.State = State;
})(RvcCleanModeServerBase || (RvcCleanModeServerBase = {}));
function RvcCleanModeServer(config6) {
  return RvcCleanModeServerBase.set({ config: config6 });
}

// src/matter/endpoints/legacy/vacuum/clean-mode-data.ts
var VACUUM_MODE_KEYWORDS = [
  "vacuum",
  "aspir",
  "suction",
  "sweep",
  "barrer",
  "barre"
];
var MOP_MODE_KEYWORDS = [
  "mop",
  "mopa",
  "fregar",
  "frieg",
  "trapear",
  "trapea"
];
var SEQUENTIAL_KEYWORDS = [
  "then",
  "after",
  "despues",
  "despues_de",
  "despu\xE9s",
  "despu\xE9s_de",
  "seguido",
  "seguida",
  "and_then",
  "vacuum_then_mop",
  "mop_after_vacuum"
];
var CLEAN_MODE_ENTITY_HINTS = [
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
  "aspir"
];
var CURRENT_MODE_ATTRIBUTE_KEYS = [
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
  "work_mode"
];
var MODE_OPTIONS_ATTRIBUTE_KEYS = [
  "cleaning_mode_list",
  "clean_mode_list",
  "mop_mode_list",
  "vacuum_mode_list",
  "mode_list",
  "available_cleaning_modes",
  "available_clean_modes",
  "available_mop_modes",
  "available_vacuum_modes",
  "options"
];
function resolveVacuumCleanModeData(entity, companionEntities = []) {
  const attributes4 = asRecord2(entity.state.attributes);
  const overrideCandidate = resolveManualOverrideCandidate(attributes4);
  const primaryCandidate = resolvePrimaryAttributeCandidate(attributes4);
  const companionCandidates = companionEntities.map((companion) => resolveCompanionCandidate(companion)).filter((candidate) => candidate != null);
  const candidates = [
    ...overrideCandidate != null ? [overrideCandidate] : [],
    ...primaryCandidate != null ? [primaryCandidate] : [],
    ...companionCandidates
  ];
  if (candidates.length === 0) {
    return void 0;
  }
  const currentModeFromPrimary = resolveCurrentModeFromAttributes(attributes4);
  const [bestCandidate] = [...candidates].sort((left, right) => {
    return right.score - left.score;
  });
  return {
    entityId: bestCandidate.entityId,
    supportedModes: bestCandidate.supportedModes,
    currentMode: bestCandidate.currentMode ?? currentModeFromPrimary
  };
}
function resolveManualOverrideCandidate(attributes4) {
  const entityId = toStringValue2(attributes4.matter_clean_mode_entity);
  if (entityId == null) {
    return void 0;
  }
  const supportedModes = buildSupportedModesFromOptionStrings([
    toStringValue2(attributes4.matter_clean_mode_vacuum_and_mop_option),
    toStringValue2(attributes4.matter_clean_mode_vacuum_option),
    toStringValue2(attributes4.matter_clean_mode_mop_option)
  ]);
  if (supportedModes.length < 2) {
    return void 0;
  }
  return {
    entityId,
    supportedModes,
    currentMode: resolveCurrentModeFromAttributes(attributes4),
    score: 1e3
  };
}
function resolvePrimaryAttributeCandidate(attributes4) {
  const supportedModes = buildSupportedModesFromOptionStrings(
    MODE_OPTIONS_ATTRIBUTE_KEYS.flatMap((key) => toStringArray(attributes4[key]))
  );
  if (supportedModes.length < 2) {
    return void 0;
  }
  return {
    supportedModes,
    currentMode: resolveCurrentModeFromAttributes(attributes4),
    score: supportedModes.length * 100
  };
}
function resolveCompanionCandidate(companion) {
  const supportedModes = buildSupportedModesFromOptionStrings(companion.options);
  if (supportedModes.length < 2) {
    return void 0;
  }
  const normalizedEntityId = normalizeText(companion.entityId) ?? "";
  const normalizedFriendlyName = normalizeText(companion.friendlyName) ?? "";
  const hintScore = CLEAN_MODE_ENTITY_HINTS.reduce((score, hint) => {
    return score + (normalizedEntityId.includes(hint) ? 15 : 0) + (normalizedFriendlyName.includes(hint) ? 15 : 0);
  }, 0);
  return {
    entityId: companion.entityId,
    supportedModes,
    currentMode: resolveCurrentModeFromValue(companion.state, supportedModes),
    score: 250 + supportedModes.length * 100 + hintScore
  };
}
function resolveCurrentModeFromAttributes(attributes4) {
  for (const key of CURRENT_MODE_ATTRIBUTE_KEYS) {
    const currentMode = resolveCurrentModeFromValue(attributes4[key]);
    if (currentMode != null) {
      return currentMode;
    }
  }
  return void 0;
}
function resolveCurrentModeFromValue(value, supportedModes) {
  const classification = classifyCleanModeValue(value);
  if (classification == null) {
    return void 0;
  }
  if (supportedModes == null || supportedModes.some((mode) => mode.matterMode === classification.matterMode)) {
    return classification.matterMode;
  }
  return void 0;
}
function buildSupportedModesFromOptionStrings(values4) {
  const options = toStringArray(values4);
  const supportedModes = [];
  const seenModes = /* @__PURE__ */ new Set();
  for (const option of options) {
    const classification = classifyCleanModeValue(option);
    if (classification == null || seenModes.has(classification.matterMode)) {
      continue;
    }
    supportedModes.push({
      matterMode: classification.matterMode,
      label: option,
      option,
      sequential: classification.sequential
    });
    seenModes.add(classification.matterMode);
  }
  return supportedModes;
}
function classifyCleanModeValue(value) {
  const normalized = normalizeText(value);
  if (normalized == null) {
    return void 0;
  }
  const hasVacuum = containsAnyKeyword(normalized, VACUUM_MODE_KEYWORDS);
  const hasMop = containsAnyKeyword(normalized, MOP_MODE_KEYWORDS);
  if (hasVacuum && hasMop) {
    return {
      matterMode: 0 /* VacuumAndMop */,
      sequential: containsAnyKeyword(normalized, SEQUENTIAL_KEYWORDS)
    };
  }
  if (hasVacuum) {
    return {
      matterMode: 1 /* Vacuum */,
      sequential: false
    };
  }
  if (hasMop) {
    return {
      matterMode: 2 /* Mop */,
      sequential: false
    };
  }
  return void 0;
}
function containsAnyKeyword(value, keywords) {
  return keywords.some((keyword) => value.includes(keyword));
}
function toStringArray(value) {
  if (Array.isArray(value)) {
    return value.flatMap((item) => toStringArray(item));
  }
  if (typeof value === "string") {
    return value.length > 0 ? [value] : [];
  }
  return [];
}
function toStringValue2(value) {
  return typeof value === "string" && value.length > 0 ? value : void 0;
}
function asRecord2(value) {
  if (value == null || typeof value !== "object") {
    return {};
  }
  return value;
}
function normalizeText(value) {
  if (typeof value !== "string") {
    return void 0;
  }
  const normalized = value.normalize("NFD").replace(new RegExp("\\p{Diacritic}+", "gu"), "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
  return normalized.length > 0 ? normalized : void 0;
}

// src/matter/endpoints/legacy/vacuum/clean-mode-controls.ts
var OFF_KEYWORDS = [
  "off",
  "apagad",
  "desactiv",
  "disabled",
  "none",
  "ninguna",
  "ninguno",
  "sin_fregado",
  "sin_mopa"
];
var FAN_CONTROL_KEYWORDS = [
  "fan",
  "ventil",
  "suction",
  "succion",
  "aspir",
  "aspiration",
  "potencia",
  "power",
  "suction_level",
  "nivel_de_succion"
];
var MOP_KEYWORDS = ["mop", "mopa", "freg"];
var INTENSITY_KEYWORDS = [
  "intensity",
  "intensidad",
  "water",
  "agua",
  "flow",
  "caudal"
];
var MODE_KEYWORDS = ["mode", "modo"];
var FAN_VACUUM_PREFERENCES = [
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
  "max"
];
var FAN_COMBINED_PREFERENCES = [
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
  "max"
];
var MOP_INTENSITY_PREFERENCES = [
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
  "bajo"
];
var MOP_MODE_PREFERENCES = [
  "standard",
  "estandar",
  "normal",
  "default",
  "balanced",
  "equilibrado",
  "medium",
  "medio",
  "deep",
  "profundo"
];
function resolveVacuumCurrentModeFromControls(attributes4, companionEntities) {
  const controls = resolveVacuumCleanModeControls(attributes4, companionEntities);
  const fanEnabled = resolveEnabledState(controls.fan?.current);
  const mopEnabled = resolveEnabledState(controls.mopIntensity?.current);
  if (fanEnabled == null || mopEnabled == null) {
    return void 0;
  }
  if (fanEnabled && mopEnabled) {
    return 0 /* VacuumAndMop */;
  }
  if (fanEnabled) {
    return 1 /* Vacuum */;
  }
  if (mopEnabled) {
    return 2 /* Mop */;
  }
  return void 0;
}
function buildVacuumCleanModeControlActions(vacuumEntityId, attributes4, companionEntities, newMode) {
  const controls = resolveVacuumCleanModeControls(attributes4, companionEntities);
  const actions = [];
  switch (newMode) {
    case 2 /* Mop */: {
      appendAction(
        actions,
        createFanSpeedAction(
          vacuumEntityId,
          controls.fan,
          selectOffOption(controls.fan?.options)
        )
      );
      appendAction(
        actions,
        createSelectAction(
          controls.mopIntensity?.entityId,
          selectPreferredOption(
            controls.mopIntensity?.options,
            void 0,
            MOP_INTENSITY_PREFERENCES
          )
        )
      );
      appendAction(
        actions,
        createSelectAction(
          controls.mopMode?.entityId,
          selectPreferredOption(
            controls.mopMode?.options,
            void 0,
            MOP_MODE_PREFERENCES
          )
        )
      );
      break;
    }
    case 1 /* Vacuum */: {
      appendAction(
        actions,
        createSelectAction(
          controls.mopIntensity?.entityId,
          selectOffOption(controls.mopIntensity?.options)
        )
      );
      appendAction(
        actions,
        createFanSpeedAction(
          vacuumEntityId,
          controls.fan,
          selectPreferredOption(
            controls.fan?.options,
            controls.fan?.current,
            FAN_VACUUM_PREFERENCES
          )
        )
      );
      break;
    }
    case 0 /* VacuumAndMop */:
    default: {
      appendAction(
        actions,
        createFanSpeedAction(
          vacuumEntityId,
          controls.fan,
          selectPreferredOption(
            controls.fan?.options,
            void 0,
            FAN_COMBINED_PREFERENCES
          )
        )
      );
      appendAction(
        actions,
        createSelectAction(
          controls.mopMode?.entityId,
          selectPreferredOption(
            controls.mopMode?.options,
            void 0,
            MOP_MODE_PREFERENCES
          )
        )
      );
      appendAction(
        actions,
        createSelectAction(
          controls.mopIntensity?.entityId,
          selectPreferredOption(
            controls.mopIntensity?.options,
            void 0,
            MOP_INTENSITY_PREFERENCES
          )
        )
      );
      break;
    }
  }
  if (actions.length === 0) {
    return void 0;
  }
  return dedupeActions(actions);
}
function resolveVacuumCleanModeControls(attributes4, companionEntities) {
  return {
    fan: resolveBestFanControl(companionEntities) ?? resolvePrimaryFanControl(attributes4),
    mopIntensity: resolveBestSelectControl(
      companionEntities,
      scoreMopIntensityControl
    ),
    mopMode: resolveBestSelectControl(companionEntities, scoreMopModeControl)
  };
}
function resolveBestFanControl(companionEntities) {
  const control = resolveBestSelectControl(companionEntities, scoreFanControl);
  if (control == null) {
    return void 0;
  }
  return {
    kind: "select",
    entityId: control.entityId,
    current: control.current,
    options: control.options
  };
}
function resolvePrimaryFanControl(attributes4) {
  const options = toStringArray2(attributes4.fan_speed_list);
  if (options.length < 2) {
    return void 0;
  }
  return {
    kind: "vacuum",
    entityId: "vacuum",
    current: toStringValue3(attributes4.fan_speed),
    options
  };
}
function resolveBestSelectControl(companionEntities, scorer) {
  let bestScore = 0;
  let bestCompanion;
  for (const companion of companionEntities) {
    const score = scorer(companion);
    if (score <= bestScore) {
      continue;
    }
    bestScore = score;
    bestCompanion = {
      entityId: companion.entityId,
      current: companion.state,
      options: toStringArray2(companion.options)
    };
  }
  return bestCompanion;
}
function scoreFanControl(companion) {
  const options = toStringArray2(companion.options);
  if (options.length < 2) {
    return 0;
  }
  const haystack = `${normalizeText2(companion.entityId) ?? ""}_${normalizeText2(companion.friendlyName) ?? ""}`;
  const score = countKeywordHits(haystack, FAN_CONTROL_KEYWORDS) * 25 + (selectOffOption(options) != null ? 20 : 0) + (selectPreferredOption(options, void 0, FAN_VACUUM_PREFERENCES) != null ? 20 : 0);
  return score >= 45 ? score : 0;
}
function scoreMopIntensityControl(companion) {
  const options = toStringArray2(companion.options);
  if (options.length < 2) {
    return 0;
  }
  const haystack = `${normalizeText2(companion.entityId) ?? ""}_${normalizeText2(companion.friendlyName) ?? ""}`;
  const hasMop = containsAnyKeyword2(haystack, MOP_KEYWORDS);
  const hasIntensity = containsAnyKeyword2(haystack, INTENSITY_KEYWORDS);
  if (!hasMop || !hasIntensity) {
    return 0;
  }
  return 100 + (selectOffOption(options) != null ? 20 : 0) + (selectPreferredOption(options, void 0, MOP_INTENSITY_PREFERENCES) != null ? 20 : 0);
}
function scoreMopModeControl(companion) {
  const options = toStringArray2(companion.options);
  if (options.length < 2) {
    return 0;
  }
  const haystack = `${normalizeText2(companion.entityId) ?? ""}_${normalizeText2(companion.friendlyName) ?? ""}`;
  const hasMop = containsAnyKeyword2(haystack, MOP_KEYWORDS);
  const hasMode = containsAnyKeyword2(haystack, MODE_KEYWORDS);
  if (!hasMop || !hasMode) {
    return 0;
  }
  return 100 + (selectPreferredOption(options, void 0, MOP_MODE_PREFERENCES) != null ? 20 : 0);
}
function createFanSpeedAction(vacuumEntityId, control, option) {
  if (control == null || option == null) {
    return void 0;
  }
  if (control.kind === "select") {
    return createSelectAction(control.entityId, option);
  }
  return {
    action: "vacuum.set_fan_speed",
    entityId: vacuumEntityId,
    data: { fan_speed: option }
  };
}
function createSelectAction(entityId, option) {
  if (entityId == null || option == null) {
    return void 0;
  }
  return {
    action: "select.select_option",
    entityId,
    data: { option }
  };
}
function selectOffOption(options) {
  if (options == null) {
    return void 0;
  }
  return options.find((option) => isOffOption(option));
}
function selectPreferredOption(options, current, preferences) {
  if (options == null || options.length === 0) {
    return void 0;
  }
  if (current != null && !isOffOption(current) && options.includes(current)) {
    return current;
  }
  for (const preference of preferences) {
    const matched = options.find((option) => {
      return (normalizeText2(option) ?? "").includes(preference);
    });
    if (matched != null && !isOffOption(matched)) {
      return matched;
    }
  }
  return options.find((option) => !isOffOption(option));
}
function resolveEnabledState(value) {
  if (value == null) {
    return void 0;
  }
  return !isOffOption(value);
}
function isOffOption(value) {
  const normalized = normalizeText2(value);
  if (normalized == null) {
    return false;
  }
  return OFF_KEYWORDS.some((keyword) => normalized.includes(keyword));
}
function appendAction(actions, action) {
  if (action != null) {
    actions.push(action);
  }
}
function dedupeActions(actions) {
  const seen = /* @__PURE__ */ new Set();
  return actions.filter((action) => {
    const key = `${action.action}|${action.entityId ?? ""}|${JSON.stringify(action.data ?? {})}`;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}
function countKeywordHits(value, keywords) {
  return keywords.reduce((count, keyword) => {
    return count + (value.includes(keyword) ? 1 : 0);
  }, 0);
}
function containsAnyKeyword2(value, keywords) {
  return keywords.some((keyword) => value.includes(keyword));
}
function toStringArray2(value) {
  if (Array.isArray(value)) {
    return value.flatMap((item) => toStringArray2(item));
  }
  if (typeof value === "string") {
    return value.length > 0 ? [value] : [];
  }
  return [];
}
function toStringValue3(value) {
  return typeof value === "string" && value.length > 0 ? value : void 0;
}
function normalizeText2(value) {
  if (typeof value !== "string") {
    return void 0;
  }
  const normalized = value.normalize("NFD").replace(new RegExp("\\p{Diacritic}+", "gu"), "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
  return normalized.length > 0 ? normalized : void 0;
}

// src/matter/endpoints/legacy/vacuum/behaviors/vacuum-rvc-clean-mode-server.ts
var DEFAULT_VACUUM_CLEAN_MODE_DATA = {
  currentMode: 0 /* VacuumAndMop */,
  supportedModes: [
    {
      matterMode: 0 /* VacuumAndMop */,
      label: "Vacuum & Mop",
      option: "Vacuum & Mop",
      sequential: false
    },
    {
      matterMode: 1 /* Vacuum */,
      label: "Vacuum",
      option: "Vacuum",
      sequential: false
    },
    {
      matterMode: 2 /* Mop */,
      label: "Mop",
      option: "Mop",
      sequential: false
    }
  ]
};
var VacuumRvcCleanModeServer = RvcCleanModeServer({
  getCurrentMode: (_, agent) => {
    const data = resolveEffectiveVacuumCleanModeData(agent);
    return data.currentMode;
  },
  getSupportedModes: (_, agent) => {
    return toMatterSupportedModes(
      resolveEffectiveVacuumCleanModeData(agent).supportedModes
    );
  },
  changeToMode: (newMode, agent) => {
    const entity = agent.get(HomeAssistantEntityBehavior).entity;
    const companions = collectRelatedCleanModeEntities(agent, entity);
    const data = resolveEffectiveVacuumCleanModeData(agent, companions);
    const selectedMode = data.supportedModes.find(
      (mode) => mode.matterMode === newMode
    );
    if (selectedMode == null) {
      return void 0;
    }
    if (data.entityId != null) {
      console.debug(
        `VacuumCleanMode selecting option ${JSON.stringify(selectedMode.option)} on ${data.entityId}`
      );
      return {
        action: "select.select_option",
        entityId: data.entityId,
        data: { option: selectedMode.option }
      };
    }
    const attributes4 = entity.state.attributes;
    const controlActions = buildVacuumCleanModeControlActions(
      entity.entity_id,
      attributes4,
      companions,
      newMode
    );
    if (controlActions != null) {
      console.debug(
        `VacuumCleanMode derived ${controlActions.length} Home Assistant action(s) for mode ${newMode}`
      );
      return controlActions;
    }
    console.debug(
      `VacuumCleanMode has no actionable companion controls for mode ${newMode}`
    );
    return void 0;
  }
});
function resolveEffectiveVacuumCleanModeData(agent, companions) {
  const entity = agent.get(HomeAssistantEntityBehavior).entity;
  const relatedEntities = companions ?? collectRelatedCleanModeEntities(agent, entity);
  const attributes4 = entity.state.attributes;
  const resolved = resolveVacuumCleanModeData(entity, relatedEntities) ?? DEFAULT_VACUUM_CLEAN_MODE_DATA;
  const derivedCurrentMode = resolveVacuumCurrentModeFromControls(
    attributes4,
    relatedEntities
  );
  return derivedCurrentMode == null ? resolved : {
    ...resolved,
    currentMode: derivedCurrentMode
  };
}
function collectRelatedCleanModeEntities(agent, entity) {
  const deviceId = entity.deviceRegistry?.id ?? entity.registry?.device_id;
  if (deviceId == null) {
    return [];
  }
  let registry;
  try {
    registry = agent.env.get(HomeAssistantRegistry);
  } catch {
    return [];
  }
  const companions = [];
  for (const relatedEntity of Object.values(registry.entities)) {
    if (relatedEntity.device_id !== deviceId || relatedEntity.entity_id === entity.entity_id) {
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
      friendlyName: toStringValue4(relatedState.attributes?.friendly_name) ?? relatedEntity.name ?? relatedEntity.original_name,
      state: relatedState.state,
      options: asRecord3(relatedState.attributes).options
    });
  }
  return companions;
}
function toMatterSupportedModes(options) {
  return options.map((option) => ({
    label: option.label,
    mode: option.matterMode,
    modeTags: buildModeTags(option)
  }));
}
function buildModeTags(option) {
  switch (option.matterMode) {
    case 0 /* VacuumAndMop */:
      return option.sequential ? [{ value: RvcCleanMode.ModeTag.VacuumThenMop }] : [
        { value: RvcCleanMode.ModeTag.Vacuum },
        { value: RvcCleanMode.ModeTag.Mop }
      ];
    case 2 /* Mop */:
      return [{ value: RvcCleanMode.ModeTag.Mop }];
    case 1 /* Vacuum */:
    default:
      return [{ value: RvcCleanMode.ModeTag.Vacuum }];
  }
}
function asRecord3(value) {
  if (value == null || typeof value !== "object") {
    return {};
  }
  return value;
}
function toStringValue4(value) {
  return typeof value === "string" && value.length > 0 ? value : void 0;
}

// src/matter/behaviors/rvc-run-mode-server.ts
import { RvcRunModeServer as Base18 } from "@matter/main/behaviors";
import { ModeBase as ModeBase2 } from "@matter/main/clusters/mode-base";
var RvcRunModeServerBase = class extends Base18 {
  async initialize() {
    const homeAssistant = await this.agent.load(HomeAssistantEntityBehavior);
    this.update(homeAssistant.entity);
    this.reactTo(homeAssistant.onChange, this.update);
    await super.initialize();
  }
  update(entity) {
    applyPatchState(this.state, {
      currentMode: this.state.config.getCurrentMode(entity.state, this.agent),
      supportedModes: this.state.config.getSupportedModes(
        entity.state,
        this.agent
      )
    });
  }
  changeToMode(request) {
    const homeAssistant = this.agent.get(HomeAssistantEntityBehavior);
    switch (request.newMode) {
      case 1 /* Cleaning */:
        homeAssistant.callAction(this.state.config.start(void 0, this.agent));
        break;
      case 0 /* Idle */:
        homeAssistant.callAction(
          this.state.config.returnToBase(void 0, this.agent)
        );
        break;
      default:
        homeAssistant.callAction(this.state.config.pause(void 0, this.agent));
        break;
    }
    return {
      status: ModeBase2.ModeChangeStatus.Success,
      statusText: "Successfully switched mode"
    };
  }
};
((RvcRunModeServerBase2) => {
  class State extends Base18.State {
    config;
  }
  RvcRunModeServerBase2.State = State;
})(RvcRunModeServerBase || (RvcRunModeServerBase = {}));
function RvcRunModeServer(config6) {
  return RvcRunModeServerBase.set({ config: config6 });
}

// src/matter/endpoints/legacy/vacuum/behaviors/vacuum-rvc-run-mode-server.ts
import { RvcRunMode } from "@matter/main/clusters";

// src/matter/endpoints/legacy/vacuum/behaviors/vacuum-service-area-server.ts
import { inspect } from "node:util";
import { ServiceAreaServer as Base19 } from "@matter/main/behaviors/service-area";
import { ServiceArea } from "@matter/main/clusters/service-area";

// src/matter/endpoints/legacy/vacuum/service-area-data.ts
var AREA_ID_KEYS = [
  "id",
  "segment_id",
  "segmentId",
  "room_id",
  "roomId",
  "area_id",
  "areaId",
  "value"
];
var AREA_ACTION_KEYS = [
  "cleaning_area_id",
  "cleaningAreaId",
  "area_slug",
  "areaSlug",
  "ha_area_id",
  "home_assistant_area_id",
  "action_value",
  "actionValue",
  ...AREA_ID_KEYS
];
var AREA_NAME_KEYS = ["name", "title", "label", "room_name"];
var MAP_ID_KEYS = ["map_id", "mapId", "selected_map", "map"];
var SELECTED_AREA_KEYS = [
  "selected_segments",
  "cleaning_segments",
  "active_segments",
  "current_segments",
  "selected_rooms",
  "current_rooms",
  "selected_areas",
  "active_areas"
];
var CURRENT_AREA_KEYS = [
  "current_segment",
  "currentSegment",
  "current_segment_id",
  "currentSegmentId",
  "current_room",
  "currentRoom",
  "current_room_id",
  "currentRoomId",
  "current_area",
  "currentArea",
  "current_area_id",
  "currentAreaId",
  "active_segment",
  "activeSegment",
  "active_room",
  "activeRoom",
  "active_area",
  "activeArea",
  "room",
  "room_id",
  "segment",
  "segment_id",
  "area",
  "area_id"
];
function parseVacuumServiceAreaData(attributes4) {
  const defaultMapId = toNumber(attributes4.selected_map ?? attributes4.map_id) ?? 1;
  const candidates = collectAreaCandidates(attributes4, defaultMapId);
  const areas = createAreas(candidates, defaultMapId);
  if (areas.length === 0) {
    return void 0;
  }
  const mapIds = [...new Set(areas.map((area) => area.mapId))].sort((a, b) => a - b);
  const maps = mapIds.map((mapId) => ({
    mapId,
    name: mapIds.length === 1 ? "Map" : `Map ${mapId}`
  }));
  const selectedAreaValues = parseSelectedAreaValues(attributes4);
  const selectedMatterAreaIds = toMatterAreaIds(selectedAreaValues, areas);
  const currentAreaValue = extractAreaValue(
    attributes4.current_segment ?? attributes4.current_area ?? firstAreaValue(attributes4, CURRENT_AREA_KEYS)
  );
  const currentMatterAreaId = currentAreaValue == null ? void 0 : toMatterAreaIds([currentAreaValue], areas)[0];
  const action = toStringValue5(attributes4.matter_service_area_action) ?? "vacuum.send_command";
  const commandKey = toStringValue5(attributes4.matter_service_area_command_key) ?? "command";
  const paramsKey = toStringValue5(attributes4.matter_service_area_params_key) ?? "params";
  const command = toStringValue5(attributes4.matter_service_area_command) ?? toStringValue5(attributes4.room_clean_command) ?? toStringValue5(attributes4.segment_clean_command) ?? (action === "vacuum.send_command" ? "app_segment_clean" : void 0);
  const paramsNested = toBoolean(attributes4.matter_service_area_params_nested);
  return {
    maps,
    areas,
    selectedMatterAreaIds,
    currentMatterAreaId,
    action,
    command,
    commandKey,
    paramsKey,
    paramsNested
  };
}
function collectAreaCandidates(attributes4, defaultMapId) {
  const candidates = [];
  const areasFromArrays = parseArrayLikeAreas(attributes4.rooms, defaultMapId).concat(
    parseArrayLikeAreas(attributes4.segments, defaultMapId),
    parseArrayLikeAreas(attributes4.room_mapping, defaultMapId),
    parseArrayLikeAreas(attributes4.room_map, defaultMapId),
    parseArrayLikeAreas(attributes4.segment_map, defaultMapId)
  );
  candidates.push(...areasFromArrays);
  const areasFromObjects = parseObjectLikeAreas(attributes4.rooms, defaultMapId).concat(
    parseObjectLikeAreas(attributes4.segments, defaultMapId),
    parseObjectLikeAreas(attributes4.room_map, defaultMapId),
    parseObjectLikeAreas(attributes4.segment_map, defaultMapId)
  );
  candidates.push(...areasFromObjects);
  const ids = parseNumberList(attributes4.segment_ids).concat(
    parseNumberList(attributes4.room_ids)
  );
  if (ids.length > 0) {
    const names = parseNamesById(attributes4.segment_names, attributes4.room_names);
    for (const segmentId of ids) {
      candidates.push({
        matterAreaId: segmentId,
        actionValue: segmentId,
        mapId: defaultMapId,
        name: names.get(segmentId)
      });
    }
  }
  return candidates;
}
function createAreas(candidates, defaultMapId) {
  const usedMatterAreaIds = /* @__PURE__ */ new Set();
  const byMatterAreaId = /* @__PURE__ */ new Map();
  for (const candidate of candidates) {
    const actionValue = candidate.actionValue ?? candidate.matterAreaId;
    if (actionValue == null) {
      continue;
    }
    const resolvedMatterAreaId = candidate.matterAreaId ?? createMatterAreaId(actionValue, usedMatterAreaIds);
    if (byMatterAreaId.has(resolvedMatterAreaId)) {
      continue;
    }
    usedMatterAreaIds.add(resolvedMatterAreaId);
    byMatterAreaId.set(resolvedMatterAreaId, {
      matterAreaId: resolvedMatterAreaId,
      segmentId: resolvedMatterAreaId,
      actionValue,
      mapId: candidate.mapId ?? defaultMapId,
      name: candidate.name ?? createDefaultAreaName(actionValue, resolvedMatterAreaId)
    });
  }
  return [...byMatterAreaId.values()].sort((a, b) => a.matterAreaId - b.matterAreaId);
}
function parseArrayLikeAreas(value, defaultMapId) {
  if (!Array.isArray(value)) {
    return [];
  }
  const result = [];
  for (const item of value) {
    if (item == null) {
      continue;
    }
    if (Array.isArray(item)) {
      const primaryValue = toAreaValue(item[0]);
      if (primaryValue == null) {
        continue;
      }
      const actionOverride = toAreaValue(item[3]);
      const actionValue = actionOverride ?? primaryValue;
      const matterAreaId = toNumber(primaryValue) ?? toNumber(actionOverride);
      result.push({
        matterAreaId,
        actionValue,
        mapId: toNumber(item[2]) ?? defaultMapId,
        name: toStringValue5(item[1])
      });
      continue;
    }
    if (typeof item === "number" || typeof item === "bigint") {
      const numeric = toNumber(item);
      if (numeric != null) {
        result.push({
          matterAreaId: numeric,
          actionValue: numeric,
          mapId: defaultMapId
        });
      }
      continue;
    }
    if (typeof item === "string") {
      const actionValue = toAreaValue(item);
      if (actionValue != null) {
        result.push({
          matterAreaId: toNumber(actionValue),
          actionValue,
          mapId: defaultMapId
        });
      }
      continue;
    }
    if (typeof item === "object") {
      const record = item;
      const matterAreaId = firstNumber(record, AREA_ID_KEYS);
      const actionValue = firstAreaValue(record, AREA_ACTION_KEYS) ?? (matterAreaId != null ? matterAreaId : void 0);
      if (actionValue == null && matterAreaId == null) {
        continue;
      }
      result.push({
        matterAreaId,
        actionValue,
        mapId: firstNumber(record, MAP_ID_KEYS) ?? defaultMapId,
        name: firstString(record, AREA_NAME_KEYS)
      });
    }
  }
  return result;
}
function parseObjectLikeAreas(value, defaultMapId) {
  if (value == null || Array.isArray(value) || typeof value !== "object") {
    return [];
  }
  const result = [];
  for (const [key, entry] of Object.entries(value)) {
    const keyActionValue = toAreaValue(key);
    const keyMatterAreaId = toNumber(keyActionValue);
    if (typeof entry === "string") {
      if (keyActionValue == null) {
        continue;
      }
      result.push({
        matterAreaId: keyMatterAreaId,
        actionValue: keyActionValue,
        mapId: defaultMapId,
        name: entry
      });
      continue;
    }
    if (entry != null && typeof entry === "object") {
      const record = entry;
      const matterAreaId = firstNumber(record, AREA_ID_KEYS) ?? keyMatterAreaId;
      const actionValue = firstAreaValue(record, AREA_ACTION_KEYS) ?? keyActionValue ?? (matterAreaId != null ? matterAreaId : void 0);
      if (actionValue == null && matterAreaId == null) {
        continue;
      }
      result.push({
        matterAreaId,
        actionValue,
        mapId: firstNumber(record, MAP_ID_KEYS) ?? defaultMapId,
        name: firstString(record, AREA_NAME_KEYS)
      });
      continue;
    }
    if (keyActionValue != null && isSelectedValue(entry)) {
      result.push({
        matterAreaId: keyMatterAreaId,
        actionValue: keyActionValue,
        mapId: defaultMapId
      });
    }
  }
  return result;
}
function parseSelectedAreaValues(attributes4) {
  const selected = SELECTED_AREA_KEYS.flatMap(
    (key) => parseAreaValueList(attributes4[key])
  );
  const currentAreaValue = extractAreaValue(
    attributes4.current_segment ?? attributes4.current_area
  );
  if (currentAreaValue != null) {
    selected.push(currentAreaValue);
  }
  return uniqueAreaValues(selected);
}
function parseNamesById(...values4) {
  const names = /* @__PURE__ */ new Map();
  for (const value of values4) {
    if (Array.isArray(value)) {
      for (const entry of value) {
        if (Array.isArray(entry)) {
          const id = toNumber(entry[0]);
          const name = toStringValue5(entry[1]);
          if (id != null && name != null) {
            names.set(id, name);
          }
          continue;
        }
        if (typeof entry === "object" && entry != null) {
          const record = entry;
          const id = firstNumber(record, AREA_ID_KEYS);
          const name = firstString(record, AREA_NAME_KEYS);
          if (id != null && name != null) {
            names.set(id, name);
          }
        }
      }
      continue;
    }
    if (value != null && typeof value === "object") {
      for (const [key, entry] of Object.entries(value)) {
        const id = toNumber(key);
        if (id != null && typeof entry === "string" && entry.trim() !== "") {
          names.set(id, entry);
          continue;
        }
        if (id != null && entry != null && typeof entry === "object") {
          const record = entry;
          const name = firstString(record, AREA_NAME_KEYS);
          if (name != null) {
            names.set(id, name);
          }
        }
      }
    }
  }
  return names;
}
function parseAreaValueList(value) {
  if (Array.isArray(value)) {
    return uniqueAreaValues(value.flatMap((entry) => parseAreaValueList(entry)));
  }
  if (value != null && typeof value === "object") {
    const record = value;
    const directAreaValue = firstAreaValue(record, AREA_ACTION_KEYS);
    if (directAreaValue != null) {
      return [directAreaValue];
    }
    const result = [];
    for (const [key, entry] of Object.entries(record)) {
      const keyAreaValue = toAreaValue(key);
      if (keyAreaValue != null && isSelectedValue(entry)) {
        result.push(keyAreaValue);
      }
      if (entry != null && typeof entry === "object") {
        const nestedAreaValue = firstAreaValue(
          entry,
          AREA_ACTION_KEYS
        );
        if (nestedAreaValue != null) {
          result.push(nestedAreaValue);
        }
      }
    }
    return uniqueAreaValues(result);
  }
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (trimmed === "") {
      return [];
    }
    if (/[,;|\s]/.test(trimmed)) {
      const splitValues = trimmed.split(/[\s,;|]+/).map((entry) => toAreaValue(entry)).filter((entry) => entry != null);
      if (splitValues.length > 0) {
        return uniqueAreaValues(splitValues);
      }
    }
  }
  const areaValue = toAreaValue(value);
  return areaValue == null ? [] : [areaValue];
}
function parseNumberList(value) {
  if (Array.isArray(value)) {
    return value.flatMap((entry) => parseNumberList(entry));
  }
  if (value != null && typeof value === "object") {
    const record = value;
    const directAreaId = firstNumber(record, AREA_ID_KEYS);
    if (directAreaId != null) {
      return [directAreaId];
    }
    const result = [];
    for (const [key, entry] of Object.entries(record)) {
      const keyNumber = toNumber(key);
      if (keyNumber != null && isSelectedValue(entry)) {
        result.push(keyNumber);
        continue;
      }
      if (entry != null && typeof entry === "object") {
        const nestedId = firstNumber(entry, AREA_ID_KEYS);
        if (nestedId != null) {
          result.push(nestedId);
        }
      }
    }
    return [...new Set(result)];
  }
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (trimmed === "") {
      return [];
    }
    if (/[,;|\s]/.test(trimmed) && toNumber(trimmed) == null) {
      return trimmed.split(/[\s,;|]+/).map((entry) => toNumber(entry)).filter((entry) => entry != null);
    }
  }
  const numeric = toNumber(value);
  return numeric != null ? [numeric] : [];
}
function toMatterAreaIds(areaValues, areas) {
  const byMatterAreaId = /* @__PURE__ */ new Map();
  const byActionValue = /* @__PURE__ */ new Map();
  const byAreaName = /* @__PURE__ */ new Map();
  for (const area of areas) {
    byMatterAreaId.set(area.matterAreaId, area.matterAreaId);
    byActionValue.set(toAreaValueKey(area.actionValue), area.matterAreaId);
    const normalizedAreaName = normalizeAreaLookup(area.name);
    if (normalizedAreaName != null) {
      byAreaName.set(normalizedAreaName, area.matterAreaId);
    }
    if (typeof area.actionValue === "string") {
      const normalizedActionValue = normalizeAreaLookup(area.actionValue);
      if (normalizedActionValue != null) {
        byAreaName.set(normalizedActionValue, area.matterAreaId);
      }
    }
  }
  const matterAreaIds = [];
  for (const areaValue of areaValues) {
    if (typeof areaValue === "number") {
      const byMatter = byMatterAreaId.get(areaValue);
      if (byMatter != null) {
        matterAreaIds.push(byMatter);
        continue;
      }
    }
    const byAction = byActionValue.get(toAreaValueKey(areaValue));
    if (byAction != null) {
      matterAreaIds.push(byAction);
      continue;
    }
    if (typeof areaValue === "string") {
      const normalizedAreaValue = normalizeAreaLookup(areaValue);
      if (normalizedAreaValue != null) {
        const byName = byAreaName.get(normalizedAreaValue);
        if (byName != null) {
          matterAreaIds.push(byName);
        }
      }
    }
  }
  return [...new Set(matterAreaIds)];
}
function firstNumber(record, keys3) {
  for (const key of keys3) {
    const value = toNumber(record[key]);
    if (value != null) {
      return value;
    }
  }
  return void 0;
}
function firstAreaValue(record, keys3) {
  for (const key of keys3) {
    const value = toAreaValue(record[key]);
    if (value != null) {
      return value;
    }
  }
  return void 0;
}
function firstString(record, keys3) {
  for (const key of keys3) {
    const value = toStringValue5(record[key]);
    if (value != null) {
      return value;
    }
  }
  return void 0;
}
function toNumber(value) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  if (typeof value === "bigint") {
    const asNumber = Number(value);
    return Number.isFinite(asNumber) ? asNumber : void 0;
  }
  if (typeof value === "string" && value.trim() !== "") {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }
  return void 0;
}
function toAreaValue(value) {
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (trimmed === "") {
      return void 0;
    }
    const numericPattern = /^-?\d+(\.\d+)?$/;
    if (numericPattern.test(trimmed)) {
      const parsed = Number(trimmed);
      if (Number.isFinite(parsed)) {
        return parsed;
      }
    }
    return trimmed;
  }
  const numeric = toNumber(value);
  return numeric != null ? numeric : void 0;
}
function toStringValue5(value) {
  return typeof value === "string" && value.trim() !== "" ? value : void 0;
}
function extractAreaValue(value) {
  const direct = toAreaValue(value);
  if (direct != null) {
    return direct;
  }
  if (value != null && typeof value === "object") {
    return firstAreaValue(value, AREA_ACTION_KEYS);
  }
  return void 0;
}
function toBoolean(value) {
  if (typeof value === "boolean") {
    return value;
  }
  if (typeof value === "number") {
    return value !== 0;
  }
  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    return normalized === "1" || normalized === "true" || normalized === "yes";
  }
  return false;
}
function isSelectedValue(value) {
  if (value == null) {
    return false;
  }
  if (typeof value === "boolean") {
    return value;
  }
  if (typeof value === "number") {
    return value !== 0;
  }
  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    return normalized !== "" && normalized !== "0" && normalized !== "false" && normalized !== "off" && normalized !== "none";
  }
  return true;
}
function toAreaValueKey(value) {
  return typeof value === "number" ? `n:${value}` : `s:${value}`;
}
function uniqueAreaValues(values4) {
  const result = [];
  const seen = /* @__PURE__ */ new Set();
  for (const value of values4) {
    const key = toAreaValueKey(value);
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    result.push(value);
  }
  return result;
}
function createMatterAreaId(actionValue, usedMatterAreaIds) {
  const numeric = toNumber(actionValue);
  if (numeric != null && !usedMatterAreaIds.has(numeric)) {
    return numeric;
  }
  const input = String(actionValue);
  const maxAreaId = 2147483646;
  let hash2 = 2166136261;
  for (let index = 0; index < input.length; index += 1) {
    hash2 ^= input.charCodeAt(index);
    hash2 = Math.imul(hash2, 16777619);
  }
  let candidate = Math.abs(hash2) % maxAreaId + 1;
  while (usedMatterAreaIds.has(candidate)) {
    candidate = candidate + 1;
    if (candidate > maxAreaId) {
      candidate = 1;
    }
  }
  return candidate;
}
function createDefaultAreaName(actionValue, matterAreaId) {
  if (typeof actionValue === "string") {
    const humanized = actionValue.replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
    if (humanized !== "") {
      return humanized;
    }
  }
  return `Area ${matterAreaId}`;
}
function normalizeAreaLookup(value) {
  const normalized = value.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
  return normalized.length > 0 ? normalized : void 0;
}

// src/matter/endpoints/legacy/vacuum/behaviors/vacuum-service-area-server.ts
var AREA_ID_KEYS2 = [
  "areaId",
  "area_id",
  "id",
  "value",
  "segmentId",
  "segment_id",
  "roomId",
  "room_id"
];
var RELATED_CURRENT_AREA_ENTITY_DOMAINS = /* @__PURE__ */ new Set([
  "sensor",
  "binary_sensor",
  "select",
  "text",
  "input_text"
]);
var RELATED_CURRENT_AREA_ENTITY_HINTS = [
  "current_room",
  "current_area",
  "current_segment",
  "habitacion_actual",
  "room",
  "area",
  "segment",
  "estancia",
  "habitacion"
];
var CURRENT_AREA_ATTRIBUTE_KEYS = [
  "current_area",
  "currentArea",
  "current_segment",
  "currentSegment",
  "current_room",
  "currentRoom",
  "room_name",
  "segment_name",
  "area_name",
  "room",
  "segment",
  "area",
  "cleaning_area_id",
  "cleaningAreaId"
];
var DEFAULT_VACUUM_SERVICE_AREA_ACTION_CONFIG = {
  action: "vacuum.send_command",
  command: "app_segment_clean",
  commandKey: "command",
  paramsKey: "params",
  paramsNested: false
};
var VacuumServiceAreaServerBase = class extends Base19 {
  #data;
  #actionConfig;
  #actionValuesByAreaId = /* @__PURE__ */ new Map();
  #selectedMatterAreaIds = [];
  #cachedSelectedAreasAction;
  get supportsMaps() {
    const features = this.features;
    return features.maps === true;
  }
  get supportsProgressReporting() {
    const features = this.features;
    return features.progressReporting === true;
  }
  async initialize() {
    this.ensureStateDefaults();
    const homeAssistant = await this.agent.load(HomeAssistantEntityBehavior);
    this.update(homeAssistant.entity);
    this.reactTo(homeAssistant.onChange, this.update);
    await super.initialize();
  }
  ensureStateDefaults() {
    const state = this.state;
    if (this.supportsMaps && !Array.isArray(state.supportedMaps)) {
      state.supportedMaps = [];
    }
    if (!Array.isArray(state.supportedAreas)) {
      state.supportedAreas = [];
    }
    if (!Array.isArray(state.selectedAreas)) {
      state.selectedAreas = [];
    }
    if (this.supportsProgressReporting && !Array.isArray(state.progress)) {
      state.progress = [];
    }
    if (state.currentArea === void 0) {
      state.currentArea = null;
    }
  }
  update(entity) {
    this.ensureStateDefaults();
    const state = this.state;
    const attributes4 = entity.state.attributes;
    const parsedData = parseVacuumServiceAreaData(
      attributes4
    );
    const data = parsedData ?? this.#data ?? this.buildFallbackDataFromState();
    const usingPreviousData = parsedData == null && this.#data != null;
    const usingStateFallbackData = parsedData == null && this.#data == null && data != null;
    if (usingPreviousData) {
      const selectedAreasFromState2 = this.getNormalizedStateSelectedAreaIds();
      if (selectedAreasFromState2.length > 0) {
        this.setStoredSelectedAreas(selectedAreasFromState2, "state-no-data");
      }
      console.debug(
        "VacuumServiceArea retaining previous parsed data (current HA update has no room metadata)"
      );
    }
    if (usingStateFallbackData) {
      console.debug(
        "VacuumServiceArea using fallback data from Matter state (HA attributes without room metadata)"
      );
    }
    if (data == null) {
      this.#data = void 0;
      this.#actionValuesByAreaId.clear();
      this.setStoredSelectedAreas([], "no-data");
      if (this.supportsMaps) {
        state.supportedMaps = [];
      }
      state.supportedAreas = [];
      state.selectedAreas = [];
      state.currentArea = null;
      if (this.supportsProgressReporting) {
        state.progress = [];
      }
      return;
    }
    this.#data = data;
    this.#actionConfig = toActionConfig(data);
    this.#actionValuesByAreaId.clear();
    for (const area of data.areas) {
      this.#actionValuesByAreaId.set(area.matterAreaId, area.actionValue);
    }
    const selectedAreasFromState = this.getNormalizedStateSelectedAreaIds();
    if (selectedAreasFromState.length > 0) {
      this.setStoredSelectedAreas(selectedAreasFromState, "state");
    }
    const supportedMaps = this.supportsMaps ? data.maps.map((map) => ({
      mapId: map.mapId,
      name: map.name
    })) : [];
    const supportedAreas = data.areas.map((area) => ({
      areaId: area.matterAreaId,
      mapId: this.supportsMaps ? area.mapId : null,
      areaInfo: {
        locationInfo: {
          locationName: area.name,
          floorNumber: null,
          areaType: null
        },
        landmarkInfo: null
      }
    }));
    disambiguateDuplicateAreaNames(supportedAreas);
    const selectedAreasFromAttributes = data.selectedMatterAreaIds.filter(
      (areaId) => this.#actionValuesByAreaId.has(areaId)
    );
    if (selectedAreasFromAttributes.length > 0 || this.#selectedMatterAreaIds.length === 0) {
      this.setStoredSelectedAreas(selectedAreasFromAttributes, "attributes");
    }
    const selectedAreas = this.#selectedMatterAreaIds;
    const currentMatterAreaId = data.currentMatterAreaId ?? this.resolveCurrentMatterAreaIdFromCompanionEntities(entity, data.areas);
    const isOperating = isOperatingVacuumState(entity.state.state);
    const operatingAreaId = isOperating ? currentMatterAreaId ?? (selectedAreas.length > 0 ? selectedAreas[0] : null) : currentMatterAreaId ?? null;
    const progress = selectedAreas.map((areaId) => ({
      areaId,
      status: isOperating && operatingAreaId != null && areaId === operatingAreaId ? ServiceArea.OperationalStatus.Operating : ServiceArea.OperationalStatus.Pending
    }));
    if (this.supportsMaps) {
      state.supportedMaps = supportedMaps;
    }
    state.supportedAreas = supportedAreas;
    state.selectedAreas = selectedAreas;
    state.currentArea = operatingAreaId;
    if (this.supportsProgressReporting) {
      state.progress = progress;
    }
  }
  async selectAreas(request) {
    const normalizedAreas = normalizeSelectedAreaIds(request);
    if (normalizedAreas.length === 0) {
      console.debug(
        `VacuumServiceArea selectAreas received unparsable payload: ${inspect(request, { depth: 4, breakLength: 120 })}`
      );
    }
    const response = await super.selectAreas(
      normalizedAreas.length > 0 ? { newAreas: normalizedAreas } : request
    );
    if (response.status !== ServiceArea.SelectAreasStatus.Success) {
      return response;
    }
    const selectedAreasFromState = this.getNormalizedStateSelectedAreaIds().filter(
      (areaId) => this.isKnownAreaId(areaId)
    );
    const selectedAreasFromRequest = normalizedAreas.filter(
      (areaId) => this.isKnownAreaId(areaId)
    );
    const selectedAreasFromRequestWithoutKnownFilter = selectedAreasFromRequest.length > 0 ? selectedAreasFromRequest : normalizedAreas;
    const selectedAreas = selectedAreasFromState.length > 0 ? selectedAreasFromState : selectedAreasFromRequestWithoutKnownFilter;
    this.setStoredSelectedAreas(selectedAreas, "selectAreas");
    const state = this.state;
    state.selectedAreas = selectedAreas;
    this.#cachedSelectedAreasAction = this.buildSelectedAreasActionFromIds(selectedAreas) ?? this.#cachedSelectedAreasAction;
    console.debug(
      `VacuumServiceArea selectAreas status=${response.status} selected=${JSON.stringify(this.#selectedMatterAreaIds)} normalized=${JSON.stringify(normalizedAreas)} fromState=${JSON.stringify(selectedAreasFromState)} fromRequest=${JSON.stringify(selectedAreasFromRequest)} supportedAreas=${JSON.stringify(this.getKnownSupportedAreaIds())}`
    );
    return response;
  }
  getSelectedMatterAreaIds() {
    return this.#selectedMatterAreaIds;
  }
  resolveCurrentMatterAreaIdFromCompanionEntities(entity, areas) {
    const deviceId = entity.deviceRegistry?.id ?? entity.registry?.device_id;
    if (deviceId == null) {
      return void 0;
    }
    let registry;
    try {
      registry = this.agent.env.get(HomeAssistantRegistry);
    } catch {
      return void 0;
    }
    for (const relatedEntity of Object.values(registry.entities)) {
      if (relatedEntity.device_id !== deviceId || relatedEntity.entity_id === entity.entity_id) {
        continue;
      }
      const [domain] = relatedEntity.entity_id.split(".");
      if (!domain || !RELATED_CURRENT_AREA_ENTITY_DOMAINS.has(domain)) {
        continue;
      }
      const relatedState = registry.states[relatedEntity.entity_id];
      if (relatedState == null) {
        continue;
      }
      if (!isLikelyCurrentAreaCompanionEntity(
        relatedEntity.entity_id,
        relatedState.attributes?.friendly_name
      )) {
        continue;
      }
      const candidateValues = collectCurrentAreaCandidateValues(
        relatedState.state,
        relatedState.attributes
      );
      for (const candidateValue of candidateValues) {
        const resolvedAreaId = this.resolveMatterAreaIdFromCurrentAreaCandidate(
          candidateValue,
          areas
        );
        if (resolvedAreaId != null) {
          return resolvedAreaId;
        }
      }
    }
    return void 0;
  }
  resolveMatterAreaIdFromCurrentAreaCandidate(value, areas) {
    const numericValue = toNumber2(value);
    if (numericValue != null) {
      for (const area of areas) {
        if (area.matterAreaId === numericValue || typeof area.actionValue === "number" && area.actionValue === numericValue) {
          return area.matterAreaId;
        }
      }
    }
    if (typeof value !== "string") {
      return void 0;
    }
    const normalizedValue = normalizeAreaLookup2(value);
    if (normalizedValue == null) {
      return void 0;
    }
    for (const area of areas) {
      if (normalizeAreaLookup2(area.name) === normalizedValue) {
        return area.matterAreaId;
      }
      if (typeof area.actionValue === "string" && normalizeAreaLookup2(area.actionValue) === normalizedValue) {
        return area.matterAreaId;
      }
      if (String(area.matterAreaId) === value.trim()) {
        return area.matterAreaId;
      }
      if (typeof area.actionValue === "number" && String(area.actionValue) === value.trim()) {
        return area.matterAreaId;
      }
    }
    return void 0;
  }
  getSelectionDebugSnapshot() {
    return {
      selectedAreasFromState: this.getNormalizedStateSelectedAreaIds(),
      storedSelectedAreas: this.getSelectedMatterAreaIds(),
      knownSupportedAreas: this.getKnownSupportedAreaIds(),
      knownActionValueAreas: [...this.#actionValuesByAreaId.keys()],
      hasData: this.#data != null,
      hasActionConfig: this.#actionConfig != null,
      hasCachedSelectedAreasAction: this.#cachedSelectedAreasAction != null
    };
  }
  setStoredSelectedAreas(areaIds, source) {
    const normalized = toUniqueAreaIds(areaIds);
    if (areSameNumberArrays(this.#selectedMatterAreaIds, normalized)) {
      return;
    }
    this.#selectedMatterAreaIds = normalized;
    if (normalized.length === 0) {
      this.#cachedSelectedAreasAction = void 0;
    }
    console.debug(
      `VacuumServiceArea stored selected areas updated (${source}): ${JSON.stringify(this.#selectedMatterAreaIds)}`
    );
  }
  getSelectedAreasAction() {
    const selectedAreaIdsFromState = this.getNormalizedStateSelectedAreaIds();
    const selectedAreaIds = selectedAreaIdsFromState.length > 0 ? selectedAreaIdsFromState : this.getSelectedMatterAreaIds();
    const selectedAction = this.buildSelectedAreasActionFromIds(selectedAreaIds);
    if (selectedAction != null) {
      this.#cachedSelectedAreasAction = selectedAction;
      return selectedAction;
    }
    if (selectedAreaIds.length > 0 && this.#cachedSelectedAreasAction != null) {
      console.debug(
        `VacuumServiceArea using cached selected-areas action for ids ${JSON.stringify(selectedAreaIds)}`
      );
      return this.#cachedSelectedAreasAction;
    }
    if (selectedAreaIds.length > 0) {
      const debugSnapshot = this.getSelectionDebugSnapshot();
      console.debug(
        `VacuumServiceArea could not build selected-areas action for ids ${JSON.stringify(selectedAreaIds)} snapshot=${JSON.stringify(debugSnapshot)}`
      );
    }
    return void 0;
  }
  // Optional command: emulate skip by re-selecting areas except the skipped one.
  async skipArea(request) {
    const skipResult = this.assertSkipServiceArea(request);
    if (skipResult.status !== ServiceArea.SkipAreaStatus.Success) {
      return skipResult;
    }
    const remainingAreas = this.getNormalizedStateSelectedAreaIds().filter(
      (areaId) => areaId !== request.skippedArea
    );
    const selectResult = await this.selectAreas({ newAreas: remainingAreas });
    if (selectResult.status !== ServiceArea.SelectAreasStatus.Success) {
      return {
        status: ServiceArea.SkipAreaStatus.InvalidSkippedArea,
        statusText: selectResult.statusText
      };
    }
    return {
      status: ServiceArea.SkipAreaStatus.Success,
      statusText: ""
    };
  }
  getNormalizedStateSelectedAreaIds() {
    const state = this.state;
    const selectedAreas = Array.isArray(state.selectedAreas) ? state.selectedAreas : [];
    return toUniqueAreaIds(
      selectedAreas.map((areaId) => toNumber2(areaId)).filter((areaId) => areaId != null)
    );
  }
  getKnownSupportedAreaIds() {
    const state = this.state;
    const supportedAreas = Array.isArray(state.supportedAreas) ? state.supportedAreas : [];
    return toUniqueAreaIds(
      supportedAreas.map(
        (area) => toNumber2(area.areaId)
      ).filter((areaId) => areaId != null)
    );
  }
  isKnownAreaId(areaId) {
    return this.#actionValuesByAreaId.has(areaId) || this.getKnownSupportedAreaIds().includes(areaId);
  }
  buildSelectedAreasActionFromIds(selectedAreaIds) {
    if (selectedAreaIds.length === 0) {
      return void 0;
    }
    const selectedAreaValues = selectedAreaIds.map((areaId) => this.#actionValuesByAreaId.get(areaId) ?? areaId).filter(
      (value) => value != null
    );
    if (selectedAreaValues.length === 0) {
      return void 0;
    }
    const actionConfig = this.#actionConfig ?? (this.#data != null ? toActionConfig(this.#data) : void 0) ?? DEFAULT_VACUUM_SERVICE_AREA_ACTION_CONFIG;
    if (this.#data == null) {
      console.debug(
        `VacuumServiceArea building selected-areas action without live data using action config ${JSON.stringify(actionConfig)}`
      );
    }
    return buildSelectAreasAction(actionConfig, selectedAreaValues);
  }
  buildFallbackDataFromState() {
    const state = this.state;
    const supportedAreas = Array.isArray(state.supportedAreas) ? state.supportedAreas : [];
    const areas = supportedAreas.map((area) => {
      const areaRecord = area;
      const matterAreaId = toNumber2(areaRecord.areaId);
      if (matterAreaId == null) {
        return void 0;
      }
      const locationName = areaRecord.areaInfo?.locationInfo?.locationName;
      const name = typeof locationName === "string" && locationName.trim().length > 0 ? locationName : `Area ${matterAreaId}`;
      const mapId = toNumber2(areaRecord.mapId) ?? 1;
      const fallbackArea = {
        matterAreaId,
        segmentId: matterAreaId,
        actionValue: matterAreaId,
        mapId,
        name
      };
      return fallbackArea;
    }).filter((area) => area != null);
    if (areas.length === 0) {
      return void 0;
    }
    const mapIds = [...new Set(areas.map((area) => area.mapId))].sort(
      (left, right) => left - right
    );
    const maps = mapIds.map((mapId) => ({
      mapId,
      name: mapIds.length === 1 ? "Map" : `Map ${mapId}`
    }));
    const selectedMatterAreaIds = this.getNormalizedStateSelectedAreaIds();
    const currentMatterAreaId = toNumber2(state.currentArea);
    const actionConfig = this.#actionConfig ?? DEFAULT_VACUUM_SERVICE_AREA_ACTION_CONFIG;
    return {
      maps,
      areas,
      selectedMatterAreaIds,
      currentMatterAreaId,
      action: actionConfig.action,
      command: actionConfig.command,
      commandKey: actionConfig.commandKey,
      paramsKey: actionConfig.paramsKey,
      paramsNested: actionConfig.paramsNested
    };
  }
};
var VacuumServiceAreaServer = VacuumServiceAreaServerBase.with(
  ServiceArea.Feature.Maps,
  ServiceArea.Feature.ProgressReporting
).set({});
function createVacuumServiceAreaServer() {
  return VacuumServiceAreaServer;
}
function toActionConfig(data) {
  return {
    action: data.action,
    command: data.command,
    commandKey: data.commandKey,
    paramsKey: data.paramsKey,
    paramsNested: data.paramsNested
  };
}
function buildSelectAreasAction(config6, selectedAreaValues) {
  const payload = {
    [config6.paramsKey]: config6.paramsNested ? [selectedAreaValues] : selectedAreaValues
  };
  if (config6.command != null) {
    payload[config6.commandKey] = config6.command;
  }
  return {
    action: config6.action,
    data: payload
  };
}
function normalizeSelectedAreaIds(request) {
  if (Array.isArray(request)) {
    return toUniqueAreaIds(request.flatMap((value) => extractAreaIds(value)));
  }
  if (request != null && typeof request === "object") {
    const payload = request;
    const selected = payload.selectedAreas ?? payload.newAreas ?? payload.areaIds ?? payload.selectedAreaIds ?? payload.areas;
    if (selected != null) {
      return toUniqueAreaIds(extractAreaIds(selected));
    }
    return toUniqueAreaIds(extractAreaIds(payload));
  }
  return [];
}
function extractAreaIds(value) {
  if (Array.isArray(value)) {
    return value.map((entry) => extractAreaId(entry)).filter((entry) => entry != null);
  }
  if (isIterable(value)) {
    return toUniqueAreaIds(
      [...value].map((entry) => extractAreaId(entry)).filter((entry) => entry != null)
    );
  }
  if (isArrayLike(value)) {
    return toUniqueAreaIds(
      Array.from(value).map((entry) => extractAreaId(entry)).filter((entry) => entry != null)
    );
  }
  const areaId = extractAreaId(value);
  return areaId != null ? [areaId] : [];
}
function extractAreaId(value) {
  const direct = toNumber2(value);
  if (direct != null) {
    return direct;
  }
  if (value == null || typeof value !== "object") {
    return void 0;
  }
  const record = value;
  for (const key of AREA_ID_KEYS2) {
    const numeric = toNumber2(record[key]);
    if (numeric != null) {
      return numeric;
    }
  }
  const nestedCandidates = [
    record.area,
    record.areaInfo,
    record.selectedArea,
    record.newArea,
    record.skippedArea,
    record.targetArea
  ];
  for (const candidate of nestedCandidates) {
    const nested = extractAreaId(candidate);
    if (nested != null) {
      return nested;
    }
  }
  return void 0;
}
function isOperatingVacuumState(state) {
  return state === VacuumState.cleaning || state === "cleaning";
}
function toUniqueAreaIds(values4) {
  return [...new Set(values4)];
}
function areSameNumberArrays(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  for (let index = 0; index < left.length; index += 1) {
    if (left[index] !== right[index]) {
      return false;
    }
  }
  return true;
}
function toNumber2(value) {
  if (value != null && typeof value === "object") {
    const valueOf = value.valueOf;
    if (typeof valueOf === "function") {
      const primitive = valueOf.call(value);
      if (primitive !== value) {
        const parsedPrimitive = toNumber2(primitive);
        if (parsedPrimitive != null) {
          return parsedPrimitive;
        }
      }
    }
  }
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  if (typeof value === "bigint") {
    const asNumber = Number(value);
    return Number.isFinite(asNumber) ? asNumber : void 0;
  }
  if (typeof value === "string" && value.trim() !== "") {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }
  return void 0;
}
function isIterable(value) {
  if (value == null || typeof value === "string") {
    return false;
  }
  return typeof value === "object" && typeof value[Symbol.iterator] === "function";
}
function isArrayLike(value) {
  if (value == null || typeof value === "string") {
    return false;
  }
  if (Array.isArray(value) || isIterable(value)) {
    return false;
  }
  if (typeof value !== "object") {
    return false;
  }
  const length = value.length;
  return typeof length === "number" && Number.isFinite(length) && length >= 0;
}
function disambiguateDuplicateAreaNames(areas) {
  const counts = /* @__PURE__ */ new Map();
  for (const area of areas) {
    const locationName = area.areaInfo.locationInfo?.locationName ?? "";
    const key = `${area.mapId}:${locationName}`;
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  for (const area of areas) {
    const locationInfo = area.areaInfo.locationInfo;
    if (locationInfo == null) {
      continue;
    }
    const key = `${area.mapId}:${locationInfo.locationName}`;
    if ((counts.get(key) ?? 0) > 1) {
      area.areaInfo.locationInfo = {
        ...locationInfo,
        locationName: `${locationInfo.locationName} (${area.areaId})`
      };
    }
  }
}
function isLikelyCurrentAreaCompanionEntity(entityId, friendlyName) {
  const normalizedEntityId = normalizeAreaLookup2(entityId);
  const normalizedFriendlyName = normalizeAreaLookup2(
    typeof friendlyName === "string" ? friendlyName : void 0
  );
  return RELATED_CURRENT_AREA_ENTITY_HINTS.some((hint) => {
    const normalizedHint = normalizeAreaLookup2(hint);
    if (normalizedHint == null) {
      return false;
    }
    return normalizedEntityId?.includes(normalizedHint) || normalizedFriendlyName?.includes(normalizedHint);
  });
}
function collectCurrentAreaCandidateValues(state, attributes4) {
  const values4 = [];
  if (!isIgnoredCurrentAreaState(state)) {
    values4.push(state);
  }
  for (const key of CURRENT_AREA_ATTRIBUTE_KEYS) {
    values4.push(attributes4[key]);
  }
  return values4.flatMap((value) => collectCandidateValues(value, 0));
}
function collectCandidateValues(value, depth) {
  if (value == null || depth > 2) {
    return [];
  }
  if (typeof value === "string" || typeof value === "number" || typeof value === "bigint") {
    return [value];
  }
  if (Array.isArray(value)) {
    return value.flatMap((entry) => collectCandidateValues(entry, depth + 1));
  }
  if (typeof value === "object") {
    const record = value;
    const prioritizedKeys = [
      "areaId",
      "area_id",
      "roomId",
      "room_id",
      "segmentId",
      "segment_id",
      "id",
      "value",
      "name",
      "room_name",
      "segment_name",
      "area_name",
      "room",
      "segment",
      "area",
      "label"
    ];
    const candidates = prioritizedKeys.map((key) => record[key]).filter((entry) => entry != null);
    if (candidates.length > 0) {
      return candidates.flatMap((entry) => collectCandidateValues(entry, depth + 1));
    }
    return Object.values(record).flatMap(
      (entry) => collectCandidateValues(entry, depth + 1)
    );
  }
  return [];
}
function isIgnoredCurrentAreaState(value) {
  if (typeof value !== "string") {
    return false;
  }
  const normalized = value.trim().toLowerCase();
  return normalized === "" || normalized === "unknown" || normalized === "unavailable" || normalized === "none" || normalized === "null" || normalized === "off" || normalized === "false";
}
function normalizeAreaLookup2(value) {
  if (value == null) {
    return void 0;
  }
  const normalized = value.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
  return normalized.length > 0 ? normalized : void 0;
}

// src/matter/endpoints/legacy/vacuum/behaviors/vacuum-start-action.ts
var DEFAULT_START_ACTION = { action: "vacuum.start" };
function resolveVacuumStartAction(agent) {
  try {
    const serviceArea = agent.get(
      VacuumServiceAreaServer
    );
    const debugSnapshot = serviceArea.getSelectionDebugSnapshot();
    const effectiveSelectedAreas = debugSnapshot.selectedAreasFromState.length > 0 ? debugSnapshot.selectedAreasFromState : debugSnapshot.storedSelectedAreas;
    const selectedAreasAction = serviceArea.getSelectedAreasAction();
    if (selectedAreasAction == null) {
      console.debug(
        `VacuumStartAction using fallback vacuum.start (no selected service areas) snapshot=${JSON.stringify(debugSnapshot)}`
      );
      return DEFAULT_START_ACTION;
    }
    console.debug(
      `VacuumStartAction using selected service areas ${JSON.stringify(effectiveSelectedAreas)}`
    );
    return selectedAreasAction;
  } catch {
    console.debug(
      "VacuumStartAction using fallback vacuum.start (ServiceArea behavior unavailable)"
    );
    return DEFAULT_START_ACTION;
  }
}

// src/matter/endpoints/legacy/vacuum/behaviors/vacuum-rvc-run-mode-server.ts
var VacuumRvcRunModeServer = RvcRunModeServer({
  getCurrentMode: (entity) => [VacuumState.cleaning].includes(entity.state) ? 1 /* Cleaning */ : 0 /* Idle */,
  getSupportedModes: () => [
    {
      label: "Idle",
      mode: 0 /* Idle */,
      modeTags: [{ value: RvcRunMode.ModeTag.Idle }]
    },
    {
      label: "Cleaning",
      mode: 1 /* Cleaning */,
      modeTags: [{ value: RvcRunMode.ModeTag.Cleaning }]
    }
  ],
  start: (_, agent) => resolveVacuumStartAction(agent),
  returnToBase: () => ({ action: "vacuum.return_to_base" }),
  pause: (_, agent) => {
    const supportedFeatures = agent.get(HomeAssistantEntityBehavior).entity.state.attributes.supported_features ?? 0;
    if (testBit(supportedFeatures, VacuumDeviceFeature.PAUSE)) {
      return { action: "vacuum.pause" };
    }
    return { action: "vacuum.stop" };
  }
});

// src/matter/endpoints/legacy/vacuum/behaviors/vacuum-on-off-server.ts
var VacuumOnOffServer = OnOffServer({
  isOn: (_, agent) => agent.get(VacuumRvcRunModeServer).state.currentMode === 1 /* Cleaning */,
  turnOn: (_, agent) => resolveVacuumStartAction(agent),
  turnOff: () => ({ action: "vacuum.stop" })
}).with();

// src/matter/endpoints/legacy/vacuum/behaviors/vacuum-rvc-operational-state-server.ts
import { RvcOperationalState as RvcOperationalState3 } from "@matter/main/clusters";

// src/matter/behaviors/rvc-operational-state-server.ts
import { RvcOperationalStateServer as Base20 } from "@matter/main/behaviors/rvc-operational-state";
import { RvcOperationalState as RvcOperationalState2 } from "@matter/main/clusters/rvc-operational-state";
var OperationalState = RvcOperationalState2.OperationalState;
var ErrorState = RvcOperationalState2.ErrorState;
var RvcOperationalStateServerBase = class extends Base20 {
  async initialize() {
    const homeAssistant = await this.agent.load(HomeAssistantEntityBehavior);
    this.update(homeAssistant.entity);
    this.reactTo(homeAssistant.onChange, this.update);
    await super.initialize();
  }
  update(entity) {
    const operationalState = this.state.config.getOperationalState(
      entity.state,
      this.agent
    );
    const operationalStateList = Object.values(OperationalState).filter((id) => !Number.isNaN(+id)).map((id) => ({
      operationalStateId: id
    }));
    applyPatchState(this.state, {
      operationalState,
      operationalStateList,
      operationalError: {
        errorStateId: operationalState === OperationalState.Error ? ErrorState.Stuck : ErrorState.NoError
      }
    });
  }
  pause() {
    const homeAssistant = this.agent.get(HomeAssistantEntityBehavior);
    homeAssistant.callAction(this.state.config.pause(void 0, this.agent));
    return {
      commandResponseState: {
        errorStateId: ErrorState.NoError
      }
    };
  }
  resume() {
    const homeAssistant = this.agent.get(HomeAssistantEntityBehavior);
    homeAssistant.callAction(this.state.config.resume(void 0, this.agent));
    return {
      commandResponseState: {
        errorStateId: ErrorState.NoError
      }
    };
  }
};
((RvcOperationalStateServerBase2) => {
  class State extends Base20.State {
    config;
  }
  RvcOperationalStateServerBase2.State = State;
})(RvcOperationalStateServerBase || (RvcOperationalStateServerBase = {}));
function RvcOperationalStateServer(config6) {
  return RvcOperationalStateServerBase.set({ config: config6 });
}

// src/matter/endpoints/legacy/vacuum/behaviors/vacuum-rvc-operational-state-server.ts
var CLEANING_MOP_HINTS = [
  "cleaning_mop",
  "mop_cleaning",
  "washing_mop",
  "washing_the_mop",
  "washing_the_mop_pad",
  "mop_washing",
  "mop_washing_in_progress",
  "mop_wash_in_progress",
  "washing_mop_pad",
  "mop_pad_washing",
  "mop_pad_cleaning",
  "wash_mop",
  "wash_mop_pad",
  "mop_wash",
  "washing",
  "mop_wash_pause",
  "mop_washing_pause",
  "mop_cleaning_paused",
  "self_clean",
  "self_cleaning",
  "auto_wash",
  "auto_washing",
  "dock_wash",
  "mopwash",
  "lavando_mopa",
  "lavando_la_mopa",
  "lavado_mopa",
  "lavado_de_mopa",
  "limpiando_mopa",
  "limpieza_mopa",
  "lavando"
];
var FILLING_WATER_HINTS = [
  "filling_water_tank",
  "filling_water",
  "water_tank_filling",
  "fill_water",
  "water_refill",
  "filling",
  "rellenando",
  "llenando"
];
var EMPTYING_DUST_HINTS = [
  "emptying_dust_bin",
  "emptying_dust",
  "auto_emptying",
  "auto_empty_dust",
  "emptying_dock_dust",
  "collecting_dust",
  "dust_collecting",
  "dust_collection_in_progress",
  "emptying",
  "auto_empty",
  "dust_collection",
  "auto_dust_collection",
  "dustbin_emptying",
  "vaciando",
  "vaciado"
];
var UPDATING_MAPS_HINTS = [
  "updating_maps",
  "map_update",
  "mapping",
  "building_map",
  "actualizando_mapa",
  "mapeando"
];
var CHARGING_HINTS = [
  "charging",
  "charge",
  "docking_charge",
  "dock_charging",
  "drying",
  "drying_mop",
  "mop_drying",
  "mop_dry",
  "dry",
  "hot_air_drying",
  "secando_mopa",
  "secando_la_mopa",
  "secado_mopa",
  "secado_de_mopa",
  "secando",
  "cargando"
];
var SEEKING_CHARGER_HINTS = [
  "returning",
  "returning_home",
  "go_to_dock",
  "seeking_charger",
  "going_to_charge",
  "volviendo_a_base",
  "retornando"
];
var RUNNING_HINTS = [
  "cleaning",
  "running",
  "working",
  "spot_cleaning",
  "zone_cleaning",
  "segment_cleaning",
  "sweeping",
  "limpiando",
  "en_limpieza"
];
var PAUSED_HINTS = ["paused", "idle", "standby", "pausado", "en_espera"];
var DOCKED_HINTS = ["docked", "on_dock", "base", "en_base"];
var ERROR_HINTS = ["error", "fault", "stuck", "atascado"];
var OPERATIONAL_HINT_KEY_PARTS = [
  "status",
  "state",
  "mode",
  "task",
  "job",
  "phase",
  "activity",
  "action",
  "operation",
  "mop",
  "dock",
  "charge",
  "dust",
  "water",
  "clean",
  "wash",
  "dry",
  "empty"
];
var RELATED_OPERATIONAL_ENTITY_DOMAINS = /* @__PURE__ */ new Set([
  "sensor",
  "binary_sensor",
  "select",
  "text"
]);
var RELATED_OPERATIONAL_ENTITY_HINTS = [
  "status",
  "estado",
  "task",
  "phase",
  "job",
  "operation",
  "activity",
  "vacuum",
  "aspir",
  "clean",
  "limpi",
  "mop",
  "mopa",
  "wash",
  "lav",
  "dry",
  "sec",
  "dust",
  "polvo",
  "empty",
  "vaci",
  "dock",
  "base"
];
var COMPANION_DRYING_HINTS = [
  "dry",
  "drying",
  "mop_dry",
  "secad",
  "secando",
  "hot_air"
];
var COMPANION_WASHING_HINTS = [
  "wash",
  "washing",
  "mop_wash",
  "mop_clean",
  "self_clean",
  "lav",
  "mopa"
];
var COMPANION_DUST_HINTS = [
  "dust",
  "empty",
  "collect",
  "vaci",
  "polvo"
];
var COMPANION_FILLING_HINTS = [
  "fill",
  "filling",
  "water",
  "tank",
  "rellen",
  "llen"
];
var COMPANION_UPDATING_HINTS = ["map", "mapping", "actualiz"];
var VacuumRvcOperationalStateServer = RvcOperationalStateServer({
  getOperationalState(entity, agent) {
    const primaryHints = collectOperationalStateHints(
      entity.state,
      entity.attributes
    );
    const primaryState = resolveOperationalStateFromHints(primaryHints);
    if (primaryState != null) {
      return primaryState;
    }
    const relatedHints = collectRelatedOperationalStateHints(agent);
    const relatedState = resolveOperationalStateFromHints(relatedHints);
    if (relatedState != null) {
      return relatedState;
    }
    const state = entity.state;
    switch (state) {
      case VacuumState.docked:
        return RvcOperationalState3.OperationalState.Docked;
      case VacuumState.returning:
        return RvcOperationalState3.OperationalState.SeekingCharger;
      case VacuumState.cleaning:
        return RvcOperationalState3.OperationalState.Running;
      case VacuumState.paused:
      case VacuumState.idle:
        return RvcOperationalState3.OperationalState.Paused;
      default:
        return RvcOperationalState3.OperationalState.Error;
    }
  },
  pause: (_, agent) => {
    const supportedFeatures = agent.get(HomeAssistantEntityBehavior).entity.state.attributes.supported_features ?? 0;
    if (testBit(supportedFeatures, VacuumDeviceFeature.PAUSE)) {
      return { action: "vacuum.pause" };
    }
    return { action: "vacuum.stop" };
  },
  resume: (_, agent) => resolveVacuumStartAction(agent)
});
function resolveOperationalStateFromHints(hints) {
  if (hasHint(hints, CLEANING_MOP_HINTS)) {
    return RvcOperationalState3.OperationalState.CleaningMop;
  }
  if (hasHint(hints, FILLING_WATER_HINTS)) {
    return RvcOperationalState3.OperationalState.FillingWaterTank;
  }
  if (hasHint(hints, EMPTYING_DUST_HINTS)) {
    return RvcOperationalState3.OperationalState.EmptyingDustBin;
  }
  if (hasHint(hints, UPDATING_MAPS_HINTS)) {
    return RvcOperationalState3.OperationalState.UpdatingMaps;
  }
  if (hasHint(hints, CHARGING_HINTS)) {
    return RvcOperationalState3.OperationalState.Charging;
  }
  if (hasHint(hints, SEEKING_CHARGER_HINTS)) {
    return RvcOperationalState3.OperationalState.SeekingCharger;
  }
  if (hasHint(hints, RUNNING_HINTS)) {
    return RvcOperationalState3.OperationalState.Running;
  }
  if (hasHint(hints, PAUSED_HINTS)) {
    return RvcOperationalState3.OperationalState.Paused;
  }
  if (hasHint(hints, DOCKED_HINTS)) {
    return RvcOperationalState3.OperationalState.Docked;
  }
  if (hasHint(hints, ERROR_HINTS)) {
    return RvcOperationalState3.OperationalState.Error;
  }
  return void 0;
}
function hasHint(values4, hints) {
  return values4.some((value) => hints.some((hint) => hintMatches(value, hint)));
}
function hintMatches(value, hint) {
  if (value === hint || value.includes(hint)) {
    return true;
  }
  const valueTokens = value.split("_").filter(Boolean);
  const hintTokens = hint.split("_").filter(Boolean);
  if (valueTokens.length === 0 || hintTokens.length <= 1) {
    return false;
  }
  return hintTokens.every((token) => valueTokens.includes(token));
}
function collectOperationalStateHints(entityState, attributes4) {
  const hints = /* @__PURE__ */ new Set();
  const add = (value) => {
    addHint(hints, value);
  };
  add(entityState);
  const vacuumAttributes = attributes4;
  add(vacuumAttributes.status);
  add(attributes4.state);
  add(attributes4.activity);
  add(attributes4.operation);
  add(attributes4.task_status);
  add(attributes4.cleaning_state);
  add(attributes4.cleaning_mode);
  add(attributes4.dock_state);
  add(attributes4.charging_state);
  add(attributes4.working_state);
  add(attributes4.status_description);
  add(attributes4.vacuum_status);
  add(attributes4.state_text);
  add(attributes4.status_text);
  add(attributes4.current_task);
  add(attributes4.task_phase);
  for (const [key, value] of Object.entries(attributes4)) {
    const normalizedKey = normalizeHint(key);
    if (normalizedKey == null || !OPERATIONAL_HINT_KEY_PARTS.some((part) => normalizedKey.includes(part))) {
      continue;
    }
    if (typeof value === "boolean") {
      if (value) {
        add(normalizedKey);
      }
      continue;
    }
    if (typeof value === "string") {
      add(value);
      continue;
    }
    if (Array.isArray(value)) {
      for (const item of value) {
        add(item);
      }
      continue;
    }
    if (value != null && typeof value === "object") {
      for (const nestedValue of Object.values(value)) {
        add(nestedValue);
      }
    }
  }
  return [...hints];
}
function collectRelatedOperationalStateHints(agent) {
  const hints = /* @__PURE__ */ new Set();
  const currentEntity = agent.get(HomeAssistantEntityBehavior).entity;
  const currentEntityId = currentEntity.entity_id;
  const deviceId = currentEntity.deviceRegistry?.id ?? currentEntity.registry?.device_id;
  if (deviceId == null) {
    return [];
  }
  let registry;
  try {
    registry = agent.env.get(HomeAssistantRegistry);
  } catch {
    return [];
  }
  for (const relatedEntity of Object.values(registry.entities)) {
    if (relatedEntity.device_id !== deviceId || relatedEntity.entity_id === currentEntityId) {
      continue;
    }
    const [domain] = relatedEntity.entity_id.split(".");
    if (!domain || !RELATED_OPERATIONAL_ENTITY_DOMAINS.has(domain)) {
      continue;
    }
    const relatedState = registry.states[relatedEntity.entity_id];
    if (relatedState == null) {
      continue;
    }
    if (!isLikelyOperationalCompanionEntity(
      relatedEntity.entity_id,
      relatedState.attributes?.friendly_name
    )) {
      continue;
    }
    addHint(hints, relatedState.state);
    const derivedHint = deriveOperationalHintFromCompanionEntity(
      relatedEntity.entity_id,
      relatedState.attributes?.friendly_name,
      relatedState.state
    );
    if (derivedHint != null) {
      addHint(hints, derivedHint);
    }
    collectHintValuesFromAttributes(hints, asRecord4(relatedState.attributes));
  }
  return [...hints];
}
function isLikelyOperationalCompanionEntity(entityId, friendlyName) {
  const normalizedEntityId = normalizeHint(entityId);
  const normalizedFriendlyName = normalizeHint(friendlyName);
  return RELATED_OPERATIONAL_ENTITY_HINTS.some((hint) => {
    return normalizedEntityId?.includes(hint) || normalizedFriendlyName?.includes(hint);
  });
}
function collectHintValuesFromAttributes(hints, attributes4) {
  for (const [key, value] of Object.entries(attributes4)) {
    const normalizedKey = normalizeHint(key);
    if (normalizedKey == null || !OPERATIONAL_HINT_KEY_PARTS.some((part) => normalizedKey.includes(part))) {
      continue;
    }
    if (typeof value === "boolean") {
      if (value) {
        addHint(hints, normalizedKey);
      }
      continue;
    }
    if (typeof value === "string") {
      addHint(hints, value);
      continue;
    }
  }
}
function deriveOperationalHintFromCompanionEntity(entityId, friendlyName, state) {
  if (!isActiveCompanionState(state)) {
    return void 0;
  }
  const normalizedEntityId = normalizeHint(entityId) ?? "";
  const normalizedFriendlyName = typeof friendlyName === "string" ? normalizeHint(friendlyName) ?? "" : "";
  const source = `${normalizedEntityId}_${normalizedFriendlyName}`;
  if (containsAnyHint(source, COMPANION_WASHING_HINTS)) {
    return "washing_mop";
  }
  if (containsAnyHint(source, COMPANION_DRYING_HINTS)) {
    return "drying_mop";
  }
  if (containsAnyHint(source, COMPANION_DUST_HINTS)) {
    return "emptying_dust_bin";
  }
  if (containsAnyHint(source, COMPANION_FILLING_HINTS)) {
    return "filling_water_tank";
  }
  if (containsAnyHint(source, COMPANION_UPDATING_HINTS)) {
    return "updating_maps";
  }
  return void 0;
}
function isActiveCompanionState(state) {
  if (typeof state === "boolean") {
    return state;
  }
  if (typeof state === "number") {
    return state !== 0;
  }
  const normalized = normalizeHint(state);
  if (normalized == null) {
    return false;
  }
  if (normalized === "off" || normalized === "false" || normalized === "idle" || normalized === "standby" || normalized === "unknown" || normalized === "unavailable" || normalized === "none" || normalized === "null") {
    return false;
  }
  return normalized === "on" || normalized === "true" || normalized === "running" || normalized === "active" || normalized === "cleaning" || normalized === "washing" || normalized === "drying" || normalized === "filling" || normalized === "emptying" || normalized === "collecting" || normalized.includes("in_progress");
}
function containsAnyHint(source, hints) {
  return hints.some((hint) => source.includes(hint));
}
function addHint(hints, value) {
  const normalized = normalizeHint(value);
  if (normalized != null) {
    hints.add(normalized);
  }
}
function asRecord4(value) {
  if (value == null || typeof value !== "object") {
    return {};
  }
  return value;
}
function normalizeHint(value) {
  if (typeof value !== "string") {
    return void 0;
  }
  const normalized = value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
  return normalized.length > 0 ? normalized : void 0;
}

// src/matter/endpoints/legacy/vacuum/index.ts
var VacuumEndpointType = RoboticVacuumCleanerDevice.with(
  BasicInformationServer,
  VacuumIdentifyServer,
  HomeAssistantEntityBehavior,
  VacuumRvcOperationalStateServer,
  VacuumRvcRunModeServer
);
function VacuumDevice(homeAssistantEntity) {
  if (homeAssistantEntity.entity.state === void 0) {
    return void 0;
  }
  const attributes4 = homeAssistantEntity.entity.state.attributes;
  const supportedFeatures = attributes4.supported_features ?? 0;
  let device = VacuumEndpointType.set({ homeAssistantEntity });
  const supportsCleanMode = testBit(supportedFeatures, VacuumDeviceFeature.SEND_COMMAND) || attributes4.cleaning_mode != null || attributes4.cleaning_mode_list != null || attributes4.clean_mode != null || attributes4.clean_mode_list != null || attributes4.mop_mode != null || attributes4.mop_mode_list != null || attributes4.vacuum_mode != null || attributes4.vacuum_mode_list != null || attributes4.matter_clean_mode_entity != null;
  if (supportsCleanMode) {
    device = device.with(VacuumRvcCleanModeServer);
  }
  const serviceAreaData = parseVacuumServiceAreaData(attributes4);
  const VacuumServiceAreaServer2 = createVacuumServiceAreaServer();
  if (serviceAreaData != null && VacuumServiceAreaServer2 != null) {
    device = device.with(VacuumServiceAreaServer2);
  }
  if (testBit(supportedFeatures, VacuumDeviceFeature.START)) {
    device = device.with(VacuumOnOffServer);
  }
  return device;
}

// src/matter/endpoints/legacy/create-legacy-endpoint-type.ts
function createLegacyEndpointType(entity) {
  const domain = entity.entity_id.split(".")[0];
  const factory = deviceCtrs[domain];
  if (!factory) {
    return void 0;
  }
  return factory({ entity });
}
var deviceCtrs = {
  light: LightDevice,
  switch: SwitchDevice,
  lock: LockDevice,
  fan: FanDevice,
  camera: CameraDevice,
  binary_sensor: BinarySensorDevice,
  sensor: SensorDevice,
  cover: CoverDevice,
  climate: ClimateDevice,
  input_boolean: SwitchDevice,
  input_button: InputButtonDevice,
  button: ButtonDevice,
  automation: AutomationDevice,
  script: ScriptDevice,
  scene: SceneDevice,
  media_player: MediaPlayerDevice,
  humidifier: HumidifierDevice,
  vacuum: VacuumDevice
};

// src/matter/endpoints/legacy/legacy-endpoint.ts
var LegacyEndpoint = class _LegacyEndpoint extends EntityEndpoint {
  static async create(registry, entityId) {
    const deviceRegistry = registry.deviceOf(entityId);
    const state = registry.initialState(entityId);
    const entity = registry.entity(entityId);
    const payload = {
      entity_id: entityId,
      state,
      registry: entity,
      deviceRegistry
    };
    const type = createLegacyEndpointType(payload);
    if (!type) {
      return;
    }
    return new _LegacyEndpoint(type, entityId);
  }
  constructor(type, entityId) {
    super(type, entityId);
    this.flushUpdate = debounce2(this.flushPendingUpdate.bind(this), 50);
  }
  lastState;
  flushUpdate;
  async delete() {
    this.flushUpdate.clear();
    await super.delete();
  }
  async updateStates(states) {
    const state = states[this.entityId] ?? {};
    if (JSON.stringify(state) === JSON.stringify(this.lastState ?? {})) {
      return;
    }
    this.lastState = state;
    this.flushUpdate(state);
  }
  async flushPendingUpdate(state) {
    try {
      await this.construction.ready;
    } catch {
      return;
    }
    try {
      const current = this.stateOf(HomeAssistantEntityBehavior).entity;
      await this.setStateOf(HomeAssistantEntityBehavior, {
        entity: { ...current, state }
      });
    } catch (error) {
      if (error instanceof TransactionDestroyedError || error instanceof DestroyedDependencyError) {
        return;
      }
      throw error;
    }
  }
};

// src/services/home-assistant/api/subscribe-entities.ts
import crypto4 from "node:crypto";
import {
  getCollection
} from "home-assistant-js-websocket";
import { atLeastHaVersion } from "home-assistant-js-websocket/dist/util.js";
function processEvent(store, updates) {
  const state = { ...store.state };
  if (updates.a) {
    for (const entityId in updates.a) {
      const newState = updates.a[entityId];
      const last_changed = new Date(newState.lc * 1e3).toISOString();
      state[entityId] = {
        entity_id: entityId,
        state: newState.s,
        attributes: newState.a,
        context: typeof newState.c === "string" ? { id: newState.c, parent_id: null, user_id: null } : newState.c,
        last_changed,
        last_updated: newState.lu ? new Date(newState.lu * 1e3).toISOString() : last_changed
      };
    }
  }
  if (updates.r) {
    for (const entityId of updates.r) {
      delete state[entityId];
    }
  }
  if (updates.c) {
    for (const entityId in updates.c) {
      let entityState = state[entityId];
      if (!entityState) {
        console.warn("Received state update for unknown entity", entityId);
        continue;
      }
      entityState = { ...entityState };
      const { "+": toAdd, "-": toRemove } = updates.c[entityId];
      const attributesChanged = toAdd?.a || toRemove?.a;
      const attributes4 = attributesChanged ? { ...entityState.attributes } : entityState.attributes;
      if (toAdd) {
        if (toAdd.s !== void 0) {
          entityState.state = toAdd.s;
        }
        if (toAdd.c) {
          if (typeof toAdd.c === "string") {
            entityState.context = { ...entityState.context, id: toAdd.c };
          } else {
            entityState.context = { ...entityState.context, ...toAdd.c };
          }
        }
        if (toAdd.lc) {
          entityState.last_updated = entityState.last_changed = new Date(
            toAdd.lc * 1e3
          ).toISOString();
        } else if (toAdd.lu) {
          entityState.last_updated = new Date(toAdd.lu * 1e3).toISOString();
        }
        if (toAdd.a) {
          Object.assign(attributes4, toAdd.a);
        }
      }
      if (toRemove?.a) {
        for (const key of toRemove.a) {
          delete attributes4[key];
        }
      }
      if (attributesChanged) {
        entityState.attributes = attributes4;
      }
      state[entityId] = entityState;
    }
  }
  store.setState(state, true);
}
var subscribeUpdates = (conn, store, entityIds) => {
  if (entityIds && entityIds.length === 0) {
    return Promise.resolve(async () => {
    });
  }
  return conn.subscribeMessage((ev) => processEvent(store, ev), {
    type: "subscribe_entities",
    entity_ids: entityIds
  });
};
function createEntitiesHash(entityIds) {
  return crypto4.createHash("sha256").update(entityIds.join(",")).digest("hex").substring(0, 16);
}
var entitiesColl = (conn, entityIds) => {
  if (atLeastHaVersion(conn.haVersion, 2022, 4, 0)) {
    return getCollection(
      conn,
      `_ent_${createEntitiesHash(entityIds)}`,
      void 0,
      (conn2, store) => subscribeUpdates(conn2, store, entityIds)
    );
  }
  throw new Error(`Home Assistant version ${conn.haVersion} is not supported`);
};
var subscribeEntities = (conn, onChange, entityIds) => entitiesColl(conn, entityIds).subscribe(onChange);

// src/services/bridges/bridge-endpoint-manager.ts
var BridgeEndpointManager = class extends Service {
  constructor(client, registry, log) {
    super("BridgeEndpointManager");
    this.client = client;
    this.registry = registry;
    this.log = log;
    this.root = new AggregatorEndpoint2("aggregator");
  }
  root;
  entityIds = [];
  unsubscribe;
  async dispose() {
    this.stopObserving();
  }
  async startObserving() {
    this.stopObserving();
    if (!this.entityIds.length) {
      return;
    }
    this.unsubscribe = subscribeEntities(
      this.client.connection,
      (e) => this.updateStates(e),
      this.entityIds
    );
  }
  stopObserving() {
    this.unsubscribe?.();
    this.unsubscribe = void 0;
  }
  async refreshDevices() {
    this.registry.refresh();
    const endpoints = this.root.parts.map((p) => p);
    this.entityIds = this.registry.entityIds;
    const existingEndpoints = [];
    for (const endpoint of endpoints) {
      if (!this.entityIds.includes(endpoint.entityId)) {
        await endpoint.delete();
      } else {
        existingEndpoints.push(endpoint);
      }
    }
    for (const entityId of this.entityIds) {
      let endpoint = existingEndpoints.find((e) => e.entityId === entityId);
      if (!endpoint) {
        try {
          endpoint = await LegacyEndpoint.create(this.registry, entityId);
        } catch (e) {
          if (e instanceof InvalidDeviceError) {
            this.log.warn(
              `Invalid device detected. Entity: ${entityId} Reason: ${e.message}`
            );
            continue;
          } else {
            this.log.error(
              `Failed to create device ${entityId}. Error: ${e?.toString()}`
            );
            throw e;
          }
        }
        if (endpoint) {
          await this.root.add(endpoint);
        }
      }
    }
    if (this.unsubscribe) {
      this.startObserving();
    }
  }
  async updateStates(states) {
    const endpoints = this.root.parts.map((p) => p);
    for (const endpoint of endpoints) {
      await endpoint.updateStates(states);
    }
  }
};

// src/services/bridges/bridge-registry.ts
import { keys as keys2, pickBy as pickBy2, values as values3 } from "lodash-es";

// src/services/bridges/matcher/matches-entity-filter.ts
function testMatchers(matcher, device, entity) {
  return matcher.some((matcher2) => testMatcher(matcher2, device, entity));
}
function testMatcher(matcher, device, entity) {
  switch (matcher.type) {
    case "domain":
      return entity.entity_id.split(".")[0] === matcher.value;
    case "label":
      return !!entity?.labels && entity?.labels.includes(matcher.value);
    case "entity_category":
      return entity?.entity_category === matcher.value;
    case "platform":
      return entity?.platform === matcher.value;
    case "pattern":
      return patternToRegex(matcher.value).test(entity.entity_id);
    case "area":
      return (entity?.area_id ?? device?.area_id) === matcher.value;
  }
  return false;
}
function escapeRegExp2(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
function patternToRegex(pattern) {
  const regex = pattern.split("*").map((part) => escapeRegExp2(part)).join(".*");
  return new RegExp(`^${regex}$`);
}

// src/services/bridges/bridge-registry.ts
var BridgeRegistry = class {
  constructor(registry, dataProvider) {
    this.registry = registry;
    this.dataProvider = dataProvider;
    this.refresh();
  }
  get entityIds() {
    return keys2(this._entities);
  }
  _devices = {};
  _entities = {};
  _states = {};
  deviceOf(entityId) {
    const entity = this._entities[entityId];
    return this._devices[entity.device_id];
  }
  entity(entityId) {
    return this._entities[entityId];
  }
  initialState(entityId) {
    return this._states[entityId];
  }
  refresh() {
    this._entities = pickBy2(this.registry.entities, (entity) => {
      const device = this.registry.devices[entity.device_id];
      const isHidden = this.isHiddenOrDisabled(
        this.dataProvider.featureFlags ?? {},
        entity
      );
      const matchesFilter = this.matchesFilter(
        this.dataProvider.filter,
        entity,
        device
      );
      return !isHidden && matchesFilter;
    });
    this._states = pickBy2(
      this.registry.states,
      (e) => !!this._entities[e.entity_id]
    );
    this._devices = pickBy2(
      this.registry.devices,
      (d) => values3(this._entities).map((e) => e.device_id).some((id) => d.id === id)
    );
  }
  isHiddenOrDisabled(featureFlags, entity) {
    const isDisabled = entity.disabled_by != null;
    const isHidden = !featureFlags?.includeHiddenEntities && entity.hidden_by != null;
    return isDisabled || isHidden;
  }
  matchesFilter(filter, entity, device) {
    if (filter.include.length > 0 && !testMatchers(filter.include, device, entity)) {
      return false;
    }
    if (filter.exclude.length > 0 && testMatchers(filter.exclude, device, entity)) {
      return false;
    }
    return true;
  }
};

// src/core/ioc/environment-base.ts
import { Environment as Environment2 } from "@matter/main";
var EnvironmentBase = class extends Environment2 {
  log;
  services = [];
  constructor(options) {
    super(options.id, options.parent);
    this.log = options.log;
  }
  async load(type) {
    const instance = this.get(type);
    if ("construction" in instance) {
      await instance.construction;
    }
    return instance;
  }
  set(type, instance) {
    if (this.isService(instance)) {
      this.services.push(instance);
    }
    return super.set(type, instance);
  }
  async dispose() {
    while (this.services.length > 0) {
      const service = this.services.pop();
      this.log.info(`Disposing ${service.serviceName}`);
      await service.dispose?.();
    }
  }
  isService(instance) {
    return "serviceName" in instance;
  }
};

// src/core/ioc/bridge-environment.ts
var BridgeEnvironment = class _BridgeEnvironment extends EnvironmentBase {
  static async create(parent, initialData) {
    const bridge = new _BridgeEnvironment(parent, initialData);
    await bridge.construction;
    return bridge;
  }
  construction;
  endpointManagerLogger;
  constructor(parent, initialData) {
    const loggerService = parent.get(LoggerService);
    const log = loggerService.get(`BridgeEnvironment / ${initialData.id}`);
    super({ id: initialData.id, parent, log });
    this.endpointManagerLogger = loggerService.get("BridgeEndpointManager");
    this.construction = this.init();
    this.set(BridgeDataProvider, new BridgeDataProvider(initialData));
  }
  async init() {
    const homeAssistantRegistry = await this.load(HomeAssistantRegistry);
    const dataProvider = this.get(BridgeDataProvider);
    const bridgeRegistry = new BridgeRegistry(homeAssistantRegistry, dataProvider);
    applyAutoDeviceIdentityFromSingleDevice(
      homeAssistantRegistry,
      bridgeRegistry,
      dataProvider
    );
    this.set(
      BridgeRegistry,
      bridgeRegistry
    );
    this.set(
      BridgeEndpointManager,
      new BridgeEndpointManager(
        await this.load(HomeAssistantClient),
        this.get(BridgeRegistry),
        this.endpointManagerLogger
      )
    );
  }
};
function applyAutoDeviceIdentityFromSingleDevice(homeAssistantRegistry, bridgeRegistry, dataProvider) {
  const exposedEntityIds = bridgeRegistry.entityIds;
  if (exposedEntityIds.length === 0) {
    return;
  }
  const exposedDeviceIds = Array.from(
    new Set(
      exposedEntityIds.map((entityId) => bridgeRegistry.entity(entityId)?.device_id).filter((deviceId2) => deviceId2 != null)
    )
  );
  if (exposedDeviceIds.length !== 1) {
    return;
  }
  const primaryEntityId = selectPrimaryEntityId(exposedEntityIds);
  if (primaryEntityId == null) {
    return;
  }
  const primaryEntity = bridgeRegistry.entity(primaryEntityId);
  if (primaryEntity == null) {
    return;
  }
  const deviceId = exposedDeviceIds[0];
  const device = homeAssistantRegistry.devices[deviceId];
  const state = homeAssistantRegistry.states[primaryEntityId];
  const attributes4 = asRecord5(state?.attributes);
  const relatedSoftwareVersion = resolveRelatedSoftwareVersion(
    homeAssistantRegistry,
    deviceId,
    primaryEntityId
  );
  const relatedSerialNumber = resolveRelatedSerialNumber(
    homeAssistantRegistry,
    deviceId,
    primaryEntityId
  );
  const vendorName = firstNonEmpty2(
    toStringValue6(attributes4.matter_vendor_name),
    toStringValue6(attributes4.vendor_name),
    toStringValue6(attributes4.manufacturer),
    toStringValue6(attributes4.brand),
    device?.manufacturer,
    device?.default_manufacturer
  );
  const productName = resolveProductName2(device, attributes4, vendorName);
  const productLabel = firstNonEmpty2(
    toStringValue6(attributes4.matter_product_label),
    toStringValue6(attributes4.product_label),
    toStringValue6(attributes4.friendly_name),
    device?.name_by_user,
    device?.name,
    productName
  );
  const serialNumber = firstNonEmpty2(
    toSerialStringValue2(attributes4.serial_number),
    toSerialStringValue2(attributes4.serialNumber),
    toSerialStringValue2(attributes4.device_serial_number),
    toSerialStringValue2(attributes4.sn),
    toSerialStringValue2(device?.serial_number),
    relatedSerialNumber
  );
  const softwareVersionString = firstNonEmpty2(
    toVersionStringValue2(attributes4.sw_version),
    toVersionStringValue2(attributes4.software_version),
    toVersionStringValue2(attributes4.firmware_version),
    relatedSoftwareVersion,
    toVersionStringValue2(device?.sw_version),
    toFirmwareLikeVersionValue2(attributes4.version)
  );
  dataProvider.mergeDeviceIdentityDefaults({
    vendorName,
    productName,
    productLabel,
    serialNumber,
    softwareVersionString
  });
}
function selectPrimaryEntityId(entityIds) {
  const preferredDomains = [
    "vacuum",
    "climate",
    "light",
    "cover",
    "fan",
    "switch",
    "lock",
    "media_player"
  ];
  for (const domain of preferredDomains) {
    const preferred = entityIds.find((entityId) => entityId.startsWith(`${domain}.`));
    if (preferred != null) {
      return preferred;
    }
  }
  return entityIds[0];
}
function resolveProductName2(device, attributes4, vendorName) {
  const humanName = stripVendorPrefix2(
    firstNonEmpty2(
      toStringValue6(attributes4.friendly_name),
      device?.name_by_user,
      device?.name
    ),
    vendorName
  );
  const modelName = firstNonEmpty2(
    toStringValue6(attributes4.matter_product_name),
    toStringValue6(attributes4.product_name),
    toStringValue6(attributes4.model_name),
    toStringValue6(attributes4.model),
    toStringValue6(attributes4.device_model),
    device?.model,
    device?.default_model,
    device?.model_id
  );
  if (modelName == null) {
    return humanName;
  }
  if (isLikelyOpaqueModelName2(modelName) && humanName != null) {
    return humanName;
  }
  return modelName;
}
function resolveRelatedSoftwareVersion(homeAssistantRegistry, deviceId, primaryEntityId) {
  for (const entity of Object.values(homeAssistantRegistry.entities)) {
    if (entity.device_id !== deviceId || entity.entity_id === primaryEntityId) {
      continue;
    }
    const state = homeAssistantRegistry.states[entity.entity_id];
    if (state == null) {
      continue;
    }
    const attributes4 = asRecord5(state.attributes);
    const [domain] = entity.entity_id.split(".");
    if (domain === "update") {
      const updateVersion = firstNonEmpty2(
        toVersionStringValue2(attributes4.installed_version),
        toVersionStringValue2(attributes4.latest_version),
        toVersionStringValue2(attributes4.current_version),
        toVersionStringValue2(state.state)
      );
      if (updateVersion != null) {
        return updateVersion;
      }
    }
    if (!isLikelySoftwareVersionEntity2(
      entity.entity_id,
      toStringValue6(attributes4.friendly_name)
    )) {
      continue;
    }
    const version = firstNonEmpty2(
      toVersionStringValue2(attributes4.sw_version),
      toVersionStringValue2(attributes4.software_version),
      toVersionStringValue2(attributes4.firmware_version),
      toFirmwareLikeVersionValue2(attributes4.version),
      toFirmwareLikeVersionValue2(state.state)
    );
    if (version != null) {
      return version;
    }
  }
  return void 0;
}
function resolveRelatedSerialNumber(homeAssistantRegistry, deviceId, primaryEntityId) {
  for (const entity of Object.values(homeAssistantRegistry.entities)) {
    if (entity.device_id !== deviceId || entity.entity_id === primaryEntityId) {
      continue;
    }
    const state = homeAssistantRegistry.states[entity.entity_id];
    if (state == null) {
      continue;
    }
    const attributes4 = asRecord5(state.attributes);
    if (!isLikelySerialEntity2(
      entity.entity_id,
      toStringValue6(attributes4.friendly_name)
    )) {
      continue;
    }
    const serial = firstNonEmpty2(
      toSerialStringValue2(attributes4.serial_number),
      toSerialStringValue2(attributes4.serialNumber),
      toSerialStringValue2(attributes4.device_serial_number),
      toSerialStringValue2(attributes4.sn),
      toSerialStringValue2(state.state)
    );
    if (serial != null) {
      return serial;
    }
  }
  return void 0;
}
function isLikelySoftwareVersionEntity2(entityId, friendlyName) {
  const normalized = `${entityId} ${friendlyName ?? ""}`.toLowerCase();
  return normalized.includes("firmware") || normalized.includes("software") || normalized.includes("version") || normalized.includes("versi") || normalized.includes("sw_version") || normalized.includes("fw_version");
}
function isLikelySerialEntity2(entityId, friendlyName) {
  const normalized = `${entityId} ${friendlyName ?? ""}`.toLowerCase();
  return normalized.includes("serial") || normalized.includes("serie") || normalized.includes("sn");
}
function asRecord5(value) {
  if (value == null || typeof value !== "object") {
    return {};
  }
  return value;
}
function toStringValue6(value) {
  if (typeof value !== "string") {
    return void 0;
  }
  const normalized = value.trim();
  return normalized.length > 0 ? normalized : void 0;
}
function toVersionStringValue2(value) {
  const normalized = toStringValue6(value);
  if (normalized == null) {
    return void 0;
  }
  if (!/[0-9]/.test(normalized)) {
    return void 0;
  }
  if (/^(unknown|unavailable|none|null|on|off)$/i.test(normalized)) {
    return void 0;
  }
  return normalized;
}
function toFirmwareLikeVersionValue2(value) {
  const normalized = toVersionStringValue2(value);
  if (normalized == null) {
    return void 0;
  }
  if (!/[._-]/.test(normalized)) {
    return void 0;
  }
  return normalized;
}
function toSerialStringValue2(value) {
  const normalized = toStringValue6(value);
  if (normalized == null) {
    return void 0;
  }
  if (/^(unknown|unavailable|none|null)$/i.test(normalized)) {
    return void 0;
  }
  if (normalized.length < 6) {
    return void 0;
  }
  return normalized;
}
function firstNonEmpty2(...values4) {
  for (const value of values4) {
    if (value != null && value.trim().length > 0) {
      return value;
    }
  }
  return void 0;
}
function stripVendorPrefix2(value, vendorName) {
  if (value == null) {
    return void 0;
  }
  const trimmed = value.trim();
  if (trimmed.length === 0) {
    return void 0;
  }
  const vendor = vendorName?.trim();
  if (vendor == null || vendor.length === 0) {
    return trimmed;
  }
  const prefixPattern = new RegExp(`^${escapeRegExp3(vendor)}[\\s\\-_:|,.]*`, "i");
  const stripped = trimmed.replace(prefixPattern, "").trim();
  return stripped.length > 0 ? stripped : trimmed;
}
function escapeRegExp3(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function isLikelyOpaqueModelName2(value) {
  const normalized = value.trim();
  if (normalized.length === 0) {
    return false;
  }
  return normalized.includes(".") || normalized.includes("_") || /[a-z]+\.[a-z]+/i.test(normalized) || /[a-z]{2,}\d{2,}/i.test(normalized);
}
var BridgeEnvironmentFactory = class extends BridgeFactory {
  constructor(parent) {
    super("BridgeEnvironmentFactory");
    this.parent = parent;
  }
  async create(initialData) {
    const env = await BridgeEnvironment.create(this.parent, initialData);
    class BridgeWithEnvironment extends Bridge {
      async dispose() {
        await super.dispose();
        await env.dispose();
      }
    }
    const bridge = new BridgeWithEnvironment(
      env,
      env.get(LoggerService),
      await env.load(BridgeDataProvider),
      await env.load(BridgeEndpointManager)
    );
    await bridge.initialize();
    return bridge;
  }
};

// src/core/ioc/app-environment.ts
var AppEnvironment = class _AppEnvironment extends EnvironmentBase {
  constructor(rootEnv, options) {
    const logger = rootEnv.get(LoggerService);
    super({
      id: "App",
      log: logger.get("AppContainer"),
      parent: rootEnv
    });
    this.options = options;
    this.construction = this.init();
  }
  static async create(rootEnv, options) {
    const app = new _AppEnvironment(rootEnv, options);
    await app.construction;
    return app;
  }
  construction;
  async init() {
    const logger = this.get(LoggerService);
    this.set(LoggerService, logger);
    this.set(AppStorage, new AppStorage(await this.load(StorageService2)));
    this.set(BridgeStorage, new BridgeStorage(await this.load(AppStorage)));
    this.set(
      HomeAssistantClient,
      new HomeAssistantClient(logger, this.options.homeAssistant)
    );
    this.set(
      HomeAssistantConfig,
      new HomeAssistantConfig(await this.load(HomeAssistantClient))
    );
    this.set(
      HomeAssistantActions,
      new HomeAssistantActions(logger, await this.load(HomeAssistantClient))
    );
    this.set(
      HomeAssistantRegistry,
      new HomeAssistantRegistry(
        await this.load(HomeAssistantClient),
        this.options.homeAssistant
      )
    );
    this.set(BridgeFactory, new BridgeEnvironmentFactory(this));
    this.set(
      BridgeService,
      new BridgeService(
        await this.load(BridgeStorage),
        await this.load(BridgeFactory),
        this.options.bridgeService
      )
    );
    this.set(
      WebApi,
      new WebApi(logger, await this.load(BridgeService), this.options.webApi)
    );
    this.runtime.add({
      [Symbol.asyncDispose]: () => this.dispose()
    });
  }
};

// src/commands/start/start-handler.ts
async function startHandler(startOptions, webUiDist) {
  Object.assign(globalThis, {
    WebSocket: globalThis.WebSocket ?? ws.WebSocket
  });
  const options = new Options({ ...startOptions, webUiDist });
  const rootEnv = configureDefaultEnvironment(options);
  const appEnvironment = await AppEnvironment.create(rootEnv, options);
  const bridgeService$ = appEnvironment.load(BridgeService);
  const webApi$ = appEnvironment.load(WebApi);
  const registry$ = appEnvironment.load(HomeAssistantRegistry);
  const initBridges = bridgeService$.then((b) => b.startAll());
  const initApi = webApi$.then((w) => w.start());
  const enableAutoRefresh = initBridges.then(() => Promise.all([registry$, bridgeService$])).then(([r, b]) => r.enableAutoRefresh(() => b.refreshAll()));
  await Promise.all([initBridges, initApi, enableAutoRefresh]);
}

// src/commands/start/start-options-builder.ts
import fs4 from "node:fs";
function startOptionsBuilder(yargs2) {
  return yargs2.version(false).config(
    "config",
    'Provide the path to a configuration JSON file, which can include all the other command options. You can use kebabcase ("log-level") or camelcase ("logLevel").',
    (configPath) => {
      if (configPath.trim() === "") {
        return {};
      }
      if (!fs4.existsSync(configPath)) {
        throw new Error(`Config file '${configPath}' does not exist!`);
      }
      return JSON.parse(fs4.readFileSync(configPath, "utf-8"));
    }
  ).option("log-level", {
    type: "string",
    choices: ["silly", "debug", "info", "notice", "warn", "error", "fatal"],
    default: "info"
  }).option("disable-log-colors", {
    type: "boolean",
    default: false
  }).option("storage-location", {
    type: "string",
    description: "Path to a directory where the application should store its data. Defaults to $HOME/.home-assistant-matter-hub"
  }).option("http-port", {
    alias: "web-port",
    type: "number",
    description: "Port used by the web application. 'http-port' is recommended, 'web-port' is deprecated and will be removed in the future.",
    default: 8482
  }).option("http-ip-whitelist", {
    type: "array",
    description: "Only allow the specified IPv4, IPv6 or CIDR. You can specify this option multiple times. When configured via ENV variables, you can only specify ONE value. Defaults to allow every IP address."
  }).option("mdns-network-interface", {
    type: "string",
    description: "Limit mDNS to this network interface"
  }).option("home-assistant-url", {
    type: "string",
    description: "The HTTP-URL of your Home Assistant URL"
  }).option("home-assistant-access-token", {
    type: "string",
    description: "A long-lived access token for your Home Assistant Instance"
  }).option("home-assistant-refresh-interval", {
    type: "number",
    description: "The refresh rate (in seconds) to detect new devices & entities or their configurations",
    default: 30
  }).option("http-auth-username", {
    type: "string",
    description: "Username for HTTP basic authentication (optional)"
  }).option("http-auth-password", {
    type: "string",
    description: "Password for HTTP basic authentication (optional)"
  }).demandOption(["home-assistant-url", "home-assistant-access-token"]);
}

// src/commands/start/start-command.ts
function startCommand(webDist) {
  return {
    command: "start",
    describe: "start the application",
    builder: startOptionsBuilder,
    handler: (args) => startHandler(args, webDist)
  };
}

// src/cli.ts
var dirname = import.meta.dirname ?? url.fileURLToPath(new URL(".", import.meta.url));
async function cli(argv) {
  const webDist = process.env.NODE_ENV === "development" ? void 0 : path4.join(dirname, "../frontend");
  const cli2 = yargs(hideBin(argv));
  cli2.env("HAMH_").scriptName("home-assistant-matter-hub").version().strict().recommendCommands().detectLocale(false).help().command(startCommand(webDist)).demandCommand().wrap(Math.min(140, cli2.terminalWidth())).parse();
}
await cli(process.argv);
export {
  cli
};
//# sourceMappingURL=cli.js.map
