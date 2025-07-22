import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

export declare const Tile: FC<ITileProps>;
export interface ITileProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    trend?: number;
    icon?: string;
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
    label?: string;
    percentage?: number | string;
    separator?: boolean;
    severity?: 'default' | 'alert';
}
export default Tile;
