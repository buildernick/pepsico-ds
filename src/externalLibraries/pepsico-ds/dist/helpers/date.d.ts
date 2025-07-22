export declare const getDaysInMonth: (year: number, month: number) => number;
export declare const getFirstDayOfWeek: (year: number, month: number) => number;
export declare const generateDaysArray: (year: number, month: number) => (Date | null)[];
export declare const getMonthName: (month: number) => string;
export declare const isDateToday: (date?: Date | null) => boolean;
export declare const areDatesEqual: (date1?: Date | null, date2?: Date | null) => boolean;
export declare const getDayName: (year: number, month: number, day: number) => string;
export declare const generateYearArray: (startYear: number, endYear: number) => {
    id: string;
    label: string;
}[];
