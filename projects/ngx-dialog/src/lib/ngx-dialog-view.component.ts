import { NgxDialogController } from "./ngx-dialog.controller";

/**
 * All dialog-components should implement this.
 *
 * Example:
 * export class MyDialogComponent implements NgxDialogViewComponent<MyOutputInterface, MyInputInterface> {
 *   public constructor(ngxDialogController: NgxDialogController<MyOutputInterface, MyInputInterface>) {}
 *
 *   public close(outputData: MyOutputInterface) {
 *     this.ngxDialogController.confirm(outputData);
 *   }
 * }
 */
export abstract class NgxDialogViewComponent<OUTPUT, INPUT = undefined> {
  abstract get ngxDialogController(): NgxDialogController<OUTPUT, INPUT>;
}
