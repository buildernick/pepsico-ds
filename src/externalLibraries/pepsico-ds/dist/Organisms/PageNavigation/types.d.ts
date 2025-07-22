import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type NavItem = {
    id: string;
    label: string;
    link: string;
    leadingIcon?: string;
    trailingIcon?: string;
};
export type NavOption = NavItem & {
    subItems?: NavItem[];
};
/**
 * Props for the PageNavigation component.
 */
export interface PageNavigationProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    /**
     * The label for the PageNavigation.
     */
    label?: string;
    /**
     * Indicates whether the PageNavigation is a selector.
     */
    selector?: boolean;
    /**
     * Indicates whether the PageNavigation is in dark mode.
     */
    isDark?: boolean;
    /**
     * The options for the PageNavigation.
     */
    options: NavOption[];
    /**
     * The selected option for the PageNavigation.
     */
    selected?: {
        parentId: string;
        childId?: string;
    };
    /**
     * The handleSelected function for the PageNavigation.
     */
    onSelected?: (optionId: string, childId?: string) => void;
}
