import { Component } from '@angular/core';
import { NgxDialogController, NgxDialogService, NgxDialogViewComponent } from '@steinv/ngx-dialog';

@Component({
  selector: 'app-inception',
  templateUrl: './inception.component.html',
  styleUrls: ['./inception.component.scss']
})
export class InceptionComponent implements NgxDialogViewComponent<void> {

  constructor(
    public control: NgxDialogController<void>,
    private dialogService: NgxDialogService,
  ) { }

  openDialog(): void {
    this.dialogService.open(InceptionComponent);
  }
}
