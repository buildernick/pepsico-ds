import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface Option {
    label: string;
    id: string;
    icon?: string;
    onClick?: () => void;
}
/**
 * Base properties shared by both single and multiple selection dropdowns.
 * @template T - Type of selection, either 'single' or 'multiple'.
 */
interface BaseProps<T extends 'single' | 'multiple'> extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    /** Type of selection: 'single' or 'multiple'. */
    selection: T;
    /** Size of the dropdown, can be either 'medium' or 'small'. */
    size?: 'medium' | 'small';
    /** Whether the dark theme is applied. */
    isDark?: boolean;
    /** Whether the search functionality is available. */
    showSearch?: boolean;
    /** Configuration for the header of the dropdown. */
    header?: {
        text?: string;
        size?: 'medium' | 'small';
        separator?: boolean;
    };
    /** Options available for selection in the dropdown. */
    options: Option[];
}
/**
 * Properties for a dropdown with single selection.
 */
export interface SingleSelection extends BaseProps<'single'> {
    /** Function to handle selection of an ID. */
    handleSelectId: (value: string) => void;
    /** Currently selected ID, if any. */
    selectedId?: string;
}
/**
 * Properties for a dropdown with multiple selections.
 */
export interface MultipleSelection extends BaseProps<'multiple'> {
    /** Function to handle selection of multiple IDs. */
    handleSelectIds: (value: string[]) => void;
    /** Array of currently selected IDs. */
    selectedIds: string[];
    /** Function to toggle the dropdown. */
    toggleDropdown: () => void;
    /** Custom button name for primary button. */
    primaryButtonText?: string;
    /** Custom button name for secondary button. */
    secondaryButtonText?: string;
}
/** Union type for dropdown menu list properties, supporting either single or multiple selections. */
export type FilterDropdownMenuListProps = SingleSelection | MultipleSelection;
export {};
