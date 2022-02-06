import { NgxDialogController } from "./ngx-dialog.controller";

/**
 * All dialog-components should implement this.
 *
 * Example:
 * export class MyDialogComponent implements DialogComponent<MyOutputInterface, MyInputInterface> {
 *   public constructor(control: DialogController<MyOutputInterface, MyInputInterface>) {}
 *
 *   public close(outputData: MyOutputInterface) {
 *     this.control.confirm(outputData);
 *   }
 * }
 */
export abstract class NgxDialogViewComponent<O, I = undefined> {
  abstract get control(): NgxDialogController<O, I>;
}
