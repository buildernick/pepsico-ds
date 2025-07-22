import { Meta, StoryObj } from '@storybook/react';
import { HeaderSearch } from '.';

declare const meta: Meta<typeof HeaderSearch>;
export default meta;
type Story = StoryObj<typeof HeaderSearch>;
export declare const Default: Story;
export declare const NoSuggestions: Story;
export declare const NoHistory: Story;
export declare const NoSuggestionsOrHistory: Story;
export declare const Focus: Story;
export declare const Dark: Story;
export declare const DarkFocused: Story;
