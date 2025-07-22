import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { IAvatarProps } from '../../Atoms/Avatar/types';
import { IIconProps } from '../../Atoms/Icon';
import { IFeedbackType } from '../../Atoms/Feedback';
import { IButtonHierarchyProps } from '../../Utilities/ButtonHierarchy/types';

export interface IDropdownProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'size'> {
    /**
     * The list to populate the dropdown.
     */
    childList: DropdownItem[];
    /**
     * Optional; When true, icon is rendered in disabled mode; normal render otherwise
     */
    disabled?: boolean;
    /**
     * When true, dropdown shows error state
     */
    error?: boolean;
    /**
     * The text that will be displayed as the label for the dropdown element
     */
    label?: string;
    /**
     * The hint for the dropdown element. Hidden when the dropdown is open.
     */
    helperText?: string;
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * Optional; When True will display *Required above the dropdown atom. Default is false.
     */
    isRequired?: boolean;
    placeholder?: string;
    /**
     * The Value that is Selected.
     * Will need to turn this into an array for multi-select
     */
    selectedValue?: DropdownItem[];
    /**
     * Allows the Parent to keep track of the state of the Dropdown Value
     * @param val the DropdownItem Value that has been selected
     * @returns n/a
     */
    setSelectedValue: (val: DropdownItem[] | undefined) => void;
    /**
     * Optional; Determines render size; default is "medium"
     */
    size?: 'medium' | 'small';
    /**
     * Value displayed as header in the Dropdown Menu
     */
    dropdownHeader?: string;
    /**
     * Determines if the dropdown is a single or multi select.
     * @default single
     */
    selection?: 'single' | 'multiple' | 'singleTreeView' | 'multipleTreeView' | 'loading';
    /**
     * Optional; Feedback message type
     */
    feedbackType?: IFeedbackType;
    /**
     * Optional; Indicate that show clearable icon or not
     */
    isClearable?: boolean;
    /**
     * Whether the footer action is mandatory for pulling selected items
     * applicable on mulitple and multipleTreeView types.
     * @default false
     */
    showFooter?: boolean;
    /**
     * Custom footer options.
     */
    customFooterOptions?: IButtonHierarchyProps;
}
export interface DropdownItem {
    id: string;
    displayText: string;
    childContents?: DropdownItem[];
    isSectonTitle?: boolean;
    isSelected?: boolean;
    leadingIcon?: IIconProps;
    avatar?: IAvatarProps;
    separator?: boolean;
}
