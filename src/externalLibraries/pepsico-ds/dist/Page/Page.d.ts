import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';

export declare const Page: FC<IPageProps>;
interface IPageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
}
export default Page;
