import { CSSProperties, DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import { IButtonProps } from '../../Atoms/Button/Button';
import { ICheckboxProps } from '../../Atoms/Checkbox';

/**
 * Presents users with short, relevant information for Onboarding Modal
 */
export declare const OnboardingModal: FC<IOnboardingModalProps>;
export interface IOnboardingModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * Optional. Specifies the image path or URL of the image to be used for the main frame.
     */
    mainImageURL?: string;
    /**
     * Optional. Specifies the main image container style.
     */
    mainImageContainerStyle?: CSSProperties;
    /**
     * Optional. Specifies the image path or URL of the image to be used for the app logo.
     */
    appLogoURL?: string;
    /**
     * Optional. Specifies the app logo image container style.
     */
    appLogoContainerStyle?: CSSProperties;
    /**
     * Optional. Steps to de displayed for onboarding modal.
     */
    steps?: string;
    /**
     * Optional; When present, show the modal
     */
    showModal?: boolean;
    /**
     * Optional; When provided, callback function invoked when the modal is closed or the cross icon is pressed
     */
    onCloseModal?: () => void;
    /**
     * Title for the modal
     */
    title?: string;
    /**
     * Text description for the modal
     */
    text?: string | ReactNode;
    /**
     * Optional; Secondary Button Props (e.g Button component Props)
     */
    secondaryButtonProps?: IButtonProps;
    /**
     * Optional; Primary Button Props (e.g Button component Props)
     */
    primaryButtonProps?: IButtonProps;
    /**
     * Optional; Checkbox Props (e.g Checkbox component Props)
     */
    checkboxProps?: ICheckboxProps;
}
export default OnboardingModal;
