import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';

export declare const Item: FC<IItemProps>;
interface IItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
    xxxlarge?: number;
    xxlarge?: number;
    xlarge?: number;
    large?: number;
    medium?: number;
    small?: number;
}
export default Item;
