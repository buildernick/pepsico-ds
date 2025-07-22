import { CSSProperties, DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import { IButtonProps, ILinkProps } from '../../Atoms';
import { INotificationProps } from '../../Molecules/Notification/types';

/**
 * Presents users with short, relevant information for Modal
 */
export declare const Modal: FC<IModalProps>;
export interface IModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * Optional; When present, show the modal
     */
    showModal?: boolean;
    /**
    * Optional; When present, hide the close button
    * @default false
    */
    hideCloseButton?: boolean;
    /**
     * Optional; When provided, callback function invoked when the modal is closed or the cross icon is pressed
     */
    onCloseModal?: () => void;
    /**
     * Optional; Determines the type of modal
     * @default fluid
     */
    type?: 'fluid' | 'XL' | 'L' | 'M' | 'S';
    /**
     * Title for the modal
     */
    title?: string;
    /**
     * Text description for the modal
     */
    text?: string | ReactNode;
    /**
     * Optional; When present, show the Slot
     * @default true
     */
    showSlot?: boolean;
    /**
     * Optional; When present, show the Tertiary Button
     * @default true
     */
    showTertiaryButton?: boolean;
    /**
     * Optional; When present, show the Link
     * @default true
     */
    showLink?: boolean;
    /**
     * Optional; When present, show the Secondary Button
     * @default true
     */
    showSecondaryButton?: boolean;
    /**
     * Optional; When present, show the Primary Button
     * @default true
     */
    showPrimaryButton?: boolean;
    /**
     * Optional; When present, show the Auxiliary Button
     * @default true
     */
    showAuxiliaryButton?: boolean;
    /**
     * Optional; Tertiary Button Props (e.g Button component Props)
     * @default {
        iconTrailing: 'arrow_forward',
        size: 'medium',
        text: 'Button',
        variant: 'tertiary',
        onClick: () => console.log('tertiary button clicked'),
      }
     */
    tertiaryButtonProps?: IButtonProps;
    /**
     * Optional; Link Props (e.g Link component Props)
     * @default {
      iconLeading: '',
      iconTrailing: 'arrow_forward',
      label: 'Link',
      size: 'medium',
      onClick: () => console.log('link clicked'),
    }
     */
    linkProps?: ILinkProps;
    /**
     * Optional; Secondary Button Props (e.g Button component Props)
     * @default {
      iconTrailing: 'arrow_forward',
      size: 'medium',
      text: 'Button',
      variant: 'secondary',
      onClick: () => console.log('secondary button clicked'),
    }
     */
    secondaryButtonProps?: IButtonProps;
    /**
     * Optional; Primary Button Props (e.g Button component Props)
     * @default {
      size: 'medium',
      text: 'Button',
      variant: 'primary',
      onClick: () => console.log('primary button clicked'),
    }
     */
    primaryButtonProps?: IButtonProps;
    /**
     * Optional; Auxiliary Button Props (e.g Button component Props)
     * @default {
      size: 'medium',
      text: 'Button',
      variant: 'auxiliary',
      onClick: () => console.log('auxiliary button clicked'),
    }
     */
    auxiliaryButtonProps?: IButtonProps;
    /**
     * Optional; When present, close modal on outise click
     * @default true
     */
    closeOnOutsideClick?: boolean;
    /**
     * props for rendering footer
     * @default undefined
     */
    footerProps?: IFooterProps | undefined;
    /**
     * props for rendering notifications
     * @default undefined
     */
    notificationsProps?: INotificationProps | undefined;
}
export interface IFooterProps {
    /**
         * Size of buttons; default (when not provided) is 'large'
         */
    size?: 'small' | 'medium' | 'large';
    /**
     * Type of button hierarchy to render
     * @default 'Primary'
     */
    type?: 'primary' | 'inverse' | 'danger';
    /**
     * props for footer custom styling
     * @default undefined
     */
    style?: CSSProperties | undefined;
}
export default Modal;
