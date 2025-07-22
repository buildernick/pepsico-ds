/**
 * This hook adds a "scroll" event listener, to track window scroll changes
 */
export declare const useWindowScroll: () => {
    scrollX: number;
    scrollY: number;
};
/**
 * This function returns the current scrollX and scrollY of the window
 */
export declare const getWindowScroll: () => {
    scrollX: number;
    scrollY: number;
};
export default useWindowScroll;
