export interface DialogResult<OUTPUT> {
    result: DialogResolution;
    data?: OUTPUT;
}
export declare enum DialogResolution {
    CONFIRM = 0,
    DISMISS = 1
}
