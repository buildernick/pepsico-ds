import { Meta, StoryObj } from '@storybook/react';
import { Feedback } from '.';

declare const meta: Meta<typeof Feedback>;
export default meta;
type Story = StoryObj<typeof Feedback>;
export declare const Default: Story;
export declare const ErrorState: Story;
export declare const WarningState: Story;
export declare const ValidatedState: Story;
export declare const Disabled: Story;
export declare const CustomContent: Story;
export declare const DefaultDark: Story;
