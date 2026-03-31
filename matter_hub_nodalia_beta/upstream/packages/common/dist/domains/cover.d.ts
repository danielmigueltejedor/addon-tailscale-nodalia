export declare enum CoverDeviceState {
    closed = "closed",
    open = "open",
    closing = "closing",
    opening = "opening"
}
export interface CoverDeviceAttributes {
    current_position?: number;
    current_tilt_position?: number;
    supported_features?: number;
}
export declare const CoverSupportedFeatures: {
    support_open: number;
    support_close: number;
    support_set_position: number;
    support_stop: number;
    support_open_tilt: number;
    support_close_tilt: number;
    support_stop_tilt: number;
    support_set_tilt_position: number;
};
