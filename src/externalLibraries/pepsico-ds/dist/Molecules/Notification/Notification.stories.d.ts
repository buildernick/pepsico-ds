import { Meta, StoryObj } from '@storybook/react';
import { Notification } from '.';

declare const meta: Meta<typeof Notification>;
export default meta;
type Story = StoryObj<typeof Notification>;
export declare const NotificationInfo: Story;
export declare const NotificationSuccess: Story;
export declare const NotificationWarning: Story;
export declare const NotificationError: Story;
export declare const NotificationInfoNoSecondary: Story;
export declare const NotificationInfoNoPrimary: Story;
export declare const NotificationInfoNoSecondaryNoPrimary: Story;
export declare const NotificationInfoNoSecondaryNoPrimaryNoText: Story;
export declare const NotificationDark: Story;
export declare const NotificationDarkSuccess: Story;
export declare const NotificationDarkWarning: Story;
export declare const NotificationDarkError: Story;
export declare const NotificationTitleAsReactNode: Story;
