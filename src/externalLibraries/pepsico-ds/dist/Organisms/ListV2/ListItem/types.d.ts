import { IAvatarProps, IIconProps, IContentGroupProps } from '../../../Atoms';
import { default as React } from 'react';

export interface ImageProps {
    source: string;
    width: string;
    height: string;
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}
export interface ListItemProps {
    /**
     * Unique identifier for the list item
     */
    id: string;
    /**
     * Whether the item is selected
     * @default false
     */
    selected?: boolean;
    /**
     * Visual presentation style of the list item
     * @default inherited from List
     */
    presentation?: 'box-shadow' | 'border' | 'no-background';
    /**
     * Show loading skeleton state
     * @default false
     */
    skeleton?: boolean;
    /**
     * The content group properties for the item
     */
    contentGroup: IContentGroupProps;
    /**
     * navigation icon to be shown
     */
    showNavigationIcon?: boolean;
    /**
     * Whether the item is disabled/non-interactive
     * @default false
     */
    disabled?: boolean;
    /**
     * Right Accessory props
     */
    rightAccessory?: React.ReactNode;
    /**
     * URL of an image to display
     */
    imageProps?: ImageProps;
    /**
     * Whether to use dark theme styling
     * @default inherited from List
     */
    isDark?: boolean;
    /**
     * Show separator line between items
     * @default inherited from List
     */
    separator?: boolean;
    /**
     * Callback when item is clicked
     */
    onClick?: () => void;
    /**
     * Whether to show a radio button for the item
     * @default false
     */
    showRadio?: boolean;
    /**
     * Whether to show a checkbox for the item
     * @default false
     */
    showCheckBox?: boolean;
    /**
     * Props for displaying an avatar
     */
    avatarProps?: IAvatarProps;
    /**
     * Props for displaying an icon
     */
    iconProps?: IIconProps;
}
