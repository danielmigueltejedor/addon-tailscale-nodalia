export var RvcOperationalState;
(function (RvcOperationalState) {
    RvcOperationalState[RvcOperationalState["Stopped"] = 0] = "Stopped";
    RvcOperationalState[RvcOperationalState["Running"] = 1] = "Running";
    RvcOperationalState[RvcOperationalState["Paused"] = 2] = "Paused";
    RvcOperationalState[RvcOperationalState["Error"] = 3] = "Error";
    RvcOperationalState[RvcOperationalState["SeekingCharger"] = 64] = "SeekingCharger";
    RvcOperationalState[RvcOperationalState["Charging"] = 65] = "Charging";
    RvcOperationalState[RvcOperationalState["Docked"] = 66] = "Docked";
})(RvcOperationalState || (RvcOperationalState = {}));
