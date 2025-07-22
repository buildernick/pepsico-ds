import { Meta, StoryObj } from '@storybook/react';
import { DashboardCard } from '.';

declare const meta: Meta<typeof DashboardCard>;
export default meta;
type Story = StoryObj<typeof DashboardCard>;
export declare const Default: Story;
export declare const PinnedCard: Story;
export declare const DarkTheme: Story;
export declare const NoButtons: Story;
export declare const NoLinks: Story;
export declare const NoButtonsAndLinks: Story;
