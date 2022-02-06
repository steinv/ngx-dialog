export interface DialogResult<O> {
    result: DialogResolution;
    data?: O;
}
export declare enum DialogResolution {
    CONFIRM = 0,
    DISMISS = 1
}
