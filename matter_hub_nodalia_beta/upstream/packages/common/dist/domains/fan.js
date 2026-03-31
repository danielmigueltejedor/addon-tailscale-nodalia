export var FanDeviceDirection;
(function (FanDeviceDirection) {
    FanDeviceDirection["FORWARD"] = "forward";
    FanDeviceDirection["REVERSE"] = "reverse";
})(FanDeviceDirection || (FanDeviceDirection = {}));
export var FanDeviceFeature;
(function (FanDeviceFeature) {
    FanDeviceFeature[FanDeviceFeature["SET_SPEED"] = 1] = "SET_SPEED";
    FanDeviceFeature[FanDeviceFeature["OSCILLATE"] = 2] = "OSCILLATE";
    FanDeviceFeature[FanDeviceFeature["DIRECTION"] = 4] = "DIRECTION";
    FanDeviceFeature[FanDeviceFeature["PRESET_MODE"] = 8] = "PRESET_MODE";
    FanDeviceFeature[FanDeviceFeature["TURN_OFF"] = 16] = "TURN_OFF";
    FanDeviceFeature[FanDeviceFeature["TURN_ON"] = 32] = "TURN_ON";
})(FanDeviceFeature || (FanDeviceFeature = {}));
