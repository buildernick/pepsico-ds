import { DetailedHTMLProps, HTMLAttributes } from 'react';

/**
 * Represents the props for the Legend component.
 */
export interface LegendProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * The direction of the legend items.
     * Possible values are 'horizontal', 'vertical', or 'wrap'.
     */
    direction: 'horizontal' | 'vertical' | 'wrap';
    /**
     * An array of strings representing the legend items.
     */
    items: string[];
    /**
     * Specifies whether the legend is in dark mode.
     * @default false
     */
    isDark?: boolean;
}
