import { DetailedHTMLProps, FC } from 'react';
import { ITooltipProps } from '../Tooltip';

/**
 * The Default, Hover, and Disabled states - text only and optionally w/ left or right aligned icons - are used for links
 */
export declare const Link: FC<ILinkProps>;
export interface ILinkProps extends DetailedHTMLProps<any, any> {
    /**
     * Optional; When true, link is rendered in disabled mode; normal render otherwise
     * @default false
     */
    disabled?: boolean;
    /**
     * When true, renders a trailing icon (after the label) using the Icon Atom
     */
    showIconTrailing?: boolean;
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * Optional; Value to display on link (or use child elements)
     */
    label?: string;
    /**
     * Optional; Size of link; default (when not provided) is 'medium'
     */
    size?: 'large' | 'medium' | 'small';
    /**
     * Optional; When false, uses <span> instead of <a>; default (when not provided) is 'true'. Allows for composing Link Atom w/o nested anchor tags
     */
    useAnchor?: boolean;
    /**
     * Optional; Value to display in tooltip
     */
    tooltip?: ITooltipProps;
}
export default Link;
