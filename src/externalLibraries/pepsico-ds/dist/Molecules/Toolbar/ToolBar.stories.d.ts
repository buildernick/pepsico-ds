import { Meta, StoryObj } from '@storybook/react';
import { ToolBar } from '.';
import { IToolBarItem } from './types';

declare const meta: Meta<typeof ToolBar>;
export default meta;
type Story = StoryObj<typeof ToolBar>;
export declare const Default: Story;
export declare const Small: Story;
export declare const Medium: Story;
export declare const Large: Story;
export declare const withShowMore: Story;
export declare const Disabled: Story;
export declare const SingleItemDisabled: {
    args: {
        items: IToolBarItem[];
        size: string;
        isDark: boolean;
        groupDisabled: boolean;
    };
};
export declare const Vertical: Story;
export declare const Dark: Story;
export declare const withoutActiveState: Story;
