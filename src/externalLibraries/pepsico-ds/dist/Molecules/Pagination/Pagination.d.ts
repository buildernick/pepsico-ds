import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

/**
 * Pagination allows you to divide large amounts of content into smaller chunks across multiple pages.
 */
export declare const Pagination: FC<IPaginationProps>;
export interface IPaginationProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    /**
     * Optional; current page number
     * @default 1
     */
    currentPage?: number;
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     *  @default false
     */
    isDark?: boolean;
    /**
     * When provided, this handler is invoked w/ the updated selection index when a user changes the selection
     */
    onUpdate?: (newSelectedIndex: number) => void;
    /**
     * Optional; number of pages
     * @default 1
     */
    pageCount?: number;
    /**
     * Optional; render as either a number or a dot – default is "number"
     */
    variant?: 'number' | 'dot';
    /**
     * Optional; The size of the component
     * @default medium
     */
    size?: 'medium' | 'small';
}
export default Pagination;
