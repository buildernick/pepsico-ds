import { FC, ReactNode } from 'react';

type Breakpoint = 'mobile' | 'tablet' | 'tablet-portrait' | 'tablet-landscape' | 'desktop';
export declare const DefaultBreakpoints: Record<Breakpoint, number>;
export declare const BreakpointContext: import('react').Context<IBreakpointContext>;
export declare const BreakpointContextProvider: FC<IBreakpointContextProviderProps>;
export interface IBreakpointContextProviderProps {
    children: ReactNode;
}
export interface IBreakpointContext {
    breakpoints: Record<Breakpoint, number>;
    currentBreakpoint: Breakpoint;
    isDesktop: boolean;
    isMax: boolean;
    isMobile: boolean;
    isTablet: boolean;
    isTabletLandscape: boolean;
    isTabletPortrait: boolean;
    scrollX: number;
    scrollY: number;
}
export declare const useBreakpointContext: () => IBreakpointContext;
export default BreakpointContext;
