import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ngx-dialog',
    loadChildren: () => import('./routes/ngx-dialog/ngx-dialog-demo.module').then(m => m.NgxDialogDemoModule),
  },
  {
    path: '',
    redirectTo: '/ngx-dialog',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
