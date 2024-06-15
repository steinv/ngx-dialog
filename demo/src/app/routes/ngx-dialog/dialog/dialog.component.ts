import { Component, OnDestroy, inject } from '@angular/core';
import { NgxDialogController, NgxDialogViewComponent } from '@steinv/ngx-dialog';
import { Subject, filter, merge, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
// implement the NgxDialogViewComponent interface with your output and input interface. In this example there's no input
export class DialogComponent implements NgxDialogViewComponent<DialogOutput, DialogInput>, OnDestroy {

  public readonly ngxDialogController = inject<NgxDialogController<DialogOutput, DialogInput>>(NgxDialogController<DialogOutput, DialogInput>);
  protected readonly destroy$ = new Subject<void>();

  public constructor() {
    // dismiss dialog when clicking on the backdrop or pressing Esc-key
    merge(
      this.ngxDialogController.backdropClick(),
      this.ngxDialogController.keydownEvents().pipe(filter(({ key }) => key === 'Escape'))
    ).pipe(
      takeUntil(this.destroy$)
    )
      .subscribe(() => this.ngxDialogController.dismiss())
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  confirmDialog(input: string) {
    const output: DialogOutput = {
      favorite: input,
    }
    this.ngxDialogController.confirm(output);
  }
}

// here you can add any output that your dialog should return to the caller
export interface DialogOutput {
  favorite: string;
}

export interface DialogInput {
  favorite: string;
}