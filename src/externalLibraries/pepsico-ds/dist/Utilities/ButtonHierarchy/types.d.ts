import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IButtonHierarchyProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Array of Buttons to render
     * Maximum number of items is 4
     */
    items: [IButtonHierarchyItemProps?, IButtonHierarchyItemProps?, IButtonHierarchyItemProps?, IButtonHierarchyItemProps?];
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * Size of buttons; default (when not provided) is 'large'
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Type of button hierarchy to render
     * @default 'Primary'
     */
    type?: 'primary' | 'inverse' | 'danger';
    /**
     * Prop to render primary/error/primaryInverse button based on hierarchy type
     * @default true
     */
    primary?: boolean;
    /**
     * Prop to render secondary/secondaryInverse button based on hierarchy type
     * @default true
     */
    secondary?: boolean;
    /**
     * Prop to render tertairy/tertairyInverse button based on hierarchy type
     * @default true
     */
    tertairy?: boolean;
    /**
     * Prop to render auxiliary/auxiliaryInverse button based on hierarchy type
     * @default true
     */
    auxiliary?: boolean;
}
export interface IButtonHierarchyItemProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    /** type of button to render */
    buttonType: 'primary' | 'secondary' | 'auxiliary' | 'tertiary' | 'danger';
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
    * Value to display on button (or use child elements)
    */
    text?: string;
    /**
    * When true, button is rendered in loading mode; normal render otherwise
    * @default false
    */
    isLoading?: boolean;
}
