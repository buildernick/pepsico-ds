import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IFeedbackType } from '../../Atoms';

export type TimeType = 'AM' | 'PM';
export interface Time {
    value?: string;
    type?: TimeType;
    timeZone?: string;
}
export interface TimePickerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isDark?: boolean;
    size: 'medium' | 'small';
    label: string;
    timeZones?: string[];
    selected?: Time;
    disabled?: boolean;
    setSelected: (time: Time) => void;
    showTimezones?: boolean;
    helperText?: string;
    feedbackType?: IFeedbackType;
}
