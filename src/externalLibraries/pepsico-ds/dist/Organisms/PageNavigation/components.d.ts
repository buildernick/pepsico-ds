import { FC } from 'react';
import { NavItem } from './types';

interface SideBarNavOption {
    id: string;
    label: string;
    subItems?: number;
    isDark?: boolean;
    active?: boolean;
    handleSelected: (optionId: string) => void;
    leadingIcon?: string;
}
export declare const SideBarNavOption: FC<SideBarNavOption>;
interface SideBarSubNavProps {
    active: (value: string) => boolean;
    parentId: string;
    subItems: NavItem[];
    isDark?: boolean;
    handleSelected: (optionId: string, childId?: string) => void;
}
export declare const SidebarSubNav: FC<SideBarSubNavProps>;
export {};
