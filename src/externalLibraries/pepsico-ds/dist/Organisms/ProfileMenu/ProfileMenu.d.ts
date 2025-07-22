import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { IListProps } from '../../Molecules/List/types';

/**
 * Presents users with short, relevant information
 */
export declare const ProfileMenu: FC<ProfileMenuIProps>;
export interface ProfileMenuIProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * An array of IListProps (List props) representing the options for Profile Menu.
     */
    options?: IListProps[];
    /**
     * When provided, this handler is invoked when a user changes the selection
     */
    onUpdate?: (newSelectedIndex: number) => void;
}
export default ProfileMenu;
