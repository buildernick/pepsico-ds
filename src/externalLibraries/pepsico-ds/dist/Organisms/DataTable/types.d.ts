import { default as React, ReactNode } from 'react';
import { CellContext, Column, Row } from '@tanstack/react-table';
import { IButtonProps } from '../../Atoms';
import { FilterProps } from '../../Molecules';

export interface IDataTableProps<T extends object> {
    /**
     * Required; column configuration for the table.
     * Sizes are stored in the table state as numbers, and are usually interpreted as pixel unit values.
     * @param {string} columnKey - Unique key for the column
     * @param {string | function} header - Header text or function to render header
     * @param {function} cellData - Function to render cell data
     * @param {string} columnAlignment - Alignment of the column; default is 'left'
     * @param {string} filterVariant - Type of filter to be applied to the column
     * @param {number} initialSize - Initial size of the column
     * @param {number} maxSize - Maximum size of the column
     * @param {number} minSize - Minimum size of the column
     */
    columns: Array<{
        columnKey: string;
        header: string | (() => React.ReactElement);
        cellData?: (ctx: CellContext<T, unknown>) => React.ReactElement;
        columnAlignment?: string;
        filterVariant?: 'text' | 'dropdown' | 'date' | 'dateRange';
        initialSize?: number;
        maxSize?: number;
        minSize?: number;
    }>;
    /**
     * Required; row data to be rendered in the table. Data keys should match column keys.
     */
    data: T[];
    /**
     * Enables/Disables sorting for the table.
     * @default true
     */
    enableSorting?: boolean;
    /**
     * Filters to be displayed above the table as global filters (max 5).
     * @param {string} label - Label for the filter component
     * @param {FilterItem[]} options - Options available for selection in the filter component
     * @param {FilterItem | FilterItem[]} value - default values to be set
     * @param {function} onChange - Allows the Parent to keep track of the state of the filter Value
     * @param {boolean} isDark - Determines if the dark theme is applied
     * @param {boolean} showSearch - Determines if the search functionality should be shown
     * @param {boolean} disabled - Determines if the filter component is disabled
     * @param {Selection} selection - Type of selection allowed, can be either 'single' or 'multiple'
     * @param {string} size - Size of the filter component, can be 'medium' or 'small'
     * @param {string} listLabel - Label for the Filter Menu List within the filter component
     * @param {string} primaryButtonText - Custom button name for primary button
     * @param {string} secondaryButtonText - Custom button name for secondary button
     */
    filters?: FilterProps[];
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise.
     */
    isDark?: boolean;
    /**
     * When true, DataTable is rendered with expandable rows.
     */
    isExpandable?: boolean;
    /**
     * Enables or disables column resizing for the column.
     */
    isResizable?: boolean;
    /**
     * Callback function to be called when a column filter is changed.
     */
    onColumnFiltersChange?: (value: unknown | undefined, type: 'text' | 'dropdown' | 'date' | 'dateRange' | undefined, columnKey: string) => void;
    /**
     * Callback function to be called when the global search changes.
     */
    onGlobalSearchChange?: (value: string) => void;
    /**
     * Addtional effect to be applied when changing pages in the table pagination.
     */
    onPageIndexChange?: (newSelectedIndex: number) => void;
    /**
     * The current page number.
     */
    pageIndex?: number;
    /**
     * The number of rows to display on a page.
     */
    pageSize?: number;
    /**
     * When expanding rows, this function is called to render the expanded content.
     */
    renderSubComponent?: (row: Row<T>) => ReactNode;
    /**
     * The updater function of the parent component's row selection state (using the useState hook)
     */
    rowSelectionStateUpdater?: (selectedRows: Row<T>[]) => void;
    /**
     * Helper text for the search input
     */
    searchPlaceholder?: string;
    /**
     * Row selection state
     */
    selection?: 'single' | 'multiple';
    /**
     * Initial state to show column filters.
     * @default true
     */
    showColumnFilters?: boolean;
    /**
     * Show filter button to display filter toolbar.
     * @default true
     */
    showFilterButton?: boolean;
    /**
     * Initial state to show filter toolbar.
     * @default false
     */
    showFilterToolbar?: boolean;
    /**
     * Show global actions bar with search, pagination and filtermenu.
     * @default true
     */
    showGlobalActions?: boolean;
    /**
     * DataTable size.
     */
    size?: 'large' | 'medium' | 'small';
    /**
     * Custom sorting function to be called when sorting is changed.
     */
    sortingHandler?: (sorting: {
        column: string;
        direction: 'asc' | 'desc';
    }[]) => void;
    /**
     * Description of the table.
     * @default ''
     */
    tableDescription?: string;
    /**
     * Header of the table.
     * @default ''
     */
    tableHeader?: string;
    /**
     * Actions to be displayed in the toolbar
     * @param {boolean} disabled - When true, the button is rendered in disabled mode;
     * @param {string} iconTrailing - When provided, renders a trailing icon (after button label) using this value and the Icon Atom
     * @param {string} iconLeading - When provided, renders a leading icon (before the label) using this value and the Icon Atom
     * @param {boolean} isDark - Render in dark mode if true; uses PaletteContext for value otherwise
     * @param {string} text - Value to display on button (or use child elements)
     * @param {string} size - Size of button; default (when not provided) is 'large'
     * @param {function} onClick - Function to be called when the button is clicked
     * @param {string} variant - Variant of the button; default (when not provided) is 'primary'
     * @param {boolean} isLoading - When true, the button is rendered in loading mode
     * @default []
     */
    toolbarActions?: IButtonProps[];
}
export interface ColumnFilterItemProps {
    column: Column<any, unknown>;
    isDark?: boolean;
    onFilterUpdate?: (value: unknown | undefined, type: 'text' | 'dropdown' | 'date' | 'dateRange', columnKey: string) => void;
}
