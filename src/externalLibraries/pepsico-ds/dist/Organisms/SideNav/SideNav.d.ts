import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

/**
 * The Side Navigation component is used to display a list of links to navigate between pages in a website or application.
 */
export declare const SideNav: FC<ISideNavProps>;
export interface ISideNavProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Optional; if true the SideNav can toggle between icons only and icons + text
     */
    isCollapsible?: boolean;
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
    /**
     * Callback fired when close item is clicked
     */
    onClose?: () => void;
    /**
     * Callback fired when selected item changes
     */
    onUpdate?: (newSelectedIndex: number) => void;
    /**
     * Optional; When present, sets `checked` on the radio item at the specified index; Default is -1
     */
    selectedItemIndex?: number;
    /**
     * If true, prepend a "close" SiedNavItem item to the SideNav
     */
    showClose?: boolean;
    /**
     * If true, collapse the SideNav (icon only); default is "false" (show text + icon)
     */
    showOnlyIcons?: boolean;
    /**
     * Size of the SideNav,  corresponds to Desktop, Tablet
     */
    size?: 'large' | 'medium';
    /**
     * Optional; When present, adds data-attribute "subnav" and sets specific styles; Default is -1
     */
    subnavLevel?: number;
}
export default SideNav;
