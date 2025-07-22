import { CSSProperties, DetailedHTMLProps, ReactNode, TextareaHTMLAttributes } from 'react';
import { IFeedbackType } from '../../Atoms';

/**
 * Presents users with short, relevant information
 */
export declare const TextArea: import('react').ForwardRefExoticComponent<Omit<ITextAreaProps, "ref"> & import('react').RefAttributes<HTMLTextAreaElement>>;
export interface ITextAreaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
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
    label?: string | ReactNode;
    /**
     * Optional; When present, render icon next to label
     */
    showLabelIcon?: boolean;
    /**
     * Optional; When present, set value into text area
     */
    value?: string;
    /**
     * Optional; When provided, callback function invoked when the input value changes
     */
    onUpdate?: (value: string) => void;
    /**
     * Optional; When provided, callback function invoked when user click on download
     */
    onDownload?: () => void;
    /**
     * Optional; When present, used as placeholder text for the input
     */
    placeholder?: string;
    /**
     * Optional; Render information message
     */
    helperText?: string | ReactNode;
    /**
     * Optional; Render error message
     */
    error?: string;
    /**
     * Optional; Render as a code snippet
     */
    htmlMode?: boolean;
    showToolbar?: boolean;
    /**
     * Optional; Feedback message type
     */
    feedbackType?: IFeedbackType;
    /**
     * Optional; When present, render character count
     */
    showCharacterCount?: boolean;
    /**
     * Optional; When present, adding custom style to label component
     */
    labelStyle?: CSSProperties;
    /**
     * Optional; When present, adding custom style to label component
     */
    helperStyle?: CSSProperties;
    /**
     * Optional; When present, adding custom style to container
     */
    containerStyle?: CSSProperties;
}
export default TextArea;
