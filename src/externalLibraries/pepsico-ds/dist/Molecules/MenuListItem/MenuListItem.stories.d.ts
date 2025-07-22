import { Meta, StoryObj } from '@storybook/react';
import { default as MenuListItem } from './MenuListItem';

declare const meta: Meta<typeof MenuListItem>;
export default meta;
type Story = StoryObj<typeof MenuListItem>;
export declare const Default: Story;
export declare const ItemWithSingleSelected: Story;
export declare const ItemWithRadioButton: Story;
export declare const ItemWithChild: Story;
export declare const itemWithLeadingIcon: Story;
export declare const itemWithOutSeparator: Story;
export declare const ItemWithDarkTheme: Story;
