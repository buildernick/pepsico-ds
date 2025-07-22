import { Meta, StoryObj } from '@storybook/react';
import { default as ButtonHierarchy } from './ButtonHierarchy';

declare const meta: Meta<typeof ButtonHierarchy>;
export default meta;
type Story = StoryObj<typeof ButtonHierarchy>;
export declare const Default: Story;
export declare const withTypeDanger: Story;
export declare const withNoPrimaryButton: Story;
export declare const withTwoButtons: Story;
export declare const Dark: Story;
