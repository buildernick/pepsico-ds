import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';

export interface IGridProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
    xxxlarge?: number;
    xxlarge?: number;
    xlarge?: number;
    large?: number;
    medium?: number;
    small?: number;
}
export declare const Grid: FC<IGridProps>;
export default Grid;
