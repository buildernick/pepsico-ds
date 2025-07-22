import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

/**
 * A progress bar provides feedback about the duration and progression of a process, such as a download, file transfer, or installation, to indicate how long a user will be waiting
 */
export declare const ProgressBar: FC<IProgressBarProps>;
export interface IProgressBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
    /**
     * Optional; When present, used as label for the title
     */
    label?: string;
    /**
     * Optional: When present, it is used as the label on the left side to display text.
     */
    startLabel?: string;
    /**
     * Optional: When present, it is used as the label on the right side to display text.
     */
    endLabel?: string;
    /**
     * Optional; default (when not provided) is 'medium', Specify the size of the progress bar.
     */
    size?: 'medium' | 'small';
    /**
     * Optional; default (when not provided) is 'active'
     */
    status?: 'active' | 'success' | 'error' | 'warning';
    /**
     * Optional; When it present, used as progress value for determinate, default (when not provided) is 0,
     */
    value?: number;
    /**
     * Optional; When it present, used as progress max value for determinate, default (when not provided) is 100,
     */
    max?: number;
    /**
     * Optional; A progress bar can either be determinate or indeterminate. The determinate variant is visualized as a track on which a bar fills up from left to right representing the progress. The indeterminate variant is visualized as a track on which a bar is moving along in constant speed, repeating over time. default (when not provided) is determinate,
     */
    variant?: 'determinate' | 'indeterminate';
}
export default ProgressBar;
