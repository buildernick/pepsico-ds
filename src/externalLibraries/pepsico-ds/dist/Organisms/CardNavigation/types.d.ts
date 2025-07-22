import { default as React, DetailedHTMLProps, HTMLAttributes } from 'react';
import { ITabProps } from '../../Molecules/Tab';
import { ICardProps } from '../Card/Card';

export interface ICardNavigationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
    /**
     * The orientation of the navigation
     */
    orientation: ITabProps['orientation'];
    /**
     * The type of the navigation
     */
    type: ITabProps['type'];
    /**
     * The tabs to render in the navigation
     */
    data: {
        header: ITabProps;
        details: React.ReactElement<ICardProps>;
    }[];
}
