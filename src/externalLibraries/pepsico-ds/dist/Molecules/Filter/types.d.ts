import { DetailedHTMLProps, HTMLAttributes } from 'react';

/** Type defining the selection modes available: 'single' or 'multiple'. */
type Selection = 'single' | 'multiple';
export type FilterItem = {
    id: string;
    label: string;
};
/** Properties for the Filter component. */
export interface FilterProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, 'onChange'> {
    /** Size of the filter component, can be 'medium' or 'small'.
     * @default 'medium'
     */
    size?: 'medium' | 'small';
    /** Determines if the dark theme is applied. */
    isDark?: boolean;
    /** Determines if the search functionality should be shown.
     * @default true
     */
    showSearch?: boolean;
    /** Label for the filter component. */
    label: string;
    /** Label for the Filter Menu List within the filter component. */
    listLabel?: string;
    /** Determines if the filter component is disabled.
     * @default false
     */
    disabled?: boolean;
    /** Type of selection allowed, can be either 'single' or 'multiple'. */
    selection?: Selection;
    /** Options available for selection in the filter component. */
    options: FilterItem[];
    /** default values to be set */
    value?: FilterItem | FilterItem[];
    /**
     * Allows the Parent to keep track of the state of the filter Value
     * @param value the filter Value that has been selected
     * @returns n/a
     */
    onChange?: (value: FilterItem | FilterItem[] | undefined) => void;
    /** Custom button name for primary button. */
    primaryButtonText?: string;
    /** Custom button name for secondary button. */
    secondaryButtonText?: string;
}
export interface IFilterHandle {
    openMenu: () => void;
    closeMenu: () => void;
}
export {};
