import { NgxDialogController } from "./ngx-dialog.controller";

/**
 * All dialog-components should implement this.
 *
 * Example:
 * export class MyDialogComponent implements NgxDialogComponent<MyOutputInterface, MyInputInterface> {
 *   public constructor(control: NgxDialogController<MyOutputInterface, MyInputInterface>) {}
 *
 *   public close(outputData: MyOutputInterface) {
 *     this.control.confirm(outputData);
 *   }
 * }
 */
export abstract class NgxDialogViewComponent<OUTPUT, INPUT = undefined> {
  abstract get control(): NgxDialogController<OUTPUT, INPUT>;
}
