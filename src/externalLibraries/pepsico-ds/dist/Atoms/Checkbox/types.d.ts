import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IFeedbackType } from '../Feedback';

export interface ICheckboxItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    /**
     * Checked state of the checkbox control; default when not provided is false
     * @default false
     */
    checked?: boolean;
    /**
     * When true, checkbox is rendered in disabled mode; normal render otherwise
     * @default false
     */
    disabled?: boolean;
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * Value to display on checkbox control
     */
    text?: string;
    /**
     * When provided, this handler is invoked w/ the updated value when a user changes the checked state
     */
    onUpdate?: (newValue: boolean) => void;
    /**
     * Render as indeterminate state if true;
     * @default false
     */
    indeterminate?: boolean;
    /**
     * Optional; Determines render size; default is 'small'
     */
    size?: 'small' | 'large';
    /**
     * Optional; make read only input, value will be set from outside
     */
    readOnly?: boolean;
    /**
     * Optional index used for tab ordering
     */
    index?: number;
}
export interface ICheckboxProps extends ICheckboxItemProps {
    /**
     * Provide text for the form group for additional help
     */
    label?: string;
    /**
     * Optional; Render information message
     */
    helperText?: string;
    /**
     * Optional; Feedback message type
     */
    feedbackType?: IFeedbackType;
}
export interface ICheckboxGroupProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    /**
     * Provide text for the form group for additional help
     */
    label?: string;
    /**
     * Provide text for the form group for additional help
     */
    items?: ICheckboxItemProps[];
    /**
     * Optional; Render information message
     */
    helperText?: string;
    /**
     * Optional; Feedback message type
     */
    feedbackType?: IFeedbackType;
    /**
     * Optional; Orientation
     */
    orientation?: 'vertical' | 'horizontal';
    /**
     * When true, checkbox is rendered in disabled mode; normal render otherwise
     * @default false
     */
    disabled?: boolean;
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * Optional; Determines render size; default is 'small'
     */
    size?: 'small' | 'large';
    /**
     * When provided, this handler is invoked w/ the updated value when a user changes the checked state
     */
    onUpdate?: (item: ICheckboxItemProps, newValue: boolean) => void;
}
