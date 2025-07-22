import { Meta, StoryObj } from '@storybook/react';
import { DataTable } from '.';

declare const meta: Meta<typeof DataTable>;
export default meta;
type Story = StoryObj<typeof DataTable>;
export declare const Default: Story;
export declare const LargeDataSet: Story;
export declare const ColumnsFiltersActions: Story;
export declare const SingleSelection: Story;
export declare const MultipleSelection: Story;
export declare const DefaultExpandable: Story;
export declare const NoFiltersAndNoActions: Story;
export declare const ResizableTable: Story;
export declare const TableWithNoFilters: Story;
export declare const TableWithFilterToolbar: Story;
export declare const TableWithNoSorting: Story;
export declare const DefaultDark: Story;
