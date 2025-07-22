import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

export declare const Button: FC<IButtonProps>;
export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    /**
     * When true, button is rendered in disabled mode; normal render otherwise
     * @default false
     */
    disabled?: boolean;
    /**
     * When provided, renders a trailing icon (after button label) using this value and the Icon Atom
     */
    iconTrailing?: string;
    /**
     * When provided, renders a leading icon (before the label) using this value and the Icon Atom
     */
    iconLeading?: string;
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * Value to display on button (or use child elements)
     */
    text?: string;
    /**
     * Size of button; default (when not provided) is 'large'
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Variant of button; default is "primary"
     */
    variant?: 'primary' | 'secondary' | 'auxiliary' | 'tertiary' | 'danger' | 'primaryInverse' | 'secondaryInverse' | 'auxiliaryInverse' | 'tertiaryInverse' | 'dangerInverse';
    /**
     * When true, button is rendered in loading mode; normal render otherwise
     * @default false
     */
    isLoading?: boolean;
}
export default Button;
