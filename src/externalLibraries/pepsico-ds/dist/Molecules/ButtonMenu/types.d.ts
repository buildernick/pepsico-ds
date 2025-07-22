import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IButtonProps } from '../../Atoms';

/** Properties for the Button Menu component. */
export interface IButtonMenuProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, 'onChange'> {
    /** Determines if the dark theme is applied. */
    isDark?: boolean;
    /** Determines if the search functionality should be shown.
     * @default false
     */
    showSearch?: boolean;
    /** Determines if the Button Menu component is disabled.
     * @default false
    */
    disabled?: boolean;
    /** Options available for selection in the Button Menu component. */
    options: {
        id: string;
        label: string;
    }[];
    /** default value to be set */
    value?: {
        id: string;
        label: string;
    };
    /**
     * Allows the Parent to keep track of the state of the Button Menu Value
     * @param value the Button Menu Value that has been selected
     * @returns n/a
     */
    onChange?: (value: {
        id: string;
        label: string;
    } | undefined) => void;
    /**
     * Button to display (i.e same props as Button component)
     */
    buttonProps: IButtonProps;
}
