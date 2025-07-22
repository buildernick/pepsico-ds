import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface Option {
    label: string;
    id: string;
    icon?: string;
    separator?: boolean;
}
export interface Suggestion extends Option {
    source: 'suggestion';
}
export interface History extends Option {
    source: 'history';
}
export interface IUtilitySearchProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * Header: Title for the popover
     */
    header?: string;
    /**
     * Optional; When present, used as placeholder text for the input
     */
    placeholderText?: string;
    /**
     * Optional; List of suggestions
     * @default []
     */
    suggestions?: Suggestion[];
    /**
     * History of Search
     */
    history?: History[];
    /**
     * callback function invoked when the dropdown value changes in a debounced manner
     */
    onSearch: (value: string) => Promise<{
        suggestions: Suggestion[];
        history: History[];
    }>;
    /**
     * Optional; When provided, callback function invoked when the dropdown value changes
     */
    onSelectOption?: (value: Suggestion | History) => void;
    /**
     * onClose function to control the dropdown open state
     */
    setOpen?: (isOpen: boolean) => void;
    /**
     * Controls whether the dropdown is open
     */
    open?: boolean;
    /**
     * Optional; Controls whether the search input is focused
     * @default false
     */
    isFocus?: boolean;
}
export {};
