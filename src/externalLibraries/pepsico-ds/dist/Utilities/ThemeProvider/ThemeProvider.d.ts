import { default as React } from 'react';

type DefaultThemeName = 'Light-Peacock' | 'DTC-Joy' | 'PepsiConnect';
type ThemeProviderProps = {
    children: React.ReactNode;
    defaultStyle?: DefaultThemeName;
    customStyles?: Record<string, any>;
    isDarkTheme?: boolean;
};
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export default ThemeProvider;
