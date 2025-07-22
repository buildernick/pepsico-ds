import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

/**
 * A logo is a visual representation of a brand or product. It can be a word or an image, or a combination of both.
 */
export declare const Logo: FC<ILogoProps>;
export declare const PepsicoLogo: FC<ILogoProps>;
export declare const PepsicoSymbol: FC<ILogoProps>;
export declare const AppLogo: FC<ILogoProps>;
export declare const ServiceDesignLogo: FC<ILogoProps>;
export interface ILogoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Type of logo to display
     * @default pepsicoFullLogo
     */
    logoType?: 'pepsicoFullLogo' | 'pepsicoSymbol' | 'appLogo' | 'pepsicoServiceDesign';
    /**
     * Style color options depending on what Logo Type is selected.
     * @default color
     */
    colorStyle?: 'color' | 'black' | 'white';
    /**
     * Input String Value
     */
    appName?: string;
    /**
     * Orientation of logo. Horizontal vs Stacked.
     * @default horizontal
     */
    sdType?: 'horizontal' | 'stacked';
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
}
declare const _default: {
    PepsicoLogo: FC<ILogoProps>;
    ServiceDesignLogo: FC<ILogoProps>;
    Logo: FC<ILogoProps>;
};
export default _default;
