import { FC, DetailedHTMLProps, LabelHTMLAttributes, ReactNode } from 'react';

/**
 * Presents users with short, relevant information
 */
export declare const Label: FC<ILabelProps>;
export interface ILabelProps extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
    /**
     * Optional; When present, mark the input as disabled
     */
    disabled?: boolean;
    /**
     * Optional; When present, mark the input as required
     */
    required?: boolean;
    /**
     * Optional; When present, used as label for the input
     */
    label?: string | ReactNode;
    /**
     * Optional; When present, render icon next to label
     */
    showLabelIcon?: boolean;
}
export default Label;
