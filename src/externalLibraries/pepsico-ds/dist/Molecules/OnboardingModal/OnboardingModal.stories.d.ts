import { Meta, StoryObj } from '@storybook/react';
import { OnboardingModal } from './OnboardingModal';

declare const meta: Meta<typeof OnboardingModal>;
export default meta;
type Story = StoryObj<typeof OnboardingModal>;
export declare const ModalDefault: Story;
export declare const ModalDark: Story;
export declare const ModalWithCustomAppLogoStyle: Story;
export declare const ModalWithoutCheckbox: Story;
export declare const ModalWithoutAppLogo: Story;
export declare const CustomTitle: Story;
export declare const DisabledButtons: Story;
