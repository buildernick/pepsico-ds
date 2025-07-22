import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

/**
 * Optional placeholder component. Replace it with any component instance or hide it if not needed.
 */
export declare const Slot: FC<ISlotProps>;
export interface ISlotProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Optional; When provided, renders string in detail area of slot
     */
    detail?: string;
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
    /**
     * Optional; When provided, renders string in title area of slot
     */
    title?: string;
}
export default Slot;
