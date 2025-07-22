import { default as React } from 'react';
import { CalendarItemProps } from './types';

type CalendarItemInnerProps = Pick<CalendarItemProps, 'eventCategories' | 'events' | 'isDark' | 'showPopover' | 'setShowPopover'> & {
    label?: string;
};
declare const CalendarItemMicro: React.FC<CalendarItemInnerProps | Partial<CalendarItemInnerProps>>;
export default CalendarItemMicro;
