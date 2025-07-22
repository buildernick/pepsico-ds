import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

/**
 * Used to group multiple selections. The controls display the current state and related state.
 */
export declare const Switcher: FC<ISwitcherProps>;
export interface ISwitcherProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
    /**
     * Items available to switch between (e.g. "Recent Events", "Today", "Future Events")
     */
    items: string[];
    /**
     * When provided, this handler is invoked w/ the updated selection index when a user changes the selection
     */
    onUpdate?: (newSelectedIndex: number) => void;
    /**
     * Optional; When present, sets `checked` on the switcher item at the specified index; default is 0
     */
    selectedItemIndex?: number;
}
export default Switcher;
