import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDialogModule } from '@steinv/ngx-dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxDialogDemoModule } from './routes/ngx-dialog/ngx-dialog-demo.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // import the NgxDialogModule in your app module to start using dialogs
    NgxDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
