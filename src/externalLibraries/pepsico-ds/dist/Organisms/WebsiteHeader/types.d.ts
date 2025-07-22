import { default as React } from 'react';
import { IButtonProps, IIconProps } from '../../Atoms';
import { ITabProps } from '../../Molecules';

export interface IconDropdownProps {
    icon: React.ReactNode;
    dropdownContent?: React.ReactNode;
    onClickIcon: () => void;
    isDark?: boolean;
}
export interface WebsiteHeaderProps {
    logoType: 'fulllogo' | 'symbol';
    logoText?: string;
    logoImage?: string;
    menu?: 'main' | 'secondary';
    tabOptions?: ITabProps[];
    isDark?: boolean;
    /**
     * Optional; When present, render right toolbar component
     */
    customToolbarIcons?: {
        icon: React.ReactNode;
        dropdownContent?: React.ReactNode;
        onClickIcon: () => void;
    }[];
    status: 'signedIn' | 'signedOut';
    avatar?: {
        icon: React.ReactNode;
        dropdownContent?: React.ReactNode;
        onClickIcon: () => void;
    };
    primaryButton: IButtonProps;
    secondaryButton: IButtonProps;
    appSwitcher?: {
        icon: React.ReactNode;
        dropdownContent?: React.ReactNode;
        onClickIcon: () => void;
    };
    menuIconProps?: IIconProps;
}
