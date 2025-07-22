import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

export declare const ProgressIndicator: FC<IProgressIndicatorProps>;
export interface IProgressIndicatorTitles {
    title?: string;
    description?: string;
}
export interface IProgressIndicatorProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Optional; When provided, determines the number of steps to render; default is 2
     */
    steps?: 2 | 3 | 4 | 5;
    /**
     * Optional; One-based; When provided, determines the current step to render; default is 1
     */
    currentStep?: 1 | 2 | 3 | 4 | 5;
    /**
     * Optional; When provided, it will show step title, array length should be same as steps count
     */
    titles?: IProgressIndicatorTitles[];
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
    /**
     * Optional: When provided, it will show the current step as a completed step
     */
    completed: boolean;
    /**
     * Optional; When present, render step number
     */
    showStepNumber?: boolean;
    orientation?: 'horizontal' | 'vertical';
}
export default ProgressIndicator;
