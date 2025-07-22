import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { IAvatarProps } from '../../Atoms/Avatar';

export interface IAccordionV2Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
   * Visual presentation style of the accordion component.
   */
    presentation?: 'box-shadow' | 'border' | 'no-background';
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise.
     */
    isDark?: boolean;
    /**
     * Callback fired when the expand/collapse state is change.
     */
    onUpdate?: (newSelectedIndex: number) => void;
    /**
     * Optional; When present, sets the expand state of the accordion item at the specified index.
     */
    selectedItemIndex?: number;
    /**
    * Optional; When present, Show separator line between items.
    */
    separator?: boolean;
    /**
     * Optional; When present, show add button icon and call when add button is clicked
     */
    onClickAdd?: () => void;
    /**
     * Title text shown above the accordion
     */
    accordionTitle?: string;
}
/**
 * Props for the Accordion Item component.
 */
export interface IAccordionItemV2Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
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
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise.
     */
    isDark?: boolean;
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
     * Subtitle for the avatar.
     */
    subTitle?: string;
    /**
     * Optional; Callback fired when the expand/collapse state is changed.
     * @param selectedIndex The index of the selected item.
     */
    onUpdate?: (selectedIndex: number) => void;
    /**
     * Children of the accordion item.
     */
    children?: ReactNode;
    /**
     * Optional: show skeleton to display loading/shimmer effect.
     */
    showSkeleton?: boolean;
    /**
     * Optional. Specifies the image path or URL of the image to be used for the avatar.
     */
    imageUrl?: string;
    /**
     * Optional; When present, render child on the right side of accordion item.
     */
    rightAccessoryChild?: ReactNode;
    /**
     * When true, accordion item is rendered in disabled mode; normal render otherwise.
     * @default false
     */
    disabled?: boolean;
    /**
     * Visual presentation style of the accordion item
     */
    presentation?: 'box-shadow' | 'border' | 'no-background';
}
