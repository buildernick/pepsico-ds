import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';

export declare const Column: FC<IColumnProps>;
interface IColumnProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
    size: 'full' | 'half' | 'quarter' | 'eighth' | 'sixteenth';
}
export default Column;
