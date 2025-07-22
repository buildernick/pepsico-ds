import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';

/**
 * The SideNavItem Atom is used to populate a SideNav Atom
 */
export declare const SideNavItem: FC<ISideNavItemProps>;
export interface ISideNavItemProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onClick'> {
    /**
     * Optional; When provided, render specified icon on left side of item
     */
    icon?: string;
    /**
     * Index of the item
     */
    index: number;
    /**
     * Optional; When true, highlight the item; default is "false"
     */
    isActive?: boolean;
    isMenuContent?: boolean;
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
    /**
     * Optional; Value will be rendered as the main portion of this item (above subnav)
     */
    label?: ReactNode;
    /**
     * Callback fired when item is clicked
     */
    onClick?: (indexClicked: number) => void;
    /**
     * If true, collapse the SideNavItem (icon only); default is "false" (show text + icon)
     */
    showOnlyIcon?: boolean;
    /**
     * Optional; When true, expand the SideNavItem (show subnav items); default is "false" (hide subnav items)
     */
    showSubNav?: boolean;
    /**
     * Optional; When present, adds data-attribute "subnav" and sets specific styles; Default is -1
     */
    subnavLevel?: number;
}
export default SideNavItem;
