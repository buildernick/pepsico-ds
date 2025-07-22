import { DetailedHTMLProps, HTMLAttributes } from 'react';

export declare enum ItemType {
    DEFAULT = "default",
    CHECKBOX = "checkbox",
    BADGE = "badge"
}
export interface BaseItemProps<T extends ItemType> extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    type?: T;
    size?: 'medium' | 'small';
    isDark?: boolean;
    separator?: boolean;
}
export interface DefaultTypeItemProps extends BaseItemProps<ItemType.DEFAULT> {
    text: string | React.ReactNode;
    leadingIcon?: string;
    trailingIcon?: string;
}
export interface CheckboxTypeItemProps extends BaseItemProps<ItemType.CHECKBOX> {
    text?: string;
    checked: boolean;
    disabled?: boolean;
    onUpdate: (value: boolean) => void;
}
export interface BadgeTypeItemProps extends BaseItemProps<ItemType.BADGE> {
    options: {
        label: string;
        id: string;
    }[];
    onRemove: (value: string) => void;
}
export type IDropdownListItemProps = DefaultTypeItemProps | CheckboxTypeItemProps | BadgeTypeItemProps;
