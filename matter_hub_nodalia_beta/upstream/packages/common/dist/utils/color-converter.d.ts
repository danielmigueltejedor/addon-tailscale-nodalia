import { type ColorInstance } from "color";
export declare abstract class ColorConverter {
    /**
     * Create a color object from `hs_color` value
     * @param hue Hue, Values between 0 and 360
     * @param saturation Saturation, Values between 0 and 100
     * @return Color
     */
    static fromHomeAssistantHS(hue: number, saturation: number): ColorInstance;
    /**
     * Create a color object from `hue` and `saturation` values set via Matter
     * @param hue Hue, Values between 0 and 255
     * @param saturation Saturation, Values between 0 and 255
     * @return Color
     */
    static fromMatterHS(hue: number, saturation: number): ColorInstance;
    /**
     * Create a color object from `x` and `y` values set via Matter.
     * This function was inspired by color utils of Home Assistant Core (`homeassistant.util.color.color_xy_brightness_to_RGB`).
     * @param x X, Values between 0 and 1
     * @param y Y, Values between 0 and 1
     * @return Color
     */
    static fromXY(x: number, y: number): ColorInstance;
    /**
     * Create a color object from `rgb_color` value
     * @param r Red, 0-255
     * @param g Green, 0-255
     * @param b Blue, 0-255
     * @return Color
     */
    static fromRGB(r: number, g: number, b: number): ColorInstance;
    /**
     * Create a color object from `rgbw_color` value
     * @param r Red, 0-255
     * @param g Green, 0-255
     * @param b Blue, 0-255
     * @param w White, 0-255
     * @return Color
     */
    static fromRGBW(r: number, g: number, b: number, w: number): ColorInstance;
    /**
     * Create a color object from `rgbww_color` value
     * @param r Red, 0-255
     * @param g Green, 0-255
     * @param b Blue, 0-255
     * @param cw Cold White, 0-255
     * @param ww Warm White, 0-255
     * @returns
     */
    static fromRGBWW(r: number, g: number, b: number, cw: number, ww: number): ColorInstance;
    /**
     * Extract Hue and Saturation compatible with Home Assistant
     * @param color The Color
     * @return [hue, saturation]
     */
    static toHomeAssistantHS(color: ColorInstance): [hue: number, saturation: number];
    /**
     * Extract Hue and Saturation compatible with Matter
     * @param color The Color
     * @return [hue, saturation]
     */
    static toMatterHS(color: ColorInstance): [hue: number, saturation: number];
    /**
     * Convert Color Tempareture from Mireds to Kelvin
     * @param temperatureMireds Temperature in Mireds
     * @return Temperature in Kelvin
     */
    static temperatureMiredsToKelvin(temperatureMireds: number): number;
    /**
     * Convert Color Tempareture from Kelvin to Mireds
     * @param temperatureKelvin Temperature in Kelvin
     * @param rounding Whether to floor or to ceil after conversion
     * @param boundaries Min and Max Boundaries to apply
     * @return Temperature in Mireds
     */
    static temperatureKelvinToMireds(temperatureKelvin: number, boundaries?: [min: number, max: number]): number;
}
