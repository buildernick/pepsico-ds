import { default as React, SVGProps } from 'react';

interface PinIconProps extends SVGProps<SVGSVGElement> {
    pinned?: boolean;
}
declare const PinIcon: React.FC<PinIconProps>;
export default PinIcon;
