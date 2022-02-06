import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogDemoComponent } from './demo/demo.component';
import { DialogComponent } from './dialog/dialog.component';
import { InceptionComponent } from './inception/inception.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DialogDemoComponent,
  }
];

@NgModule({
  declarations: [
    DialogDemoComponent,
    DialogComponent,
    InceptionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class NgxDialogDemoModule { }
