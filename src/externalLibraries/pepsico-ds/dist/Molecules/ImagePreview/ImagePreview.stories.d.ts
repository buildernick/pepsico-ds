import { Meta, StoryObj } from '@storybook/react';
import { default as ImagePreview } from './ImagePreview';

declare const meta: Meta<typeof ImagePreview>;
export default meta;
type Story = StoryObj<typeof ImagePreview>;
export declare const Default: Story;
export declare const Dark: Story;
