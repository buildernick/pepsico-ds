import { Meta, StoryObj } from '@storybook/react';
import { default as MenuList } from './MenuList';

declare const meta: Meta<typeof MenuList>;
export default meta;
type Story = StoryObj<typeof MenuList>;
export declare const Default: Story;
export declare const MenuListWithSingleTreeView: Story;
export declare const MenuListWithMultiSelection: Story;
export declare const MenuListWithMultiSelectionTreeView: Story;
export declare const MenuListWithRadioItems: Story;
export declare const MenuListWithFooter: Story;
export declare const MenuListWithCustomFooter: Story;
export declare const MenuListWithListHeadre: Story;
export declare const MenuListWithSectionHeader: Story;
export declare const MenuListWithLoadingState: Story;
export declare const WithNoSearch: Story;
export declare const WithSelectedItem: Story;
export declare const Dark: Story;
