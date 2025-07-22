import { FC } from 'react';
import { ITooltipProps } from './interface';

/**
 * The Default, Hover, and Disabled states - text only and with left and right aligned icons - are used in buttons
 *     - Use the Primary button as a default CTA if only one action is required (e.g. search) and as the main CTA when two or more actions are required (e.g., Confirm/Cancel)
 *     - Use the Secondary button when there are other contextual actions next to the main CTA (e.g., 1. Select options 2. Search)
 */
export declare const Tooltip: FC<ITooltipProps>;
export default Tooltip;
