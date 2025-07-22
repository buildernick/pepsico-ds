import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';
import { IFeedbackType } from '../../Atoms';

/**
 * Presents users with short, relevant information
 */
export declare const TextInput: import('react').ForwardRefExoticComponent<Omit<ITextInputProps, "ref"> & import('react').RefAttributes<HTMLInputElement>>;
export interface ITextInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
    /**
     * Optional; When present, mark the input as disabled
     */
    disabled?: boolean;
    /**
     * Optional; When present, mark the input as required
     */
    required?: boolean;
    /**
     * Optional; When present, used as label for the input
     */
    label?: string;
    /**
     * Optional; When provided, callback function invoked when the input value changes
     */
    onUpdate?: (value: string) => void;
    /**
     * Optional; When present, used as placeholder text for the input
     */
    placeholderText?: string;
    /**
     * Optional; When present, render icon next to label
     */
    showLabelIcon?: boolean;
    /**
     * Optional; default (when not provided) is 'medium'
     */
    inputSize?: 'medium' | 'small';
    /**
     * Optional; Render information message
     */
    helperText?: string;
    /**
     * Optional; Render error message
     */
    error?: string;
    /**
     * Optional; Feedback message type
     */
    feedbackType?: IFeedbackType;
    /**
     * Optional: Feedback React node to render custom content instead of a string.
     * When `feedbackContent` is present, the feedback component will not render.
     */
    feedbackContent?: ReactNode;
}
export default TextInput;
