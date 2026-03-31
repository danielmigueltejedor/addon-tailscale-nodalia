export var CoverDeviceState;
(function (CoverDeviceState) {
    CoverDeviceState["closed"] = "closed";
    CoverDeviceState["open"] = "open";
    CoverDeviceState["closing"] = "closing";
    CoverDeviceState["opening"] = "opening";
})(CoverDeviceState || (CoverDeviceState = {}));
export const CoverSupportedFeatures = {
    support_open: 1,
    support_close: 2,
    support_set_position: 4,
    support_stop: 8,
    support_open_tilt: 16,
    support_close_tilt: 32,
    support_stop_tilt: 64,
    support_set_tilt_position: 128,
};
