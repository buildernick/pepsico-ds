import { Event } from './types';

export declare const getEventsInRange: (events: Event[], day: Date) => Event[];
export declare const getDailyEvents: (events: Event[], day: Date) => Event[];
export interface SubSlot {
    subSlot: string;
    events: Event[];
}
export interface HourlySlot {
    slot: string;
    events: SubSlot[];
}
export declare const organizeEventsHourly: (events: Event[], day: Date) => HourlySlot[];
