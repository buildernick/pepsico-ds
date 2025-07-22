import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IButtonProps } from '../../Atoms';

export interface IOnboardingPopoverProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * Value to display for the onboarding popover title
     */
    title?: string;
    /**
     * Value to display for the onboarding popover description
     */
    description?: string;
    /**
     * Value to display for the onboarding popover steps
     */
    steps?: string;
    /**
     * Value for the direction the onboarding popover arrow will display.
     */
    direction?: 'top' | 'bottom' | 'left' | 'right';
    /**
     * Value for if we want to show the onboarding Popover component.
     */
    showPopover?: boolean;
    /**
     * Optional; When provided, callback function invoked when the onboarding popover is closed or the cross icon is pressed
     */
    onClosePopover?: () => void;
    /**
     * Secondary Button Props to display in footer
     */
    secondaryButtonProps?: IButtonProps;
    /**
     * Primary Button Props to display in footer
     */
    primaryButtonProps?: IButtonProps;
    /**
     * Top Image url or path
     */
    imageUrl?: string;
}
