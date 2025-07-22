/**
 * This function combines CSS tokens into a correct string value for `className` prop; also filters out empty tokens
 * and safely handles null and undefined values in the input array
 */
export declare const stir: (classes: (string[] | string | null | undefined)[]) => string;
