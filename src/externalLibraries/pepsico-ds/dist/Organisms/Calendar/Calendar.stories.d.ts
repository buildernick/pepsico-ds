import { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '.';

declare const meta: Meta<typeof Calendar>;
export default meta;
type Story = StoryObj<typeof Calendar>;
export declare const Default: Story;
export declare const WithALongEvent: Story;
export declare const Dark: Story;
