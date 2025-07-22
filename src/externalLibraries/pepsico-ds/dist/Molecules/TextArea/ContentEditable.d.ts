import { HTMLAttributes, SyntheticEvent } from 'react';

/**
 * A simple component for a html element with editable contents.
 */
export declare const ContentEditable: import('react').MemoExoticComponent<import('react').ForwardRefExoticComponent<ContentEditableProps & import('react').RefAttributes<HTMLElement>>>;
export type ContentEditableEvent = SyntheticEvent<any, Event> & {
    target: {
        name?: string;
        value: string;
        text?: string;
    };
};
export interface ContentEditableProps extends HTMLAttributes<HTMLElement> {
    disabled?: boolean;
    contentEditableRef?: (el: HTMLElement) => void;
    name?: string;
    onChange?: (event: ContentEditableEvent) => void;
    value: string;
    placeholder?: string;
    maxLength?: number;
    isDark?: boolean;
}
