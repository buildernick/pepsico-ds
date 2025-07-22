import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from './ThemeProvider';

declare const meta: Meta<typeof ThemeProvider>;
export default meta;
type Story = StoryObj<typeof ThemeProvider>;
export declare const DefaultTheme: Story;
export declare const DarkTheme: Story;
export declare const CustomStyle: Story;
