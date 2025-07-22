import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SidepanelIProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /**
     * Render in dark mode if true; uses PaletteContext for value otherwise
     * @default false
     */
    isDark?: boolean;
    /**
     * When present, show the Sidepanel
     */
    showSidePanel?: boolean;
    /**
     * When provided, callback function invoked when the Sidepanel is closed or the cross icon is pressed
     */
    onCloseSidePanel?: () => void;
    /**
     * Determines the type of Sidepanel
     * @default default
     */
    type?: 'vertical' | 'horizontal';
    /**
     * Title for the Sidepanel
     */
    title: string;
    /**
     * When present, show the Tertiary Button
     * @default true
     */
    showTertiaryButton?: boolean;
    /**
     * When present, show the Link
     * @default true
     */
    showLink?: boolean;
    /**
     * When present, show the Secondary Button
     * @default true
     */
    showSecondaryButton?: boolean;
    /**
     * Tertiary Button Props (e.g Button component Props)
     * @default {
        size: 'medium',
        text: 'Button',
        variant: 'tertiary',
        onClick: () => console.log('tertiary button clicked'),
      }
     */
    tertiaryButtonProps?: object;
    /**
     * Link Props (e.g Link component Props)
     * @default {
      iconLeading: '',
      iconTrailing: 'arrow_forward',
      label: 'Link',
      size: 'medium',
      onClick: () => console.log('link clicked'),
    }
     */
    linkProps?: object;
    /**
     * Secondary Button Props (e.g Button component Props)
     * @default {
      size: 'medium',
      text: 'Button',
      variant: 'secondary',
      onClick: () => console.log('secondary button clicked'),
    }
     */
    secondaryButtonProps?: object;
    /**
     * Primary Button Props (e.g Button component Props)
     * @default {
      size: 'medium',
      text: 'Button',
      variant: 'primary',
      onClick: () => console.log('primary button clicked'),
    }
     */
    primaryButtonProps?: object;
    /**
     * Determines the height of vertical Sidepanel.
     * Percerntage value is recommended, but all length units are supported.
     * - @param {string} px pixels.
     * - @param {string} em ems.
     * - @param {string} rem rems.
     * - @param {string} % percentage.
     * - @param {string} vh viewport height.
     * @default 60%
     */
    verticalSidepanelHeight?: string;
    /**
     * Determines the width of Horizontal Sidepanel.
     * Percerntage value is recommended, but all length units are supported.
     * @param {string} px pixels.
     * @param {string} em ems.
     * @param {string} rem rems.
     * @param {string} % percentage.
     * @param {string} vw viewport width.
     * @default 40%
     */
    horizontalSidepanelWidth?: string;
    /**
     * Vertical Header Image
     * @default true
     */
    imageUrl?: string;
    /**
     * Vertical Header Image container style
     * @default true
     */
    imageContainerStyle?: CSSProperties;
    /**
    * Render footer if showFooter is true
    * @default true
    */
    showFooter?: boolean;
}
