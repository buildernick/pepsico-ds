import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { IAvatarProps } from '../../Atoms/Avatar';
import { ITagProps } from '../../Atoms/Tag/types';

export interface IAccordionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * If true, expands all accordions.
     */
    expandAll?: boolean;
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
    /**
     * Callback fired when the expand/collapse state is change
     */
    onUpdate?: (newSelectedIndex: number) => void;
    /**
     * Optional; When present, sets the active state of the accordion item at the specified index
     */
    selectedItemIndex?: number;
    /**
     * default when not provided is 'large'
     */
    size?: 'xlarge' | 'large' | 'medium' | 'small';
    /**
     * Align accordion icon left or right of text.
     */
    alignment?: 'right' | 'left';
    /**
     * Default when no provided is "enable"
     */
    state?: 'enable' | 'disabled';
}
/**
 * Props for the Accordion item component.
 */
export interface IAccordionItemProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'key'> {
    /**
     * Optional; When true, expands the accordion, otherwise collapse it. Setting this prop enables control over the accordion.
     */
    expanded?: boolean;
    /**
     * Optional; Include an icon on the left side of the item.
     */
    icon?: string;
    /**
     * Optional; Index of the item.
     */
    index?: number;
    /**
     * Optional; When true, highlights the SideNav.
     */
    isActive?: boolean;
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise.
     */
    isDark?: boolean;
    /**
     * Optional; When present, used as key for item (React optimization); generated internally otherwise.
     */
    key?: string;
    /**
     * Optional; Value to display on link.
     */
    label?: string | ReactNode;
    /**
     * @optional Variation in accordion avatar, subtitle, label.
     * Avatar component to render.
     */
    avatar?: IAvatarProps;
    /**
     * Label for the avatar.
     */
    badge?: ITagProps;
    /**
     * Subtitle for the avatar.
     */
    subTitle?: string;
    /**
     * Optional; Callback fired when the expand/collapse state is changed.
     * @param selectedIndex The index of the selected item.
     */
    onUpdate?: (selectedIndex: number) => void;
    /**
     * Optional; Size of accordion; default (when not provided) is 'large'.
     */
    size?: 'xlarge' | 'large' | 'medium' | 'small';
    /**
     * Align accordion icon left or right of text.
     */
    alignment?: 'right' | 'left';
    /**
     * Default when not provided is "enable".
     */
    state?: 'enable' | 'disabled';
    /**
     * Children of the accordion item.
     */
    children?: ReactNode;
}
