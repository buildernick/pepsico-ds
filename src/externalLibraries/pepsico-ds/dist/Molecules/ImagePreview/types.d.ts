import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ImagePriviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    src: string;
    /** Whether the dark theme is applied. */
    isDark?: boolean;
    /** Optional; Image placeholder. */
    placeholder?: string;
    /** Optional; prop to show hide the image rotate controls; default is true*/
    showRotateControls?: boolean;
    /** Optional; prop to show hide the image flip control; default is true*/
    showFlipControl?: boolean;
    /** Optional; prop to show hide the image download control; default is true*/
    showDownloadControl?: boolean;
    /** Optional; prop to show hide the image print control; default is true*/
    showPrintControl?: boolean;
    /** Optional; prop to show hide the image zoom controls; default is true*/
    showZoomControls?: boolean;
    /**
     * Optional; When provided, callback function invoked when the image zoom-in value changes
     */
    onZoomIn?: (zoomScale: number) => void;
    /**
     * Optional; When provided, callback function invoked when the image zoom-out value changes
     */
    onZoomOut?: (zoomScale: number) => void;
    /**
     * Optional; When provided, callback function invoked when the image rotate to left
     */
    onRotateLeft?: (rotationAngel: number) => void;
    /**
     * Optional; When provided, callback function invoked when the image rotate to right
     */
    onRotateRight?: (rotationAngel: number) => void;
    /**
     * Optional; When provided, callback function invoked when the image flipped
     */
    onFlip?: (flipped: boolean) => void;
    /**
     * Optional; When provided, callback function invoked when the image download operation performed
     */
    onDownload?: (downloadedImageName: string) => void;
}
export interface IHTMLImageElement extends HTMLImageElement {
    mozRequestFullScreen?(): Promise<void>;
    webkitRequestFullscreen?(): Promise<void>;
    msRequestFullscreen?(): Promise<void>;
}
