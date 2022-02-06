import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { NgxDialogService } from './ngx-dialog.service';


@NgModule({
  declarations: [],
  imports: [
    OverlayModule,
  ],
  providers: [
    NgxDialogService,
  ],
  exports: []
})
export class NgxDialogModule { }
