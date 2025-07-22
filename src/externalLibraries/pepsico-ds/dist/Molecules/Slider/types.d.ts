export interface ISliderProps {
    /**
     * The Label for the Slider
     */
    label?: string;
    /**
     * The Minimum Value for the Slider
     * @default 0
     * @type number
     */
    min?: number;
    /**
     * The Maximum Value for the Slider
     * @default 100
     * @type number
     */
    max?: number;
    /**
     * Show Minimum
     */
    showMin?: boolean;
    /**
     * Show Maximum
     * @default true
     * @type boolean
     */
    showMax?: boolean;
    /**
     * The Step Value for the Slider
     * @default 1
     * @type number
     */
    step?: number;
    /**
     * The Value for the Slider
     * @type number
     */
    value?: number[];
    /**
     * Optional; Render in Disabled Mode if true
     */
    disabled?: boolean;
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
    /**
     * The Error Message for the Slider
     * @type string
     */
    errorMessage?: string;
    /**
     * The Callback for the Slider
     * @type function
     * @param value
     */
    onChange?: (value: [number, number]) => void;
}
export interface ISliderHandle {
    setMin: (value: number) => void;
    setMax: (value: number) => void;
    slider1?: HTMLInputElement | null;
    slider2?: HTMLInputElement | null;
}
