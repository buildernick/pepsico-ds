import { IFeedbackType } from '../../Atoms';
import { InputItemProps } from '../InputItem';
import { DatePickerMenuProps } from '../DatePickerMenu';

export interface DatePickerInputProps extends Omit<InputItemProps, 'onUpdate' | 'readOnly' | 'trailingIcon'> {
    label?: string;
    /**
     * Hint shown below the input
     * @default ''
     */
    helperText?: string;
    selected?: string | Date | null;
    setSelected: (date: string) => void;
    /**
     * helperText hint style
     * @default 'info'
     */
    feedbackType?: IFeedbackType;
    /**
     * DatePickerMenu selection handler
     */
    datePickerMenu?: Pick<DatePickerMenuProps, 'disabled' | 'disabledDates' | 'onlySelectFrom'>;
}
export interface IDatePickerInputHandle {
    openMenu: () => void;
    closeMenu: () => void;
    input: HTMLInputElement | null;
}
