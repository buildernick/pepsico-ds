
declare global {
    interface Document {
        execCommand: (commandId: string, showUI?: boolean | undefined, value?: string | undefined) => boolean;
    }
}
