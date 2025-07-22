import { FilterProps, IFilterHandle } from './types';

declare const Filter: import('react').ForwardRefExoticComponent<Omit<FilterProps, "ref"> & import('react').RefAttributes<IFilterHandle>>;
export default Filter;
