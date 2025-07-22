import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

/**
 * Presents users with short, relevant information
 */
export declare const BottomBar: FC<IBottomBarProps>;
export interface IBottomBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Optional; Render in dark mode if true; uses PaletteContext for value otherwise
     */
    isDark?: boolean;
    /**
     * Optional; When present, render right toolbar component
     */
    iconList?: {
        icon: React.ReactNode;
        onClickIcon: () => void;
    }[];
}
export interface IconProps {
    icon: React.ReactNode;
    onClickIcon: () => void;
}
export default BottomBar;
