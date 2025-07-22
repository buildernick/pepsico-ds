import { Meta, StoryObj } from '@storybook/react';
import { Link } from '.';

declare const meta: Meta<typeof Link>;
export default meta;
type Story = StoryObj<typeof Link>;
export declare const Default: Story;
export declare const WithoutAnchor: Story;
export declare const WithTooltip: Story;
export declare const DefaultDark: Story;
export declare const WithTooltipDark: Story;
