import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { IButtonProps, ILinkProps } from '../../Atoms';

export type EmptyStateType = 'no_data' | 'loading_error' | 'loading_data' | 'success';
export interface IEmptyStateProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * A title text/
     */
    titleContent?: string | ReactNode;
    /**
     * A helper text to display under the InfoCard header
     */
    helperText?: string | ReactNode;
    /**
     * The type and contents of the InfoCard
     */
    type?: EmptyStateType;
    primaryButtonProps?: IButtonProps;
    secondaryButtonProps?: IButtonProps;
    linkProps?: ILinkProps;
    /**
     * The type and contents of the InfoCard
     */
    iconContent?: ReactNode;
}
