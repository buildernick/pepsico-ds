interface PaginationOptions {
    pageCount: number;
    currentPage: number;
}
export declare const usePagination: ({ pageCount, currentPage, }: PaginationOptions) => (string | number)[];
export {};
