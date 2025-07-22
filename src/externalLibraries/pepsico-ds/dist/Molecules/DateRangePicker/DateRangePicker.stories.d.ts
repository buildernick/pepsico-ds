import { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from '.';

declare const meta: Meta<typeof DateRangePicker>;
export default meta;
type Story = StoryObj<typeof DateRangePicker>;
export declare const Default: Story;
export declare const DefaultWithCertainDisabledDates: Story;
export declare const DefaultWithOnlySelectFrom: Story;
export declare const WithoutSelection: Story;
export declare const WithoutSelectionAndPlaceholder: Story;
export declare const WithoutRequired: Story;
export declare const WithoutLabel: Story;
export declare const Small: Story;
export declare const Dark: Story;
export declare const DarkSmall: Story;
export declare const DarkWithoutLabel: Story;
export declare const ReactHookFormsExample: Story;
export declare const UsingRefExample: Story;
