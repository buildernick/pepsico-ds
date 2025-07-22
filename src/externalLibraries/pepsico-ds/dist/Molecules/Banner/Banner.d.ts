import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { ILinkProps, IButtonProps } from '../../Atoms';

declare const Banner: FC<IBannerProps>;
export default Banner;
export interface IBannerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Boolean to set active, the border becomes bluer
     */
    active?: boolean;
    /**
     * Button to display
     */
    buttonProps?: IButtonProps;
    /**
     * Details to display
     */
    details?: string;
    /**
     * Link to display
     */
    linkProps?: ILinkProps;
    /**
     * Subtitle to display
     */
    subtitle?: string;
    /**
     * Text to display
     */
    text?: string;
    /**
     * Title to display
     */
    title?: string;
    /**
     * Boolean to show or hide button
     */
    showButton?: boolean;
    /**
     * Boolean to show or hide details
     */
    showDetails?: boolean;
    /**
     * Boolean to show or hide link
     */
    showLink?: boolean;
    /**
     * Boolean to show or hide subtitle
     */
    showSubtitle?: boolean;
    /**
     * Boolean to show or hide text
     */
    showText?: boolean;
    /**
     * Boolean to show or hide title
     */
    showTitle?: boolean;
    /**
     * Size of the banner
     */
    size?: 'small' | 'large';
}
