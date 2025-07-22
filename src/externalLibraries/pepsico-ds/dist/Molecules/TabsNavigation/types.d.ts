import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ITabsNavigationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Optional; When true, rendered in disabled mode; normal render otherwise
     * @default false
     */
    disabled?: boolean;
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * Optional; When provided, callback function invoked when the selected tab changes
     */
    onUpdate?: (newIndex: number) => void;
    /**
     * Optional; When provided, sets active on the tab at the specified index; Default is -1
     */
    selectedIndex?: number;
    /**
     * Optional; When provided, sets the orientation of the tabs
     * @default 'horizontal'
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Optional; When provided, sets the type of the tabs
     * @default 'line'
     */
    type?: 'line' | 'shadow' | 'border';
    /**
     * Optional; When provided, show maximum visible tabs and hide other behind the dropdown.
     */
    maxVisibleTabs?: number;
}
