import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

/**
 * Used to visually separate two distinct areas, either horizontally or vertically
 */
export declare const Divider: FC<IDividerProps>;
export interface IDividerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
    /**
     * Optional; When provided, determines the orientation of the divider visually; default is "horizontal"
     */
    orientation?: 'horizontal' | 'vertical';
}
export default Divider;
