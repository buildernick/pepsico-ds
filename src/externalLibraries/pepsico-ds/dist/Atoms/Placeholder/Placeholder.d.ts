import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

/**
 * Used to visually hold the place of an image, prior to image load completion
 */
export declare const Placeholder: FC<IPlaceholderProps>;
export type ImageRatio = '1:1' | '1:2' | '4:3' | '5:7' | '16:9';
export interface IPlaceholderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
    /**
     * Optional; When provided, determines the ratio of the Placeholder visually; default is "1:1"
     */
    ratio?: ImageRatio;
}
export default Placeholder;
