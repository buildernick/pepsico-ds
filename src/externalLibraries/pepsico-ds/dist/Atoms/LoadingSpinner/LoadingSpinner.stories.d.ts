import { Meta, StoryObj } from '@storybook/react';
import { LoadingSpinner } from '.';

declare const meta: Meta<typeof LoadingSpinner>;
export default meta;
type Story = StoryObj<typeof LoadingSpinner>;
export declare const Default: Story;
export declare const Slow: Story;
export declare const Fast: Story;
export declare const Fullscreen: Story;
export declare const DefaultDark: Story;
