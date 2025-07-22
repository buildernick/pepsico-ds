import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ITooltipProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * Value to display for the tooltip control
     */
    text?: string | React.ReactNode;
    /**
     * Value for the direction the popup will open from the object. Default is right
     */
    direction?: 'left' | 'right' | 'top-left' | 'top-middle' | 'top-right' | 'bottom-left' | 'bottom-middle' | 'bottom-right';
    maxWidth?: string;
}
