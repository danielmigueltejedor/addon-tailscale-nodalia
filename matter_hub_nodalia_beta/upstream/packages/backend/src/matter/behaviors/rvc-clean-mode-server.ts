import type { HomeAssistantEntityInformation } from "@home-assistant-matter-hub/common";
import { RvcCleanModeServer as Base } from "@matter/main/behaviors";
import { ModeBase } from "@matter/main/clusters/mode-base";
import type { RvcCleanMode } from "@matter/main/clusters/rvc-clean-mode";
import type { Agent } from "@matter/main";
import { applyPatchState } from "../../utils/apply-patch-state.js";
import type { HomeAssistantAction } from "../../services/home-assistant/home-assistant-actions.js";
import { HomeAssistantEntityBehavior } from "./home-assistant-entity-behavior.js";
import type { ValueGetter } from "./utils/cluster-config.js";

type OptionalActionSetter<T> = (
  value: T,
  agent: Agent,
) => HomeAssistantAction | readonly HomeAssistantAction[] | undefined;

export interface RvcCleanModeServerConfig {
  getCurrentMode: ValueGetter<number | undefined>;
  getSupportedModes: ValueGetter<RvcCleanMode.ModeOption[]>;
  changeToMode: OptionalActionSetter<number>;
}

// biome-ignore lint/correctness/noUnusedVariables: Biome thinks this is unused, but it's used by the function below
class RvcCleanModeServerBase extends Base {
  declare state: RvcCleanModeServerBase.State;

  override async initialize() {
    const homeAssistant = await this.agent.load(HomeAssistantEntityBehavior);
    this.update(homeAssistant.entity);
    this.reactTo(homeAssistant.onChange, this.update);
    await super.initialize();
  }

  private update(entity: HomeAssistantEntityInformation) {
    const supportedModes = this.state.config.getSupportedModes(
      entity.state,
      this.agent,
    );
    const resolvedCurrentMode = this.state.config.getCurrentMode(
      entity.state,
      this.agent,
    );

    applyPatchState(this.state, {
      currentMode:
        resolvedCurrentMode ??
        this.state.currentMode ??
        supportedModes[0]?.mode ??
        0,
      supportedModes,
    });
  }

  override changeToMode(
    request: ModeBase.ChangeToModeRequest,
  ): ModeBase.ChangeToModeResponse {
    const isSupportedMode = this.state.supportedModes.some(
      ({ mode }) => mode === request.newMode,
    );
    if (!isSupportedMode) {
      return {
        status: ModeBase.ModeChangeStatus.UnsupportedMode,
        statusText: "Unsupported clean mode",
      };
    }

    if (request.newMode === this.state.currentMode) {
      return {
        status: ModeBase.ModeChangeStatus.Success,
        statusText: "Clean mode already active",
      };
    }

    const action = this.state.config.changeToMode(request.newMode, this.agent);
    if (action == null) {
      return {
        status: ModeBase.ModeChangeStatus.GenericFailure,
        statusText: "No Home Assistant clean-mode action available",
      };
    }

    this.state.currentMode = request.newMode;
    this.agent.get(HomeAssistantEntityBehavior).callAction(action);
    return {
      status: ModeBase.ModeChangeStatus.Success,
      statusText: "Successfully switched clean mode",
    };
  }
}

namespace RvcCleanModeServerBase {
  export class State extends Base.State {
    config!: RvcCleanModeServerConfig;
  }
}

export function RvcCleanModeServer(config: RvcCleanModeServerConfig) {
  return RvcCleanModeServerBase.set({ config });
}
