
export interface DialogResult<O> {
  result: DialogResolution;
  data?: O;
}

export enum DialogResolution {
  CONFIRM,
  DISMISS,
}
