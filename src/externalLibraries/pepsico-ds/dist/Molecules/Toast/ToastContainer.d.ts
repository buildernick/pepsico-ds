import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';

/**
 * Presents users with short, relevant information for search input
 */
export declare const ToastContainer: FC<IToastContainerProps>;
export interface IToastContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * Optional; The list to populate the Toasts.
     */
    data?: IToastProps[];
    /**
     * Optional; When provided, callback function invoked when the toast is removed
     */
    removeToast?: (id: number | undefined) => void;
    /**
     * Optional; Show cross icon in toast
     *  @default true
     */
    showActionIcon?: boolean;
    /**
    * Optional; Show the toast in top/bottom right position
    */
    position?: 'top-right' | 'bottom-right';
}
export interface IToastProps {
    id?: number;
    text?: string | ReactNode;
    type?: 'info' | 'success' | 'warning' | 'error';
    removeToast?: () => void;
    showActionIcon?: boolean;
    duration?: number;
}
export default ToastContainer;
