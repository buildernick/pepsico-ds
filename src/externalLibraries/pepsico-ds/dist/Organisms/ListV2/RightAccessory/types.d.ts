import { IAvatarProps, ILinkProps, ITagProps, IToggleProps, IButtonIconProps, IButtonProps } from '../../../Atoms';

export interface RightAccessoryProps {
    /** Props for the tag component */
    tagProps?: ITagProps;
    /** Props for the icon button component */
    iconButtonProps?: IButtonIconProps;
    /** Props for the link component */
    linkProps?: ILinkProps;
    /** Props for the toggle component */
    toggleProps?: IToggleProps;
    /** Props for the button component */
    buttonProps?: IButtonProps;
    /** Whether to show skeleton loading state */
    skeleton?: boolean;
    /** Props for the avatar component */
    avatar?: IAvatarProps;
    /** Whether dark mode is enabled */
    isDark?: boolean;
    /** Whether the component is disabled */
    disabled?: boolean;
    /** Title text to display */
    title?: string;
    /** Detail text to display */
    detail?: string;
}
