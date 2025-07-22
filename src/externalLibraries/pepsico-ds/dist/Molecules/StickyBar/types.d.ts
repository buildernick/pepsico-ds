import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IButtonProps } from '../../Atoms/Button/Button';

export type StickyBarType = 'cta' | 'cta-with-text';
export type StickyBarButton = Omit<IButtonProps, 'size' | 'variant'>;
interface StickyBarBaseProps<T extends StickyBarType> extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: T;
    isDark: boolean;
    barStyle: 'border' | 'shadow';
    primaryButton?: StickyBarButton;
    secondaryButton?: StickyBarButton;
}
export interface CTAStickyBarProps extends StickyBarBaseProps<'cta'> {
    tertiaryButton: StickyBarButton;
    auxiliaryButton: StickyBarButton;
}
export interface TextAndCTAStickyBarProps extends StickyBarBaseProps<'cta-with-text'> {
    title: string;
    description: string;
}
export type StickyBarProps = CTAStickyBarProps | TextAndCTAStickyBarProps;
export {};
