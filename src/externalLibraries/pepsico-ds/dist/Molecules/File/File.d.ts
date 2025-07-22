import { default as React, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { IFeedbackType } from '../../Atoms';

export interface IFileHandle {
    openFileDialog: () => void;
    resetFileInput: () => void;
    input: HTMLInputElement | null;
}
/**
 * Presents users with short, relevant information
 */
export declare const File: React.ForwardRefExoticComponent<Omit<IFileProps, "ref"> & React.RefAttributes<IFileHandle>>;
export interface IFileProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    /**
     * Optional; When present, used as label
     */
    label?: string;
    /**
     * Optional; When present, used as description
     */
    description?: string;
    /**
     * Optionally, pass comma-separated file extensions to be accepted for upload. Include any file extension prefixed with a dot (.), such as .txt, .pdf, .png, .jpg, etc.
     */
    accept?: string;
    /**
     * Optional; When present, used as label for a button text
     */
    buttonLabel?: string;
    /**
     * Optional; When provided, callback function invoked when the file value changes
     */
    onUpdate?: (file: File) => void;
    /**
     * Optional; When provided, callback function invoked when the file value changes
     */
    onDelete?: (index: number) => void;
    /**
     * Optional; When provided, callback function invoked when invalid file format
     */
    onFileError?: (error: string) => void;
    /**
     * Optional: When provided, the callback function is invoked to validate the input file before triggering onUpdate.
     */
    onValidateFile?: (file: File) => boolean;
    /**
     * Optional; When present, used as progress value
     */
    progressPerc?: number;
    /**
     * Optional; Render files name
     */
    files?: string[];
    /**
     * Optional; default (when not provided) is 'medium'
     */
    variant?: 'default' | 'edit' | 'uploading' | 'complete';
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
    /**
     * Optional; When present, mark the input/file as disabled
     */
    disabled?: boolean;
    /**
     * Optional; When present, mark the input/file as required
     */
    required?: boolean;
    /**
     * Optional; Render information message
     */
    helperText?: string;
    /**
     * Optional; Feedback message type
     */
    feedbackType?: IFeedbackType;
    /**
     * Optional; File type, default will be document type
     */
    type?: 'image' | 'single' | 'multiple';
    /**
     * Optional: Image URL, if the type is 'image', to display the uploaded image with a replace button.
     */
    imageUri?: string;
    /**
     * Optional: file drag and drop/image container class names.
     */
    containerClassName?: string;
    /**
     * Optional: show skeleton to display loading/simmer effect
     */
    showSkeleton?: boolean;
}
export default File;
