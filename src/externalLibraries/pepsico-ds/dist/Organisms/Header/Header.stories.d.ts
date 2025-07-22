import { Meta, StoryObj } from '@storybook/react';
import { Header } from '.';

declare const meta: Meta<typeof Header>;
export default meta;
type Story = StoryObj<typeof Header>;
export declare const Default: Story;
export declare const HeaderWithoutLeftIcon: Story;
export declare const HeaderWithoutMiddleIcon: Story;
