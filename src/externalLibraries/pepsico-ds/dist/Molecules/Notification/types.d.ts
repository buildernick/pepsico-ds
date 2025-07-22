import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export declare enum NotificationType {
    INFO = "info",
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "error"
}
/**
 * Represents a notification component.
 */
export interface INotificationProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, 'title'> {
    /**
     * The type of the notification.
     */
    type: NotificationType;
    /**
     * The title of the notification. It can be string or ReactNode.
     */
    title: string | ReactNode;
    /**
     * Optional; The text content of the notification.
     */
    text?: string;
    /**
     * Optional; The label for the primary action button.
     */
    primaryActionLabel?: string;
    /**
     * Optional; The callback function for the primary action button click event.
     */
    primaryActionOnClick?: () => void;
    /**
     * Optional; The label for the secondary action button.
     */
    secondaryActionLabel?: string;
    /**
     * Optional; The callback function for the secondary action button click event.
     */
    secondaryActionOnClick?: () => void;
    /**
     * Optional; Indicates whether the notification is in dark mode.
     * @default false
     */
    isDark?: boolean;
}
