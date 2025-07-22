import { IBaseButtonProps } from '../../_common';

export interface IButtonIconProps extends IBaseButtonProps {
    /**
     * Render more icon if true;
     * @default false
     */
    isMore?: boolean;
    /**
     * Tooltip Label
     */
    label?: string;
}
