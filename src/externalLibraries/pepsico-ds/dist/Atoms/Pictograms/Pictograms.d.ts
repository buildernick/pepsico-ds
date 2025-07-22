import { FC } from 'react';

interface PictogramsProps {
    size?: 'small' | 'large';
    name: 'packaging' | 'processing' | 'saving' | 'settings' | 'timing' | 'workflow';
}
declare const Pictograms: FC<PictogramsProps>;
export default Pictograms;
