import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { IButtonProps, ILinkProps } from '../../Atoms';
import { IDropdownProps } from '../../Molecules';

/**
 * A card component that can be used to display information in a consistent manner
 */
export declare const Card: FC<ICardProps>;
export interface ICardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * When true, renders a border around the card
     * @default false
     */
    border?: boolean;
    /**
     * When true, renders an ellipsis icon in the top right of the card
     * @default true
     */
    ellipsis?: boolean;
    /**
     * Callback for when the ellipsis is clicked
     */
    onEllipsisClick?: () => void;
    dropdownProps?: IDropdownProps;
    /**
     * The icon to display at the top right of the card
     */
    icon?: string;
    /**
     * Callback for when the icon is clicked
     */
    onIconClick?: () => void;
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    linkProps?: ILinkProps;
    primaryButtonProps?: IButtonProps;
    secondaryButtonProps?: IButtonProps;
    tertiaryButtonProps?: IButtonProps;
    /**
     * The title of the card
     */
    title?: string;
}
export default Card;
