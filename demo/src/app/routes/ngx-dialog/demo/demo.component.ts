import { OverlayConfig } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { DialogResolution, NgxDialogService } from '@steinv/ngx-dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { InceptionComponent } from '../inception/inception.component';

@Component({
  selector: 'app-dialog-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DialogDemoComponent {

  public dialogOutput: string | undefined;

  constructor(
    private readonly ngxDialogService: NgxDialogService
  ) { }

  openDialogWithInput(input: string) {
    const ctrl = this.ngxDialogService.open(DialogComponent, {favorite: input});
  
    // the NgxDialogControl has an afterClosed() function that returns an observable that can be subscribed to.
    ctrl.afterClosed().subscribe(
      (output) => {
        switch (output.result) {
          // the dialog can either be confirmed or dismissed. 
          case DialogResolution.CONFIRM:
            // A confirmed dialog can return data as defined in the dialog component. 
            this.dialogOutput = output.data?.favorite;
            break;
        
          default:
            break;
        }
      }
    )
  }

  openInceptionDialog(): void {
    const config: OverlayConfig = {
      
    }
    this.ngxDialogService.open(InceptionComponent, config);
  }


}
