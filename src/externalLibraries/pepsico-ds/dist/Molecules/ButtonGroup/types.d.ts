import { DetailedHTMLProps, HTMLAttributes, MouseEventHandler } from 'react';
import { IBaseButtonProps } from '../../_common';

export interface IButtonGroupItem {
    icon?: string;
    label: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}
export interface IButtonGroupProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * When true, button group is rendered in disabled mode; normal render otherwise
     * @default false
     */
    groupDisabled?: boolean;
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * Values used to render button group buttons.
     * Each item can have the following properties:
     * - @param {string} icon (optional): The icon to be displayed on the button.
     * - @param {string} label (optional): The label to be displayed on the button.
     * - @param {MouseEventHandler<HTMLButtonElement>} onClick (optional): The function to be called when the button is clicked.
     * - @param {boolean} disabled (optional): If true, the button will be disabled.
     */
    items: IButtonGroupItem[];
    /**
     * Size of button group; default (when not provided) is 'medium'
     */
    size?: 'large' | 'medium' | 'small';
    /**
     * Number of button group items to render
     */
    itemCount?: number;
    /**
     * Boolean to show dropdown
     */
    showMore?: boolean;
}
export interface IButtonGroupItemProps extends IBaseButtonProps {
}
