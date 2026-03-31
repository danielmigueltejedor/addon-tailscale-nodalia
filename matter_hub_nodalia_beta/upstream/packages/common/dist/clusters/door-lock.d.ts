export declare enum DoorLockStatus {
    locked = 1,
    unlocked = 2
}
export interface DoorLockClusterState {
    lockState: DoorLockStatus;
}
