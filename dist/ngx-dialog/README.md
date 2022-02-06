# Ngx-dialog

Angular dialog module
Injects a dialog component with input and output

## [Demo](https://steinv.github.io/ngx-dialog/dist/demo)

## Installation

Install Ngx-dialog:

`npm i -S @steinv/ngx-dialog`

Import the global style scss in your "styles.scss"

```
@import '@steinv/ngx-dialog/assets/styles.scss';
```

Add NgxDialogModule import to your app module:

```
import {NgxDialogModule} from '@steinv/ngx-dialog';

...

@NgModule({
  imports: [
    ...
    NgxDialogModule
    ...
  ],
  ...
})
```

## Usage

### Dialog component:

To create any dialog component implement `NgxDialogViewComponent<OutputInterface, InputInterface>` and add a constructor to inject the `control: NgxDialogController`.

Example
```
export interface MyDialogInput {
    someInput: any;
}

export interface MyDialogOutput {
    someOutput: any;
}

export class MyDialogComponent implements NgxDialogViewComponent<MyDialogOutput, MyDialogInput> {
  constructor(
      public readonly control: NgxDialogController<MyDialogOutput, MyDialogInput>
  ) { }

  confirm(someOutput: any): void{
      this.control.confirm({someOutput});
  }

  dismiss(): void {
      this.control.dismiss();
  }
}
```

### Opening a dialog component

Use the NgxDialogService to open a dialog component. 

```
openMyDialogComponent(): Observable<DialogResult<DialogOutput>> {
    const control = ngxDialogService.open(MyDialogComponent, {someInput});
    return control.afterClosed();
}
```

### Custom config

Add a `OverlayConfig` when opening the dialog to add your own css-selectors or position the dialog differently
```
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