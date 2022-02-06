import { OverlayConfig } from '@angular/cdk/overlay';
import { Overlay, ComponentType } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { NgxDialogViewComponent } from './ngx-dialog-view.component';
import { NgxDialogController } from './ngx-dialog.controller';

/**
 * Service used to open a new Dialog component
 */
@Injectable()
// @ts-ignore
export class NgxDialogService {
  constructor(private overlay: Overlay, private injector: Injector) { }

  // Overloading methods
  open<O, I = undefined>(component: ComponentType<NgxDialogViewComponent<O, I>>): NgxDialogController<O, I>;
  open<O, I = undefined>(component: ComponentType<NgxDialogViewComponent<O, I>>, inputData: I): NgxDialogController<O, I>;
  open<O, I = undefined>(component: ComponentType<NgxDialogViewComponent<O, I>>, config: OverlayConfig): NgxDialogController<O, I>;
  open<O, I = undefined>(component: ComponentType<NgxDialogViewComponent<O, I>>, inputData: I, config: OverlayConfig): NgxDialogController<O, I>;

  /**
   * Implementation to open a custom component in an overlay
   */
  open<O, I = undefined>(component: ComponentType<NgxDialogViewComponent<O, I>>, inputData?: I, config?: OverlayConfig): NgxDialogController<O, I> {
    if (!config) {
      // Default config: globally centered position strategy
      const positionStrategy = this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically();

      // Add css classes to the backdrop and dialog-panel
      config = {
        positionStrategy,
        hasBackdrop: true,
        backdropClass: 'ngx-dialog-backdrop',
        panelClass: 'ngx-dialog-panel',
      }
    }

    // Create the overlay with customizable options
    const overlayRef = this.overlay.create(config);

    
    // Create injector to be able to reference the DialogController from within dialog components
    const dialogController = new NgxDialogController<O, I>(overlayRef, inputData);
    const injector = Injector.create({
      parent: this.injector,
      providers: [
        { provide: NgxDialogController, useValue: dialogController },
      ],
    });

    // Attach component portal to the overlay
    const portal = new ComponentPortal(component, null, injector);
    overlayRef.attach(portal);

    // return the controller to the caller
    return dialogController;
  }
}
