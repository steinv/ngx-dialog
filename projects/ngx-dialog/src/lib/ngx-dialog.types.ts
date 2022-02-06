
export interface DialogResult<OUTPUT> {
  result: DialogResolution;
  data?: OUTPUT;
}

export enum DialogResolution {
  CONFIRM,
  DISMISS,
}
