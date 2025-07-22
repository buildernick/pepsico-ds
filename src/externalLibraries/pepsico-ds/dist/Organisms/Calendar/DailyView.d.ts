import { default as React } from 'react';
import { CalendarItemProps } from './types';

type CalendarDailyViewProps = Pick<CalendarItemProps, 'events' | 'eventCategories' | 'isDark' | 'showPopover' | 'setShowPopover' | 'day'>;
declare const CalendarDailyView: React.FC<CalendarDailyViewProps>;
export default CalendarDailyView;
