import { DetailedHTMLProps, HTMLAttributes, FC, ReactNode, CSSProperties } from 'react';

declare const SideBar: FC<ISideBarProps>;
interface SideBarItems {
    label: string;
    icon: string | ReactNode;
    sublinks?: SublinksItems[];
    url: string;
}
interface SublinksItems {
    label: string;
    url: string;
}
export interface ISideBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Optional; this use the sideBarItem component
     */
    items?: SideBarItems[];
    /**
     * Optional; Text to display at the bottom of the sidebar, All apps is the default
     */
    bottomText?: string;
    /**
     * Optional; Boolean to show coollapse sidebar
     */
    showCollapsed?: boolean;
    /**
     * Optional; Show bottom indicator when active instead of the left one
     */
    isBottomIndicator?: boolean;
    /**
     * Optional; height of the sidebar, use a string with px, % or rem ex: '500px'
     */
    height?: string;
    /**
     * Optional; width of the sidebar
     */
    width?: string;
    /**
     * Optional; width of the sidebar when collapsed
     */
    collapseWidth?: string;
    /**
     * Optional; Action to perform when the bottom text is clicked
     */
    bottomAction?: () => void;
    /**
     * Optional; Action to perform when the bottom text is clicked
     */
    navLinkAction?: (item: any) => void;
    /**
     * Optional; Action to perform when the bottom text is clicked
     */
    showBottomAction?: boolean;
    /**
     * Optional; prop to set the active item
     */
    activeItem?: SideBarItems;
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * event to get notified when user click on toggle menu
     */
    onToggle?: (isCollapsed: boolean) => void;
    /**
     * Optional; Bottom menu icon/image
     */
    bottomImg?: ReactNode;
    /**
     * Optional: For mobile, display the menu as an overlay menu. This prop is used to show/hide the menu on mobile.
     */
    isOverlay?: boolean;
    /**
     * Optional: For mobile, determine whether to display the menu or not. This prop is used to show/hide the menu. The default value is `true`. This prop is used to programmatically show or hide the menu in mobile responsiveness.
     */
    isShow?: boolean;
    /**
     * Optional: For mobile, a callback function to handle the close event for hiding the menu.
     */
    onClose?: () => void;
    /**
     * Optional; Menu's top spacing
     */
    backdropStyle?: CSSProperties;
}
export default SideBar;
