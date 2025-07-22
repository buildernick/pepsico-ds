import { ReactNode } from 'react';

export declare const EditorContext: import('react').Context<EditorState | undefined>;
export declare function EditorProvider({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useEditorState(): EditorState;
export interface EditorState {
    onUpdate(attrs: Partial<EditorState>): void;
    $el?: HTMLElement;
    $selection?: Node;
}
