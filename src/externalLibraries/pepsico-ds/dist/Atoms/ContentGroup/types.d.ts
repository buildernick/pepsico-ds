import { ITagProps } from '../Tag';

interface ICommonProps {
    /** If true, applies dark mode styling */
    isDark?: boolean;
    /** If true, applies skeleton state styling */
    skeleton?: boolean;
    /** If true, disables interaction */
    disabled?: boolean;
}
export interface IContentGroupDetailProps extends ICommonProps {
    /** The main text content */
    text: string;
    /** An optional badge for additional context */
    badge?: ITagProps;
    /** An optional tag for categorization */
    tag?: ITagProps;
    /** If true, shows a notification dot */
    showNotificationDot?: boolean;
}
export interface IContentGroupTitleProps extends IContentGroupDetailProps {
    /** If true, marks the content as selected */
    isSelected?: boolean;
}
export interface IContentGroupProps extends ICommonProps {
    /** Title content and its associated properties */
    titleProps?: Omit<IContentGroupTitleProps, 'isDark' | 'skeleton'>;
    /** Detail content and its associated properties */
    detailProps?: Omit<IContentGroupDetailProps, 'isDark' | 'skeleton'>;
    /** If true, inverts the layout */
    isInverted?: boolean;
    /** If true, marks the entire group as selected */
    isSelected?: boolean;
}
export {};
