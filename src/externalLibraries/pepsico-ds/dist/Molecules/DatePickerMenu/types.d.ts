import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BaseMenuProps<T extends 'single' | 'range'> extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    type?: T;
    isDark?: boolean;
    disabled?: {
        beforeDate?: Date;
        afterDate?: Date;
        weekends?: boolean;
    };
    onlySelectFrom?: Date[];
    disabledDates?: Date[];
}
export interface DateRange {
    from: Date;
    to?: Date;
}
export interface SingleDateMenuPicker extends BaseMenuProps<'single'> {
    selectedDate?: Date;
    setSelectedDate: (date: Date) => void;
}
export interface RangeDateMenuPicker extends BaseMenuProps<'range'> {
    selectedRange?: DateRange;
    setSelectedRange: (from: Date, to?: Date) => void;
}
export type DatePickerMenuProps = SingleDateMenuPicker | RangeDateMenuPicker;
