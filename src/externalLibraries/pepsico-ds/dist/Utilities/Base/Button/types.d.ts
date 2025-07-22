import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEventHandler, SVGProps } from 'react';
import { ITooltipProps } from '../../../Atoms';

export interface IBaseButtonProps extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'type'> {
    /**
     * When true, button group is rendered in disabled mode; normal render otherwise
     * @default false
     */
    type?: 'default' | 'naked';
    /**
     * When true, button group is rendered in disabled mode; normal render otherwise
     * @default false
     */
    disabled?: boolean;
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * Size of button group; default (when not provided) is 'medium'
     */
    size?: 'large' | 'medium' | 'small';
    /**
     * Render icon if true;
     * @default false
     */
    isShowIcon?: boolean;
    /**
     * Optional; When defined, the value to use when loading the icon from Google Fonts (e.g. "search", "home")
     */
    icon?: string | SVGProps<SVGSVGElement>;
    /**
     * Render more icon if true;
     * @default false
     */
    isShowDropdownIcon?: boolean;
    /**
     * Render icon if true;
     * @default false
     */
    isShowLabel?: boolean;
    /**
     * Label
     */
    label?: string;
    /**
     *  ToolTip
     */
    tooltip?: ITooltipProps;
    /**
     * Action triggered when button is clicked
     */
    onClick?: MouseEventHandler<HTMLButtonElement>;
    /**
     * Optional; Boolean to set active state of button icon
     */
    active?: boolean;
    /**
     * Optional: show skeleton to display loading/shimmer effect.
     */
    showSkeleton?: boolean;
    /**
     * Optional: classes to container.
     */
    containerClassName?: string;
}
