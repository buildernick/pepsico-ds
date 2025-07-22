import { ReactNode } from 'react';

export interface IPaletteContext {
    isDark: boolean;
}
export declare const DefaultPalette: IPaletteContext;
export declare const PaletteContext: import('react').Context<IPaletteContext>;
export interface IPaletteContextProviderProps {
    children: ReactNode;
    initialValue?: boolean;
}
export declare const PaletteContextProvider: ({ children, initialValue, }: IPaletteContextProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const usePaletteContext: () => IPaletteContext;
export default PaletteContext;
