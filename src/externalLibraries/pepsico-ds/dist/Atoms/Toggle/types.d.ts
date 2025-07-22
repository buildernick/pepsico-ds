import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IToggleProps extends DetailedHTMLProps<HTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
    /**
     * Checked state of the Toggle control; default when not provided is 'none
     */
    checked?: boolean;
    /**
     * When true, toggle is rendered in disabled mode; normal render otherwise
     * @default false
     */
    disabled?: boolean;
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * Additional text to clarify the action that the toggle handles
     */
    label?: string;
    /**
     * Callback function when Toggle is changed
     */
    onUpdate?: (checked: boolean) => void;
    /**
     * Default when not provided is 'medium'
     * @default 'medium'
     */
    size?: 'medium' | 'small';
    /**
     * Short description of the action that the toggle handles
     */
    value?: string;
    /**
     * Display the toggle in horizontal or vertical order
     */
    variant?: 'horizontal' | 'vertical';
    /**
     * show checkedIcon
     * @default true
     */
    showCheckedIcon?: boolean;
}
