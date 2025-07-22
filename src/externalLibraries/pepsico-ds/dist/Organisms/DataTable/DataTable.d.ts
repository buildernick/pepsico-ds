import { RowData } from '@tanstack/react-table';
import { IDataTableProps } from './types';

declare module '@tanstack/react-table' {
    interface ColumnMeta<TData extends RowData, TValue> {
        columnAlignment?: string;
        filterVariant?: 'text' | 'dropdown' | 'date' | 'dateRange';
    }
}
/**
 * DataTables are used to organize and display data efficiently.
 */
export declare const DataTable: <T extends object>({ columns, data, enableSorting, filters, isDark: darkOverride, isExpandable, isResizable, onColumnFiltersChange, onGlobalSearchChange, onPageIndexChange, pageIndex, pageSize, renderSubComponent, rowSelectionStateUpdater, searchPlaceholder, selection, showColumnFilters, showFilterButton, showFilterToolbar, showGlobalActions, size, tableDescription, tableHeader, toolbarActions, sortingHandler, ...props }: IDataTableProps<T>) => import("react/jsx-runtime").JSX.Element;
export default DataTable;
