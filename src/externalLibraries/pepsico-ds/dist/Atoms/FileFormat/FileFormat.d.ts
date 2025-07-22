import { FC } from 'react';
import { IIconProps } from '../Icon';

/**
 * Works similar to &lt;Icon&gt; Atom, but limited to specific file types
 */
export declare const FileFormat: FC<IFileFormatProps>;
export type Format = 'doc' | 'pdf' | 'ppt' | 'video' | 'xls';
export interface IFileFormatProps extends Omit<IIconProps, 'alt' | 'disabled' | 'fontSize' | 'fontWeight' | 'icon' | 'svg' | 'variant'> {
    format: Format;
}
export default FileFormat;
