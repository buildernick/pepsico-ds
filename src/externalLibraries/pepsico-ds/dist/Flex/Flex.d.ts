import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';

export declare const Flex: FC<IFlexProps>;
interface IFlexProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
}
export default Flex;
