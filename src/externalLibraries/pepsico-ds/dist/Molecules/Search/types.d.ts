import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface Suggestion {
    label: string;
    id: string;
}
export interface ISearchProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLInputElement> {
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * Optional; When present, mark the input as disabled
     */
    isDisabled?: boolean;
    /**
     * Optional; When provided, callback function invoked when the input value changes
     */
    onUpdate?: (value: string) => void;
    /**
     * Optional; When provided, callback function invoked when the search icon is clicked or the enter button is pressed
     */
    onSearch?: () => void;
    /**
     * Optional; When provided, callback function invoked when the search icon is clicked or the enter button is pressed
     */
    onClear?: () => void;
    /**
     * Optional; When present, used as placeholder text for the input
     */
    placeholderText?: string;
    /**
     * Optional; Determines render size; default is 'medium'
     * @default medium
     */
    size?: 'medium' | 'small';
    /**
     * Optional; When present, used as autocomplete search input
     * @default false
     */
    isAutoComplete?: boolean;
    /**
     * Optional; Determines render size; default is 'medium'
     * @default []
     */
    suggestions?: Suggestion[];
    /**
     * Optional; When provided, callback function invoked when the dropdown value changes
     */
    onSelectOption?: (value: Suggestion) => void;
    /**
     * Optional; Controls whether the search input is focused
     * @default false
     */
    focus?: boolean;
    /**
     * Optional; When present, display search icon at leading position
     * @default false
     */
    isLeadingIcon?: boolean;
    /**
     * Optional; When present, it will show cross/clear button at right side
     * @default false
     */
    isClearable?: boolean;
    /**
     * When provided, renders a leading icon, default will be search icon
     */
    icon?: string;
}
