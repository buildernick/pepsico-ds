import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ITagProps } from '../../Atoms/Tag/types';

export interface TabOptions {
    label: string;
    id: string;
    icon?: string;
    onClick: () => void;
}
export interface ITabProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'children' | 'onClick'> {
    /**
     * Optional; When true, rendered in disabled mode; normal render otherwise
     * @default false
     */
    disabled?: boolean;
    /**
     * Optional; When provided, item is rendered w/ specified icon on left of label (using LTR)
     */
    iconLeading?: string | React.ReactNode;
    /**
     * Mandatory; Choose between close or arrow_drop_down
     */
    iconTrailing?: 'arrow_drop_down' | 'close' | 'search' | 'arrow_drop_up' | 'warning' | React.ReactNode;
    /**
     * Index of the item, automatically set by Tabs Molecule but can be overridden
     */
    index?: number;
    /**
     * Optional; When true, highlight the item; default is "false"
     */
    isActive?: boolean;
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * String to render as tab (e.g. "Color palettes", "Themes", "Tokens", "Data visualization")
     */
    label: string;
    /**
     * alignment of Tabs
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * style of the tab
     */
    type?: 'shadow' | 'border' | 'line';
    /**
     * Optional; When provided, callback function invoked when the selected tab changes
     */
    onClick?: (indexClicked?: number) => void;
    /**
     * Optional; When provided, children are rendered in the tab
     */
    tag?: ITagProps;
    /**
     * Opens dropdown on click of icon
     * @default {}
     */
    subOptions?: TabOptions[];
    /**
     * control dropdown
     */
    showSubOptions?: boolean;
}
