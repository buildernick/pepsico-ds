import { IPopoverProps } from '../../Molecules/Popover/Popover';

export interface HeaderNotification {
    id: string;
    title: string;
    description: string;
    date: Date;
    image?: React.ReactNode;
    isRead: boolean;
}
export interface IHeaderNotificationPanelProps {
    title: string;
    popOverDirection: IPopoverProps['direction'];
    /**
     * Options array of Notification (Notification props) representing the options for Notification Menu
     */
    notifications?: HeaderNotification[];
    /**
     * onClose function to control the dropdown open state
     */
    setOpen?: (isOpen: boolean) => void;
    /**
     * Controls whether the dropdown is open
     */
    open?: boolean;
    /**
     * Is Dark Prop for Dark Mode
     */
    isDark?: boolean;
    /**
     * onUpdate Function for list
     */
    onClick: (id: string) => void;
    /**
     * onReadAll Function for read all
     */
    onReadAll?: () => void;
    /**
     * onDismissAll Function for dismiss all
     */
    onDismissAll?: () => void;
    /**
     * onUpdate Function for list
     */
    onDismiss: (id: string) => void;
}
export interface IHeaderNotificationItemProps {
    isDark: boolean;
    notification: HeaderNotification;
    onClick: (id: string) => void;
    onDismiss: (id: string) => void;
}
