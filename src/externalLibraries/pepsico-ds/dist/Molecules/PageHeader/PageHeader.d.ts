import { default as React, DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { IButtonProps } from '../../Atoms';

/**
 * Presents users with short, relevant information
 */
export declare const PageHeader: FC<IPageHeaderProps>;
export interface IPageHeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
    /**
     * Optional; When present, used as title
     */
    title?: string;
    /**
     * Optional; When present, render icon
     */
    icon?: string;
    /**
     * Optional; When present, used as secondary button props
     */
    primaryButton?: IButtonProps;
    /**
     * Optional; When present, used as secondary button props
     */
    secondaryButton?: IButtonProps;
    /**
     * Optional; When present, render right toolbar component
     */
    toolbar?: React.ReactNode;
}
export default PageHeader;
