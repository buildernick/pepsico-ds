import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6 | 'medium4' | 'medium5' | 'medium6';
export declare const Font: FC<IFontProps>;
export interface IFontProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    children: ReactNode;
    /**
     * Determines font size when `headingLevel` is undefined; Default = 'body'
     */
    size?: 'body' | 'small' | 'xsmall' | 'xxsmall';
    /**
     * When set, renders font styled as a heading of equivalent prevalence
     */
    headingLevel?: HeadingLevel;
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
    /**
     * Determines font style when `headingLevel` is undefined; Default = 'regular'
     */
    variant?: 'regular' | 'bold' | 'caps' | 'medium';
    /**
     * When set, it will use this class instead of primary text color class
     */
    textColorClass?: string | undefined;
}
export {};
