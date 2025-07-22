/**
 * Represents an option item in the app switcher
 */
export interface Option {
    /** Unique identifier for the option */
    id?: string;
    /** Display title of the option */
    title?: string;
    /** Additional descriptive text for the option */
    description?: string;
    /** URL or path to the option's image/icon */
    image?: string;
}
/**
 * Props for the HeaderAppSwitcher component
 */
export interface AppSwitcherProps {
    /** Title text displayed at the top of the app switcher */
    header?: string;
    /** Controls whether the app switcher is displayed */
    open?: boolean;
    /** Callback function to control the open state */
    setOpen?: (open: boolean) => void;
    /** Array of options to display in the app switcher */
    options: Option[];
    /** Callback fired when an option is selected */
    onSelection?: (option: Option) => void;
    /** Whether to use dark theme styling */
    isDark?: boolean;
}
