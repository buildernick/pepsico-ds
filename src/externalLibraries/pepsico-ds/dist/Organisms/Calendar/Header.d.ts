import { default as React } from 'react';
import { EventCategoryConfig } from './types';

interface CalendarHeaderProps {
    eventCategories: Record<string, EventCategoryConfig>;
    currentYear: number;
    currentMonth: number;
    currentDate: number;
    isDark?: boolean;
    selectedView?: number;
    onChangeView?: (view: number) => void;
    changeMonth: (number: number) => void;
    changeDate?: (number: number) => void;
}
declare const CalendarHeader: React.FC<CalendarHeaderProps>;
export default CalendarHeader;
