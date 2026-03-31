export var VacuumState;
(function (VacuumState) {
    VacuumState["cleaning"] = "cleaning";
    VacuumState["docked"] = "docked";
    VacuumState["returning"] = "returning";
    VacuumState["error"] = "error";
    VacuumState["idle"] = "idle";
    VacuumState["paused"] = "paused";
})(VacuumState || (VacuumState = {}));
export var VacuumDeviceFeature;
(function (VacuumDeviceFeature) {
    /**
     * @deprecated
     */
    VacuumDeviceFeature[VacuumDeviceFeature["TURN_ON"] = 1] = "TURN_ON";
    /**
     * @deprecated
     */
    VacuumDeviceFeature[VacuumDeviceFeature["TURN_OFF"] = 2] = "TURN_OFF";
    VacuumDeviceFeature[VacuumDeviceFeature["PAUSE"] = 4] = "PAUSE";
    VacuumDeviceFeature[VacuumDeviceFeature["STOP"] = 8] = "STOP";
    VacuumDeviceFeature[VacuumDeviceFeature["RETURN_HOME"] = 16] = "RETURN_HOME";
    VacuumDeviceFeature[VacuumDeviceFeature["FAN_SPEED"] = 32] = "FAN_SPEED";
    VacuumDeviceFeature[VacuumDeviceFeature["BATTERY"] = 64] = "BATTERY";
    /**
     * @deprecated
     */
    VacuumDeviceFeature[VacuumDeviceFeature["STATUS"] = 128] = "STATUS";
    VacuumDeviceFeature[VacuumDeviceFeature["SEND_COMMAND"] = 256] = "SEND_COMMAND";
    VacuumDeviceFeature[VacuumDeviceFeature["LOCATE"] = 512] = "LOCATE";
    VacuumDeviceFeature[VacuumDeviceFeature["CLEAN_SPOT"] = 1024] = "CLEAN_SPOT";
    VacuumDeviceFeature[VacuumDeviceFeature["MAP"] = 2048] = "MAP";
    VacuumDeviceFeature[VacuumDeviceFeature["STATE"] = 4096] = "STATE";
    VacuumDeviceFeature[VacuumDeviceFeature["START"] = 8192] = "START";
})(VacuumDeviceFeature || (VacuumDeviceFeature = {}));
export var VacuumFanSpeed;
(function (VacuumFanSpeed) {
    VacuumFanSpeed["off"] = "off";
    VacuumFanSpeed["low"] = "low";
    VacuumFanSpeed["medium"] = "medium";
    VacuumFanSpeed["high"] = "high";
    VacuumFanSpeed["turbo"] = "turbo";
    VacuumFanSpeed["auto"] = "auto";
    VacuumFanSpeed["max"] = "max";
})(VacuumFanSpeed || (VacuumFanSpeed = {}));
