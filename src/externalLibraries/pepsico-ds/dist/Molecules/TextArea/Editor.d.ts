import { ComponentProps } from 'react';
import { ContentEditableProps } from './ContentEditable';

export declare const Editor: import('react').ForwardRefExoticComponent<EditorProps & import('react').RefAttributes<HTMLElement>>;
export interface EditorProps extends ContentEditableProps {
    containerProps?: ComponentProps<'div'>;
}
