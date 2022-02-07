import { Component } from '@angular/core';
import { NgxDialogController, NgxDialogViewComponent } from '@steinv/ngx-dialog';
import { filter, merge } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
// implement the NgxDialogViewComponent interface with your output and input interface. In this example there's no input
export class DialogComponent implements NgxDialogViewComponent<DialogOutput, DialogInput> {

  // inject the ngxDialogController on the constructor of your NgxDialogViewComponent
  constructor(
    public readonly ngxDialogController: NgxDialogController<DialogOutput, DialogInput>
  ) { 
    // dismiss dialog when clicking on the backdrop or pressing Esc-key
    merge(
      ngxDialogController.backdropClick(),
      ngxDialogController.keydownEvents().pipe(filter(({key}) => key === 'Escape'))
    )
    .subscribe(() => ngxDialogController.dismiss())
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