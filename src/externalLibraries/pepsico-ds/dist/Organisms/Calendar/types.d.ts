import { default as React, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface EventCategoryConfig {
    id: string;
    label: string;
    color?: string;
}
export interface Event {
    id: string;
    title: string;
    start: Date;
    categoryId: string;
    end?: Date;
    details?: string | React.ReactNode;
}
/**
 * Represents the props for the Calendar component.
 */
export interface CalendarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Optional; Indicates whether the calendar is in dark mode.
     * @default false
     */
    isDark?: boolean;
    /**
     * An array of event categories.
     */
    eventCategories: EventCategoryConfig[];
    /**
     * An array of events.
     */
    events: Event[];
    /**
     * The maximum number of events to display in the calendar view.
     */
    maxEventsInView: number;
}
export type CalendarItemProps = Pick<CalendarProps, 'events' | 'maxEventsInView' | 'isDark'> & {
    day: Date;
    currentMonth: number;
    showPopover: string | number | undefined;
    eventCategories: Record<string, EventCategoryConfig>;
    setShowPopover: React.Dispatch<React.SetStateAction<string | number | undefined>>;
    /**
     * A callback function that is called when an event is clicked.
     * @param event The clicked event.
     */
    onDayClick: (eventDay: Date) => void;
};
export interface TimeSlot {
    hour: string;
    events: Event[];
}
export type ViewMode = 'day' | 'month';
