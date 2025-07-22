import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { DateRange } from '../DatePickerMenu';
import { DatePickerMenuProps } from '../DatePickerMenu/types';

export interface DateRangePickerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isDark?: boolean;
    label?: string;
    placeholder?: string;
    size: 'medium' | 'small';
    required?: boolean;
    loading?: boolean;
    selectedDateRange?: DateRange;
    onSelectDateRange: (dateRange: DateRange) => void;
    datePickerMenu?: Pick<DatePickerMenuProps, 'disabled' | 'disabledDates' | 'onlySelectFrom'>;
}
export interface IDateRangePickerHandle {
    openMenu: () => void;
    closeMenu: () => void;
    input: HTMLInputElement | null;
}
