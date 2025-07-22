import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

/**
 * Represents the props for the DatePickerInput component.
 */
/**
 * Represents the props for the InputItem component.
 */
export interface InputItemProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    /**
     * Specifies whether the component should be displayed in dark mode.
     */
    isDark?: boolean;
    /**
     * Callback function that is called when the value of the input is updated.
     * @param value - The updated value of the input.
     */
    onUpdate?: (value: string) => void;
    /**
     * Specifies the size of the input.
     */
    inputSize?: 'medium' | 'small';
    /**
     * Specifies whether the input should be read-only.
     */
    readOnly?: boolean;
    /**
     * Specifies the name of the trailing icon to be displayed.
     */
    trailingIcon?: string;
    /**
     * Specifies whether the input should be displayed as a skeleton (loading state).
     */
    skelton?: boolean;
    /**
     * Specifies whether the input has an error.
     */
    error?: boolean;
}
