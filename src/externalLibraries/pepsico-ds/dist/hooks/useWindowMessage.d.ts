/**
 * This hook adds a "message" event listener, to track window messages (from iframes)
 * more info - https://stackoverflow.com/a/23020025
 */
export declare const useWindowMessage: () => {
    messageData: {};
};
export default useWindowMessage;
