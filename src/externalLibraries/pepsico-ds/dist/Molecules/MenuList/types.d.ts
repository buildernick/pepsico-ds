import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IIconProps } from '../../Atoms/Icon';
import { IAvatarProps } from '../../Atoms/Avatar';
import { IButtonHierarchyProps } from '../../Utilities/ButtonHierarchy/types';

/**
 * Props for the MenuList component.
 */
export interface MenuListProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    /**
     * The type of the menu list.
     * @default 'single'
     */
    type?: 'single' | 'multiple' | 'radios' | 'singleTreeView' | 'multipleTreeView' | 'radiosTreeView' | 'multipleFullTagList' | 'loading';
    /**
     * Whether to show the search bar.
     * @default true
     */
    showSearch?: boolean;
    /**
     * Whether to show the footer.
     * @default false
     */
    showFooter?: boolean;
    /**
     * Whether to show the empty state view.
     * @default false
     */
    showEmptyStateView?: boolean;
    /**
     * The message to display when the list is empty.
     */
    emptyStateMessage?: string;
    /**
     * The list of items to be populated.
     */
    items: IMenuListItem[];
    /**
     * Whether to render in dark mode.
     * @default false
     */
    isDark?: boolean;
    /**
     * The size of the menu list.
     * @default 'medium'
     */
    size?: 'medium' | 'small';
    /**
     * The width of the menu list.
     */
    width?: string;
    /**
     * The height of the menu list.
     * @default '240px'
     */
    height?: number;
    /**
     * The label for the list header.
     */
    listHeaderLabel?: string;
    /**
     * The list of selected items.
     */
    selectedItems?: IMenuListItem[];
    /**
     * Callback function to hide the menu list.
     */
    onHideMenuList?: () => void;
    /**
     * Callback function to keep track of the state of the dropdown value.
     * @param val The IMenuListItem value that has been selected.
     */
    selectedItemCallback?: (val: IMenuListItem[]) => void;
    /**
     * Custom footer options.
     */
    customFooterOptions?: IButtonHierarchyProps;
}
export interface IMenuListItem {
    id: string;
    label: string;
    value?: any;
    isSectonTitle?: boolean;
    isSelected?: boolean;
    leadingIcon?: IIconProps;
    avatar?: IAvatarProps;
    separator?: boolean;
    children?: Array<IMenuListItem>;
}
