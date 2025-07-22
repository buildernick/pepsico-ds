import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

export declare const Space: FC<ISpaceProps>;
export interface ISpaceProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, MarginProps, PaddingProps {
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
    /**
     * The DSS size to use for height and width
     */
    size?: SpacingLevel;
}
type SpacingLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
interface MarginProps {
    /**
     * The DSS size to use for margin on all sides
     */
    margin?: SpacingLevel;
    /**
     * The DSS size to use for margin on the bottom
     */
    marginBottom?: SpacingLevel;
    /**
     * The DSS size to use for margin horizontally
     */
    marginHorizontal?: SpacingLevel;
    /**
     * The DSS size to use for margin on the left
     */
    marginLeft?: SpacingLevel;
    /**
     * The DSS size to use for margin on the right
     */
    marginRight?: SpacingLevel;
    /**
     * The DSS size to use for margin on the top
     */
    marginTop?: SpacingLevel;
    /**
     * The DSS size to use for margin vertically
     */
    marginVertical?: SpacingLevel;
}
interface PaddingProps {
    /**
     * The DSS size to use for padding on all sides
     */
    padding?: SpacingLevel;
    /**
     * The DSS size to use for padding on the bottom
     */
    paddingBottom?: SpacingLevel;
    /**
     * The DSS size to use for padding horizontally
     */
    paddingHorizontal?: SpacingLevel;
    /**
     * The DSS size to use for padding on the left
     */
    paddingLeft?: SpacingLevel;
    /**
     * The DSS size to use for padding on the right
     */
    paddingRight?: SpacingLevel;
    /**
     * The DSS size to use for padding on the top
     */
    paddingTop?: SpacingLevel;
    /**
     * The DSS size to use for padding vertically
     */
    paddingVertical?: SpacingLevel;
}
export {};
