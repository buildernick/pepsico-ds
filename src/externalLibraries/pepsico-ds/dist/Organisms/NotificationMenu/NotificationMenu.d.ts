import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { IPopoverProps } from '../../Molecules/Popover/Popover';
import { IListProps } from '../../Molecules/List/types';
import { IButtonProps } from '../../Atoms/Button/index';

/**
 * Presents users with short, relevant information
 */
export declare const NotificationMenu: FC<NotificationMenuIProps>;
export interface NotificationMenuIProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * An array of IListProps (List props) representing the options for Notification Menu.
     */
    options?: IListProps[];
    /**
     * popoverProps object to show the popover component.
     */
    popoverProps?: IPopoverProps;
    /**
     * bottomButtonProps object to show the bottom button.
     */
    bottomButtonProps?: IButtonProps;
    /**
     * When provided, this handler is invoked when a user changes the selection.
     */
    onUpdate?: (newSelectedIndex: number) => void;
}
export default NotificationMenu;
