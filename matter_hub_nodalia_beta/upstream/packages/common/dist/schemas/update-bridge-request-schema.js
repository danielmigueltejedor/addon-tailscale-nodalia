import { bridgeConfigSchema } from "./bridge-config-schema.js";
export const updateBridgeRequestSchema = {
    ...bridgeConfigSchema,
    properties: {
        ...bridgeConfigSchema.properties,
        id: {
            type: "string",
        },
    },
    required: [...(bridgeConfigSchema?.required ?? []), "id"],
};
