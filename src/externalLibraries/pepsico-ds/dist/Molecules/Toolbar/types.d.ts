import { DetailedHTMLProps, HTMLAttributes, MouseEventHandler } from 'react';
import { ITooltipProps } from '../../_common';

export interface IToolBarItem {
    icon: string;
    more?: boolean;
    label?: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface IToolBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Array of toolbar items
     */
    items: IToolBarItem[];
    /**
     * size of the toolbar
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Optional: to show dropdown icon
     */
    groupMore?: boolean;
    /**
     * Optional: for dark mode
     */
    isDark?: boolean;
    /**
     * Optional: to disable group
     */
    groupDisabled?: boolean;
    /**
     * Optional: to show clicked item active on toolbar
     */
    showActiveState?: boolean;
    /**
     * Optional; When provided, determines the orientation of the divider visually; default is "horizontal"
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     *Tooltip object for Toolbar Item
     */
    tooltip?: ITooltipProps;
}
export interface IToolBarItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    /**
     * Icon for the single button
     */
    icon: string;
    /**
     * Size of the button
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Active State of the button
     */
    isActive?: boolean;
    /**
     * Optional: for dark mode
     */
    isDark?: boolean;
    /**
     * Optional: to disable button
     */
    disabled?: boolean;
    /**
     * Optional: to show dropdown icon
     */
    more?: boolean;
    /**
     * Label for tooltip
     */
    label?: string;
    showActiveState?: boolean;
    /**
     * @function: to handle the functionality
     */
    onClick?: MouseEventHandler<HTMLButtonElement>;
    /**
     * Optional; When provided, determines the orientation of the divider visually; default is "horizontal"
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     *Tooltip object for Toolbar Item
     */
    tooltip?: ITooltipProps;
}
