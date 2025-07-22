import { DetailedHTMLProps, FieldsetHTMLAttributes, HTMLAttributes } from 'react';
import { IFeedbackType } from '../Feedback';

export interface IRadioProps extends DetailedHTMLProps<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement> {
    /**
     * Render the radio button as selected
     * @default false
     */
    selected?: boolean;
    /**
     * When true, radio button is rendered in disabled mode; normal render otherwise
     * @default false
     */
    disabled?: boolean;
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * Items available to select (e.g. "apple", "banana", "carrot")
     */
    items: string[];
    /**
     * Optional; Name to use for the control as a whole (e.g. "Available Fruits",  "Select Preference")
     */
    label?: string;
    /**
     * reference to use for the underlying input controls (used to group different Radio button; e.g. "fruit" when opts are "apple", "banana", "carrot")
     */
    reference: string;
    /**
     * When provided, this handler is invoked w/ the updated selection index when a user changes the selection
     */
    onUpdate?: (newSelectedIndex: number, value: string) => void;
    /**
     * Optional; When present, sets `checked` on the radio button item at the specified index
     */
    selectedItemIndex?: number;
    /**
     * Optional; Determines render size; default is 'small'
     */
    size?: 'small' | 'large';
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
     * Optional; prop to show/hide radio label
     * @default true
     */
    showText?: boolean;
}
export interface IRadioItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    /**
     * Text label for the radio button
     */
    item?: string;
    /**
     * When true, radio button is rendered in checked state
     */
    checked: boolean;
    /**
     * Handler called when radio button is clicked
     */
    onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
    /**
     * Optional CSS class name to apply to the radio button
     */
    className?: string;
    /**
     * When true, radio button is rendered in disabled state
     * @default false
     */
    disabled?: boolean;
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * Optional size variant for the radio button
     * @default 'small'
     */
    size?: 'small' | 'large';
    /**
     * Optional index used for tab ordering
     */
    index?: number;
    /**
     * Reference name used to group related radio buttons
     */
    reference: string;
    /**
     * Optional; prop to show/hide radio label
     * @default true
     */
    showText?: boolean;
}
