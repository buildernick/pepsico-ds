import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ICarouselProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'title'> {
    /**
     * Optional; title to be rendered above the carousel
     */
    title?: string | ReactNode;
    /**
     * Optional; boolean to show or hide the title
     */
    showTitle?: boolean;
    /**
     * Array of data to be rendered in the carousel; each item in the array can have a detail and title property
     */
    itemData: ReactNode[];
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
    /**
     * Optional; boolean to show or hide the pagination
     */
    showPagination?: boolean;
    /**
     * Callback for when the active step/slide is changed
     */
    onStepChange?: (activeStep: number) => void;
}
