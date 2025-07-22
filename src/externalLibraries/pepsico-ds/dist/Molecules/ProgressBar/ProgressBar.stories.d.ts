import { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from '.';

declare const meta: Meta<typeof ProgressBar>;
export default meta;
type Story = StoryObj<typeof ProgressBar>;
export declare const Default: Story;
export declare const ErrorState: Story;
export declare const WarningState: Story;
export declare const SuccessState: Story;
export declare const Indeterminate: Story;
export declare const DefaultDark: Story;
