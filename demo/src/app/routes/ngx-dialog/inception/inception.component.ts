import { Component, inject } from '@angular/core';
import { NgxDialogController, NgxDialogService, NgxDialogViewComponent } from '@steinv/ngx-dialog';

@Component({
  selector: 'app-inception',
  templateUrl: './inception.component.html',
  styleUrls: ['./inception.component.scss']
})
export class InceptionComponent implements NgxDialogViewComponent<void> {
  public ngxDialogController = inject<NgxDialogController<void>>(NgxDialogController<void>);
  private dialogService = inject(NgxDialogService);

  openDialog(): void {
    this.dialogService.open(InceptionComponent);
  }
}
