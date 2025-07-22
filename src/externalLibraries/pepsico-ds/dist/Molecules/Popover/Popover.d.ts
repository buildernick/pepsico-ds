import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';

export declare const Popover: FC<IPopoverProps>;
export interface IPopoverProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * Value to display for the popover control
     */
    text?: string;
    /**
     * Value for the direction the popover will open from the object.
     */
    direction?: 'left' | 'right' | 'top-left' | 'top-middle' | 'top-right' | 'bottom-left' | 'bottom-middle' | 'bottom-right';
    /**
     * Value for if we want to display the slot component.
     */
    showSlot?: boolean;
    /**
     * Value for if we want to show the Popover component.
     */
    showPopover?: boolean;
    /**
     * Optional; When provided, callback function invoked when the popover is closed or the cross icon is pressed
     */
    onClosePopover?: () => void;
    /**
     * Optional; When provided, a crossIcon (ReactNode) is displayed in the place of cancel icon.
     */
    crossIcon?: ReactNode;
}
export default Popover;
