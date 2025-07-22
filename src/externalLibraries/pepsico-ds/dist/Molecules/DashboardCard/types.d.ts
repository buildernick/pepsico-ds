import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IButtonProps } from '../../Atoms/Button/Button';
import { ILinkProps } from '../../Atoms/Link/Link';

export type DashboardButton = Omit<IButtonProps, 'size' | 'variant'>;
export type DashboardLink = Omit<ILinkProps, 'size'> & {
    href: string;
};
export interface DashboardCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isDark: boolean;
    pinned?: boolean;
    centralIcon?: string;
    title?: string;
    subTitle?: string;
    ctaPrimary?: DashboardButton;
    ctaSecondary?: DashboardButton;
    link1?: DashboardLink;
    link2?: DashboardLink;
    link3?: DashboardLink;
}
