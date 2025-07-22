import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';

/**
 * Presents users with short, relevant information
 */
export declare const Feedback: FC<IFeedbackProps>;
export type IFeedbackType = 'info' | 'error' | 'warning' | 'validated';
export interface IFeedbackProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * When present, used as message for the input
     */
    message?: string | ReactNode;
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
    /**
     * Optional; When present, mark the input as disabled
     */
    disabled?: boolean;
    /**
     * Optional; default (when not provided) is 'medium'
     */
    variant?: IFeedbackType;
}
export default Feedback;
