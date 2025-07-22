import { ListItemProps } from './ListItem';

export interface IListProps {
    /**
     * Title text shown above the list
     */
    title?: string;
    /**
     * Array of list items to render
     * @default []
     */
    items?: ListItemProps[];
    /**
     * The type of interaction for all list items
     * @default 'checkbox'
     */
    type?: 'checkbox' | 'radio' | 'navigation' | 'advanced-navigation';
    /**
     * Visual presentation style of the list
     * @default 'box-shadow'
     */
    presentation?: 'box-shadow' | 'border' | 'no-background';
    /**
     * Show separator line between items
     * @default false
     */
    separator?: boolean;
    /**
     * Show loading skeleton state
     * @default false
     */
    skeleton?: boolean;
    /**
     * Enable drag and drop reordering
     * @default true
     */
    draggable?: boolean;
    /**
     * Callback when items are reordered
     */
    onUpdateItems?: (newItems: ListItemProps[]) => void;
    /**
     * Callback when an item is clicked
     */
    onItemClick?: (item: ListItemProps) => void;
    /**
     * Whether to use dark theme styling
     * @default inherited from PaletteContext
     */
    isDark?: boolean;
    /**
     * Additional CSS class name
     */
    className?: string;
    /**
     * Callback when add button is clicked
     */
    onClickAdd?: () => void;
}
