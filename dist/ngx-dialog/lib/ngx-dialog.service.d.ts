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
    open<OUTPUT, INPUT = undefined>(component: ComponentType<NgxDialogViewComponent<OUTPUT, INPUT>>): NgxDialogController<OUTPUT, INPUT>;
    open<OUTPUT, INPUT = undefined>(component: ComponentType<NgxDialogViewComponent<OUTPUT, INPUT>>, inputData: INPUT): NgxDialogController<OUTPUT, INPUT>;
    open<OUTPUT, INPUT = undefined>(component: ComponentType<NgxDialogViewComponent<OUTPUT, INPUT>>, config: OverlayConfig): NgxDialogController<OUTPUT, INPUT>;
    open<OUTPUT, INPUT = undefined>(component: ComponentType<NgxDialogViewComponent<OUTPUT, INPUT>>, inputData: INPUT, config: OverlayConfig): NgxDialogController<OUTPUT, INPUT>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxDialogService>;
}
