import { default as React, DetailedHTMLProps, FC, HTMLAttributes } from 'react';

/**
 * Presents users with short, relevant information
 */
export declare const Header: FC<IHeaderProps>;
export interface IHeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
    /**
     * Optional; When present, render header left icon
     */
    leftIcon?: React.ReactNode;
    /**
     * Optional; When present, render header middle icon
     */
    middleIcon?: React.ReactNode;
    /**
     * Optional; When present, render right toolbar component
     */
    rightToolbar?: {
        icon: React.ReactNode;
        dropdownContent?: React.ReactNode;
        onClickIcon: () => void;
    }[];
}
export interface IconDropdownProps {
    icon: React.ReactNode;
    dropdownContent?: React.ReactNode;
    onClickIcon: () => void;
}
export default Header;
