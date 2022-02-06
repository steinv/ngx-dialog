import { Component } from '@angular/core';
import { NgxDialogController, NgxDialogViewComponent } from '@steinv/ngx-dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
// implement the NgxDialogViewComponent interface with your output and input interface. In this example there's no input
export class DialogComponent implements NgxDialogViewComponent<DialogOutput, void> {

  // inject the ngxDialogController on the constructor of your NgxDialogViewComponent
  constructor(
    public readonly control: NgxDialogController<DialogOutput, void>
  ) { }

  confirmDialog(input: string) {
    const output: DialogOutput = {
      favorite: input,
    }
    this.control.confirm(output);
  }
}

// here you can add any output that your dialog should return to the caller
export interface DialogOutput {
  favorite: string;
}