import { Meta, StoryObj } from '@storybook/react';
import { ListV2ListItem as ListItem } from '.';

declare const meta: Meta<typeof ListItem>;
export default meta;
type Story = StoryObj<typeof ListItem>;
export declare const Default: Story;
export declare const RadioOnly: Story;
export declare const CheckboxOnly: Story;
export declare const NavigationWithIconProps: Story;
export declare const NavigationWithImageProps: Story;
export declare const NavigationWithAvatarProps: Story;
export declare const NavigationWithRightAccessory: Story;
export declare const Dark: Story;
export declare const skeleton: Story;
