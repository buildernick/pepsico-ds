export interface IBadgeProps {
    /**
     * Type of badge to display
     * @default 'default'
     */
    type: 'default' | 'secondary' | 'inverse' | 'important' | 'added' | 'removed';
    /**
     * Text content to display inside the badge
     */
    value: number | string;
    /**
     * Whether to limit the text length
     * @default false
     */
    limitMaxDigits?: number;
    /**
     * Whether to use dark mode styling
     * @default false
     */
    isDark?: boolean;
    /**
     * Additional CSS class names
     */
    className?: string;
}
