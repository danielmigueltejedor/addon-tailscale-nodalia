// https://www.home-assistant.io/integrations/media_player/
export var MediaPlayerDeviceClass;
(function (MediaPlayerDeviceClass) {
    MediaPlayerDeviceClass["Tv"] = "tv";
    MediaPlayerDeviceClass["Speaker"] = "speaker";
    MediaPlayerDeviceClass["Receiver"] = "receiver";
})(MediaPlayerDeviceClass || (MediaPlayerDeviceClass = {}));
export var MediaPlayerDeviceFeature;
(function (MediaPlayerDeviceFeature) {
    MediaPlayerDeviceFeature[MediaPlayerDeviceFeature["PAUSE"] = 1] = "PAUSE";
    MediaPlayerDeviceFeature[MediaPlayerDeviceFeature["SEEK"] = 2] = "SEEK";
    MediaPlayerDeviceFeature[MediaPlayerDeviceFeature["VOLUME_SET"] = 4] = "VOLUME_SET";
    MediaPlayerDeviceFeature[MediaPlayerDeviceFeature["VOLUME_MUTE"] = 8] = "VOLUME_MUTE";
    MediaPlayerDeviceFeature[MediaPlayerDeviceFeature["PREVIOUS_TRACK"] = 16] = "PREVIOUS_TRACK";
    MediaPlayerDeviceFeature[MediaPlayerDeviceFeature["NEXT_TRACK"] = 32] = "NEXT_TRACK";
    MediaPlayerDeviceFeature[MediaPlayerDeviceFeature["TURN_ON"] = 128] = "TURN_ON";
    MediaPlayerDeviceFeature[MediaPlayerDeviceFeature["TURN_OFF"] = 256] = "TURN_OFF";
    MediaPlayerDeviceFeature[MediaPlayerDeviceFeature["PLAY_MEDIA"] = 512] = "PLAY_MEDIA";
    MediaPlayerDeviceFeature[MediaPlayerDeviceFeature["VOLUME_STEP"] = 1024] = "VOLUME_STEP";
    MediaPlayerDeviceFeature[MediaPlayerDeviceFeature["SELECT_SOURCE"] = 2048] = "SELECT_SOURCE";
    MediaPlayerDeviceFeature[MediaPlayerDeviceFeature["STOP"] = 4096] = "STOP";
    MediaPlayerDeviceFeature[MediaPlayerDeviceFeature["CLEAR_PLAYLIST"] = 8192] = "CLEAR_PLAYLIST";
    MediaPlayerDeviceFeature[MediaPlayerDeviceFeature["PLAY"] = 16384] = "PLAY";
    MediaPlayerDeviceFeature[MediaPlayerDeviceFeature["SHUFFLE_SET"] = 32768] = "SHUFFLE_SET";
    MediaPlayerDeviceFeature[MediaPlayerDeviceFeature["SELECT_SOUND_MODE"] = 65536] = "SELECT_SOUND_MODE";
    MediaPlayerDeviceFeature[MediaPlayerDeviceFeature["BROWSE_MEDIA"] = 131072] = "BROWSE_MEDIA";
    MediaPlayerDeviceFeature[MediaPlayerDeviceFeature["REPEAT_SET"] = 262144] = "REPEAT_SET";
    MediaPlayerDeviceFeature[MediaPlayerDeviceFeature["GROUPING"] = 524288] = "GROUPING";
    MediaPlayerDeviceFeature[MediaPlayerDeviceFeature["MEDIA_ANNOUNCE"] = 1048576] = "MEDIA_ANNOUNCE";
    MediaPlayerDeviceFeature[MediaPlayerDeviceFeature["MEDIA_ENQUEUE"] = 2097152] = "MEDIA_ENQUEUE";
})(MediaPlayerDeviceFeature || (MediaPlayerDeviceFeature = {}));
