import { IMenuListItem } from '../MenuList/types';
import { default as React } from 'react';

export interface IMenuListItemProps {
    item: IMenuListItem;
    isSelected?: boolean;
    selectedItems?: IMenuListItem[];
    onItemSelect?: (evt: React.MouseEvent<HTMLElement>, selectedItem: IMenuListItem, parent?: IMenuListItem) => void;
    isDark?: boolean;
    size?: 'medium' | 'small';
    type?: 'single' | 'multiple' | 'radios' | 'singleTreeView' | 'multipleTreeView' | 'radiosTreeView' | 'multipleFullTagList' | 'loading';
    indeterminateCheckbox?: boolean;
    className?: string;
    style?: React.CSSProperties;
    width?: string;
    parent?: IMenuListItem;
    renderListItem?: (item: IMenuListItem, parent?: IMenuListItem) => React.ReactNode;
}
