import { IDropdownProps } from './types';

export interface IDropdownHandle {
    openDropdownMenu: () => void;
    closeDropdownMenu: () => void;
    input: HTMLInputElement | null;
}
/**
 * The Dropdown Atom allows for the selection of one (or multiple) item(s) from a list
 */
export declare const Dropdown: import('react').ForwardRefExoticComponent<Omit<IDropdownProps, "ref"> & import('react').RefAttributes<IDropdownHandle>>;
export default Dropdown;
