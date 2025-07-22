import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

export interface IAvatarProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
    /**
     * Optional. If true, the avatar is displayed in a disabled state. Otherwise, it is displayed normally.
     */
    disabled?: boolean;
    /**
     * Optional. If provided and the avatar is not disabled, clicking on the avatar will trigger this callback function.
     */
    onClick?: () => void;
    /**
     * Optional. Specifies the image path or URL of the image to be used for the avatar. If not provided, a default image is used.
     */
    imageUrl?: string;
    /**
     * Optional. If provided, the first two characters of the name are displayed on the avatar. Useful for initials.
     */
    name?: string;
    /**
     * Optional. Determines the size of the avatar. Can be either 'small' or 'large'.
     */
    size?: 'xSmall' | 'small' | 'medium' | 'large';
    /**
     * Optional: show skeleton to display loading/shimmer effect.
     */
    showSkeleton?: boolean;
    /**
     * Optional: set the style of avatar.  Can be either 'circle' or 'square'.
     */
    avatarStyle?: 'circle' | 'square';
    /**
     * Optional: set the type of avatar.  Can be either 'image' or 'icon' or 'text'.
     */
    type?: 'image' | 'icon' | 'text';
    /**
     * Optional: set the type of icon if avatar type is icon.  Can be either 'person' or 'business'.
     */
    iconType?: 'person' | 'business';
    /**
     * Optional. If true, the avatar is displayed with Edit Pencil Icon (only for large size).
     */
    showEditIcon?: boolean;
    /**
     * Optional: set the type of avatar status.  Can be either 'online' or 'offline' or 'notAvailable'.
     */
    status?: 'online' | 'offline' | 'notAvailable';
    /**
     * Optional. If true, the avatar is displayed with status icon.
     */
    showStatus?: boolean;
    /**
     * Optional. If true, the avatar is displayed with dropdown icon.
     */
    showArrowIcon?: boolean;
    /**
     * Optional. If provided and the avatar is not disabled, clicking on the avatar arrow will trigger this callback function.
     */
    onClickArrow?: () => void;
    /**
     * Optional. If true, a tooltip will be displayed below avatar on hover.
     */
    showTooltip?: boolean;
}
