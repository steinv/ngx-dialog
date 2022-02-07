# @steinv/ngx-dialog

Angular dialog module to inject dialog component(s) with input and output

## [Demo](https://steinv.github.io/ngx-dialog/dist/demo/)

## Installation

Install Ngx-dialog through npm:

`npm i -S @steinv/ngx-dialog`

Import the global style scss in your "styles.scss"

```ts
@import '@steinv/ngx-dialog/assets/styles.scss';
```

Add NgxDialogModule import to your app module:

```ts
import {NgxDialogModule} from '@steinv/ngx-dialog';

...

@NgModule({
  imports: [
    ...
    NgxDialogModule,
    ...
  ],
  ...
})
```

## Usage

### Dialog component:

To create any dialog component implement `NgxDialogViewComponent<OutputInterface, InputInterface>` and add a constructor to inject the `ngxDialogController: NgxDialogController`.

Example
```ts
import {NgxDialogController, NgxDialogViewComponent} from '@steinv/ngx-dialog';

export interface MyDialogInput {
    someInput: any;
}

export interface MyDialogOutput {
    someOutput: any;
}

export class MyDialogComponent implements NgxDialogViewComponent<MyDialogOutput, MyDialogInput> {
  constructor(
      public readonly ngxDialogController: NgxDialogController<MyDialogOutput, MyDialogInput>
  ) {
      // dismiss the dialog when the backdrop is clicked
      ngxDialogController.backdropClick().subscribe(() => ngxDialogController.dismiss())
   }

  // This action will close the dialog and return output
  confirm(someOutput: any): void{
      this.ngxDialogController.confirm({someOutput});
  }

  // This action will dismiss the dialog without output
  dismiss(): void {
      this.ngxDialogController.dismiss();
  }
}
```

### Opening a dialog component

Use the NgxDialogService to open a dialog component. 

```ts
import {NgxDialogService} from '@steinv/ngx-dialog';

...

constructor(private readonly ngxDialogService: NgxDialogService) {}

openMyDialogComponent(): Observable<DialogResult<DialogOutput>> {
    const ngxDialogController = ngxDialogService.open(MyDialogComponent, {someInput});
    return ngxDialogController.afterClosed();
}
```

### Closing a dialog component

Use the NgxDialogController (either in the dialog itself or from where you opened the dialog) to close a dialog component. 

Example dismiss on backdrop clicks

```ts
    ngxDialogController.backdropClick().subscribe(() => ngxDialogController.dismiss());
```

Example dismiss button
```html
    <button (click)="ngxDialogController.dismiss()">Close!</button>
```

### Custom config

Add a `OverlayConfig` when opening the dialog to add your own css-selectors or position the dialog differently
```ts
/**
* inject the overlay in the constructor
* constructor(private readonly overlay: Overlay) {}
*/ 
const positionStrategy = this.overlay
    .position()
    .global()
    .centerHorizontally()
    .centerVertically();

// Add your own css classes to the backdrop and dialog-panel
config: OverlayConfig = {
    positionStrategy,
    hasBackdrop: true,
    backdropClass: 'ngx-dialog-backdrop',
    panelClass: 'ngx-dialog-panel',
}

ngxDialogService.open(MyDialogComponent, config);
```


## License

Licensed under [MIT](https://opensource.org/licenses/MIT).