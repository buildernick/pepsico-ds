declare const useCalendar: () => {
    visibleDate: Date;
    currentYear: number;
    currentMonth: number;
    currentDate: number;
    daysArray: (Date | null)[];
    setVisibleDate: import('react').Dispatch<import('react').SetStateAction<Date>>;
    changeDate: (increment: number) => void;
    changeMonth: (increment: number) => void;
    monthArray: {
        id: string;
        label: string;
    }[];
    changeMonthById: (monthId: string) => void;
    yearArray: {
        id: string;
        label: string;
    }[];
    changeYearById: (yearId: string) => void;
};
export default useCalendar;
