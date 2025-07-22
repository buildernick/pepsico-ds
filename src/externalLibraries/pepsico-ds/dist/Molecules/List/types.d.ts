import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IRadioProps, ILinkProps, ITagProps, IButtonProps } from '../../Atoms';

export interface IListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * Optional; Determines the type of modal
     * @default default
     */
    type?: 'header' | 'row' | 'select';
    /**
     * Title for the List Item
     */
    title: string;
    /**
     * Text for the List Item
     */
    text?: string;
    /**
     * Optional; Tertiary Button Props (e.g Button component Props)
     * @default {
      iconTrailing: 'chevron_right',
      size: 'small',
      text: 'Button',
      variant: 'tertiary',
      onClick: () => console.log('tertiary button clicked'),
    }
     */
    tertiaryButtonProps?: IButtonProps;
    /**
     * separator for the List header
     */
    separator?: boolean;
    /**
     * leadingIconProps object for the List header
     */
    leadingIconProps?: IconProps;
    /**
     * trailingIconProps object for the List header
     */
    trailingIconProps?: IconProps;
    /**
     * boolean to show button for header
     */
    showTertiaryButton?: boolean;
    /**
     * Radio Button props object for the List select
     */
    radioButtonProps?: IRadioProps;
    /**
     * Tag props object for the List select
     */
    badgeProps?: ITagProps;
    /**
     * boolean to show badge for List select
     */
    showBadge?: boolean;
    /**
     * details to show for List row and select
     */
    details?: string;
    /**
     * avatarProps object for List row
     */
    avatarProps?: IconProps;
    /**
     * boolean to show dot icon in List row
     */
    showDotIcon?: boolean;
    /**
     * deleteIconProps object for List row
     */
    deleteIconProps?: IconProps;
    /**
     * downloadIconProps object for List row
     */
    downloadIconProps?: IconProps;
    /**
     * linkProps object for List row
     */
    linkProps?: ILinkProps;
    /**
     * boolean to show link in List row
     */
    showLink?: boolean;
    /**
     * link2Props object for List row
     */
    link2Props?: ILinkProps;
    /**
     * boolean to show link 2 in List row
     */
    showLink2?: boolean;
    /**
     * Optional; When present, render right Image Placeholder
     */
    ImagePlaceholder?: React.ReactNode;
    /**
     * Footer text for the List Row
     */
    footerText?: string;
}
export interface IconProps {
    icon?: string;
    showIcon?: boolean;
    onClick?: () => void;
}
