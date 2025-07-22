import { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './EmptyState';

declare const meta: Meta<typeof EmptyState>;
export default meta;
type Story = StoryObj<typeof EmptyState>;
export declare const Default: Story;
export declare const CustomContent: Story;
export declare const DefaultDark: Story;
