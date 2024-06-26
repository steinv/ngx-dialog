import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import * as i0 from '@angular/core';
import { inject, Injector, Injectable, NgModule } from '@angular/core';
import { Subject } from 'rxjs';

var DialogResolution;
(function (DialogResolution) {
    DialogResolution[DialogResolution["CONFIRM"] = 0] = "CONFIRM";
    DialogResolution[DialogResolution["DISMISS"] = 1] = "DISMISS";
})(DialogResolution || (DialogResolution = {}));

/**
 * Controller class that is injected with each Dialog component.
 * Use this controller to read input data and write output data from your dialog
 */
class NgxDialogController {
    constructor(overlayRef, input) {
        this.overlayRef = overlayRef;
        this.input = input;
        this.afterClosedSubject = new Subject();
        this.input = input;
    }
    dismiss() {
        this.overlayRef.dispose();
        this.afterClosedSubject.next({ result: DialogResolution.DISMISS });
        this.afterClosedSubject.complete();
    }
    confirm(data) {
        this.overlayRef.dispose();
        this.afterClosedSubject.next({
            result: DialogResolution.CONFIRM,
            data
        });
        this.afterClosedSubject.complete();
    }
    /**
     * An Observable that notifies when the overlay has closed
     */
    afterClosed() {
        return this.afterClosedSubject.asObservable();
    }
    /**
     * An Observable that notifies when the backdrop was clicked
     */
    backdropClick() {
        return this.overlayRef.backdropClick();
    }
    /**
     * An Observable that notifies the keyboard down events
     */
    keydownEvents() {
        return this.overlayRef.keydownEvents();
    }
}

/**
 * Service used to open a new Dialog component
 */
// @ts-ignore
class NgxDialogService {
    constructor() {
        this.overlay = inject(Overlay);
        this.injector = inject(Injector);
    }
    /**
     * Implementation to open a custom component in an overlay
     */
    open(component, inputData, config) {
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
            };
        }
        // Create the overlay with customizable options
        const overlayRef = this.overlay.create(config);
        // Create injector to be able to reference the DialogController from within dialog components
        const dialogController = new NgxDialogController(overlayRef, inputData);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NgxDialogService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NgxDialogService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NgxDialogService, decorators: [{
            type: Injectable
        }] });

/**
 * All dialog-components should implement this.
 *
 * Example:
 * export class MyDialogComponent implements NgxDialogViewComponent<MyOutputInterface, MyInputInterface> {
 *   public constructor(ngxDialogController: NgxDialogController<MyOutputInterface, MyInputInterface>) {}
 *
 *   public close(outputData: MyOutputInterface) {
 *     this.ngxDialogController.confirm(outputData);
 *   }
 * }
 */
class NgxDialogViewComponent {
}

class NgxDialogModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NgxDialogModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.3", ngImport: i0, type: NgxDialogModule, imports: [OverlayModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NgxDialogModule, providers: [
            NgxDialogService,
        ], imports: [OverlayModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: NgxDialogModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        OverlayModule,
                    ],
                    providers: [
                        NgxDialogService,
                    ],
                    exports: []
                }]
        }] });

/*
 * Public API Surface of ngx-dialog
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DialogResolution, NgxDialogController, NgxDialogModule, NgxDialogService, NgxDialogViewComponent };
//# sourceMappingURL=steinv-ngx-dialog.mjs.map
