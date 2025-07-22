import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IBreadcrumbProps extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * Optional; The list to populate the Breadcrumbs.
     */
    breadcrumbs?: {
        label: string | ReactNode;
        href?: string;
    }[];
    /**
    * Optional; Maximum number of breadcrumbs to display before collapsing into a dropdown.
    * Used to handle responsiveness of the breadcrumb component.
    * If not provided, all breadcrumbs will be displayed.
    */
    maxBreadcrumbCount?: number;
}
