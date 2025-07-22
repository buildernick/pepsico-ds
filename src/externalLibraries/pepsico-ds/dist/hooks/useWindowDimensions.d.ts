/**
 * This hook adds a "resize" event listener, to track window dimension changes
 * more info - https://stackoverflow.com/a/36862446
 */
export declare const useWindowDimensions: () => {
    height: number;
    width: number;
};
/**
 * This function returns the current innerHeight and innerWidth of the window
 * more info - https://stackoverflow.com/a/36862446
 */
export declare const getWindowDimensions: () => {
    height: number;
    width: number;
};
export default useWindowDimensions;
