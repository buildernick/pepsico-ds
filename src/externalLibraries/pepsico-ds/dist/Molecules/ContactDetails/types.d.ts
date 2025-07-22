import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IContactDetailLink {
    text: string;
    link?: string | undefined;
    style?: CSSProperties | undefined;
}
export interface IContactDetailsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
    /**
     * Title to display
     */
    title?: string;
    /**
     * Subtitle to display
     */
    subtitle?: string;
    /**
     * Text to display
     */
    text?: string;
    /**
     * Links to be displayed in cards
     */
    links?: IContactDetailLink[];
    /**
     * Use to identify pin/unpin card
     */
    isPin?: boolean;
    /**
     * Optional; When provided, callback function invoked when click on pin/unpin icon
     */
    onPinChange?: (value: boolean) => void;
    /**
     * Boolean to set selected, the border becomes blue
     */
    selected?: boolean;
}
