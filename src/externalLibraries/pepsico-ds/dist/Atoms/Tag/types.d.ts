import { DetailedHTMLProps, HTMLAttributes, MouseEventHandler, ReactNode } from 'react';

export type TagColor = 'Cyan-500' | 'Cyan-700' | 'Gray-100' | 'Gray-500' | 'Green-150' | 'Green-600' | 'Orange-150' | 'Orange-400' | 'Red-150' | 'Red-600' | 'Yellow-150' | 'Yellow-400' | 'Auxiliary-300' | 'Auxiliary-600';
export interface ITagProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    /**
     * color of tag
     */
    color?: TagColor;
    /**
     * The text contents of the tag
     */
    text?: string | ReactNode;
    /**
     * 	Whether the tag can be closed or not
     * 	@default false
     */
    isRemovable?: boolean;
    /**
     * 	Whether the tag can be closed or not
     * 	@default false
     */
    isCopyable?: boolean;
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * Default when not provided is 'large'
     * @default large
     */
    size?: 'large' | 'small';
    /**
     * Optional; when provided, this handler is invoked when a user clicks the 'x' to remove the tag
     */
    onRemove?: MouseEventHandler<HTMLSpanElement>;
    /**
     * Variant of button; default (when not provided) is 'filled'
     */
    type?: 'filled' | 'outlined';
    /**
     * When provided, renders a leading icon (before the label) using this value and the Icon Atom
     */
    iconLeading?: string;
}
