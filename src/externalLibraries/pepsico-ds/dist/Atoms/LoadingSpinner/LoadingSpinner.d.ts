import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

/**
 * Visual element used to convey a pending action or data retrieval
 */
export declare const LoadingSpinner: FC<ILoadingSpinnerProps>;
export type IRotationalSpeed = 'slow' | 'medium' | 'fast';
export interface ILoadingSpinnerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Optional; When true, loader will display in center of viewport on top of all other layers; default is false
     */
    fullscreen?: boolean;
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
    /**
     * Optional; When provided, determines the rotational speed of the loading spinner; default is "medium"
     */
    speed?: IRotationalSpeed;
    /**
     * Optional; When provided, determines the size of the spinner
     */
    size?: {
        height: string;
        width: string;
    };
}
export default LoadingSpinner;
