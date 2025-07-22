import { Meta, StoryObj } from '@storybook/react';
import { TabsNavigation } from '.';

declare const meta: Meta<typeof TabsNavigation>;
export default meta;
type Story = StoryObj<typeof TabsNavigation>;
export declare const Default: Story;
export declare const WithMaximumVisibleTabs: Story;
export declare const SecondItemSelected: Story;
export declare const Vertical: Story;
export declare const VerticalSecondItemSelected: Story;
export declare const Disabled: Story;
export declare const ManyItems: Story;
export declare const DefaultDark: Story;
export declare const SecondItemSelectedDark: Story;
export declare const DisabledDark: Story;
export declare const ManyItemsDark: Story;
export declare const SingleTabDisabled: Story;
export declare const InvalidChildren: Story;
