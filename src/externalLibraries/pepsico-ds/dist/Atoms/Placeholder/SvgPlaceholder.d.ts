import { FC } from 'react';
import { ImageRatio } from './Placeholder';

export declare const SvgPlaceholder: FC<ISvgPlaceholderProps>;
export interface ISvgPlaceholderProps {
    /**
     * Optional; When provided, determines the ratio of the Placeholder visually; default is "1:1"
     */
    ratio?: ImageRatio;
}
