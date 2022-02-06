import { OverlayConfig } from '@angular/cdk/overlay';
import { Overlay, ComponentType } from '@angular/cdk/overlay';
import { Injector } from '@angular/core';
import { NgxDialogViewComponent } from './ngx-dialog-view.component';
import { NgxDialogController } from './ngx-dialog.controller';
import * as i0 from "@angular/core";
/**
 * Service used to open a new Dialog component
 */
export declare class NgxDialogService {
    private overlay;
    private injector;
    constructor(overlay: Overlay, injector: Injector);
    open<O, I = undefined>(component: ComponentType<NgxDialogViewComponent<O, I>>): NgxDialogController<O, I>;
    open<O, I = undefined>(component: ComponentType<NgxDialogViewComponent<O, I>>, inputData: I): NgxDialogController<O, I>;
    open<O, I = undefined>(component: ComponentType<NgxDialogViewComponent<O, I>>, config: OverlayConfig): NgxDialogController<O, I>;
    open<O, I = undefined>(component: ComponentType<NgxDialogViewComponent<O, I>>, inputData: I, config: OverlayConfig): NgxDialogController<O, I>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxDialogService>;
}
