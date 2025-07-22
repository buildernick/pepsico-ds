import { default as React, DetailedHTMLProps, HTMLAttributes, FC, ReactNode } from 'react';

declare const SideBarItem: FC<ISideBarItemProps>;
export default SideBarItem;
interface ISubLink {
    label: string;
    url: string;
}
export interface ISideBarItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    icon: string | ReactNode;
    label?: string;
    isSelected?: boolean;
    isCollapsed?: boolean;
    isBottomIndicator?: boolean;
    onClick?: () => void;
    subLinks?: ISubLink[];
    children?: React.ReactNode;
    navLinkAction?: (item: any) => void;
    /**
     * Render in dark mode if true;
     * @default false
     */
    isDark?: boolean;
}
