type EventHandlers = {
    onFocus: () => void;
    onBlur: () => void;
};
export declare const useOnFocus: (initialState?: boolean) => [boolean, EventHandlers];
export {};
