import { DetailedHTMLProps, FC, HTMLAttributes, SVGProps } from 'react';

export declare const Icon: FC<IIconProps>;
export interface IIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    /**
     * Optional; Value displayed in alt or title attribute - used for screen readers or if asset fails to load
     */
    alt?: string;
    /**
     * Optional; When true, icon is rendered in disabled mode; normal render otherwise
     * @default false
     */
    disabled?: boolean;
    /**
     * Optional; When defined, the value to use when loading the icon from Google Fonts (e.g. "search", "home")
     */
    icon?: string;
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * Optional; Determines render size; default is 'medium'
     */
    size?: 'large' | 'medium' | 'small';
    /**
     * Optional; When defined, renders this SVG instead of using Google Fonts
     */
    svg?: SVGProps<SVGSVGElement>;
}
export default Icon;
