import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { NgxDialogController } from './ngx-dialog.controller';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
/**
 * Service used to open a new Dialog component
 */
// @ts-ignore
export class NgxDialogService {
    constructor(overlay, injector) {
        this.overlay = overlay;
        this.injector = injector;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: NgxDialogService, deps: [{ token: i1.Overlay }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: NgxDialogService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: NgxDialogService, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Overlay }, { type: i0.Injector }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRpYWxvZy9zcmMvbGliL25neC1kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQUU5RDs7R0FFRztBQUVILGFBQWE7QUFDYixNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLFlBQW9CLE9BQWdCLEVBQVUsUUFBa0I7UUFBNUMsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBSSxDQUFDO0lBUXJFOztPQUVHO0lBQ0gsSUFBSSxDQUE0QixTQUErRCxFQUFFLFNBQWlCLEVBQUUsTUFBc0I7UUFDeEksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ1osc0RBQXNEO1lBQ3RELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU87aUJBQ2xDLFFBQVEsRUFBRTtpQkFDVixNQUFNLEVBQUU7aUJBQ1Isa0JBQWtCLEVBQUU7aUJBQ3BCLGdCQUFnQixFQUFFLENBQUM7WUFFdEIsbURBQW1EO1lBQ25ELE1BQU0sR0FBRztnQkFDUCxnQkFBZ0I7Z0JBQ2hCLFdBQVcsRUFBRSxJQUFJO2dCQUNqQixhQUFhLEVBQUUscUJBQXFCO2dCQUNwQyxVQUFVLEVBQUUsa0JBQWtCO2FBQy9CLENBQUE7UUFDSCxDQUFDO1FBRUQsK0NBQStDO1FBQy9DLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRS9DLDZGQUE2RjtRQUM3RixNQUFNLGdCQUFnQixHQUFHLElBQUksbUJBQW1CLENBQWdCLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN2RixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQy9CLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUTtZQUNyQixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFO2FBQzdEO1NBQ0YsQ0FBQyxDQUFDO1FBRUgseUNBQXlDO1FBQ3pDLE1BQU0sTUFBTSxHQUFHLElBQUksZUFBZSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDOUQsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUxQixzQ0FBc0M7UUFDdEMsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDOzhHQWhEVSxnQkFBZ0I7a0hBQWhCLGdCQUFnQjs7MkZBQWhCLGdCQUFnQjtrQkFGNUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlDb25maWcgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IE92ZXJsYXksIENvbXBvbmVudFR5cGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hEaWFsb2dWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtZGlhbG9nLXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmd4RGlhbG9nQ29udHJvbGxlciB9IGZyb20gJy4vbmd4LWRpYWxvZy5jb250cm9sbGVyJztcclxuXHJcbi8qKlxyXG4gKiBTZXJ2aWNlIHVzZWQgdG8gb3BlbiBhIG5ldyBEaWFsb2cgY29tcG9uZW50XHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbi8vIEB0cy1pZ25vcmVcclxuZXhwb3J0IGNsYXNzIE5neERpYWxvZ1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHsgfVxyXG5cclxuICAvLyBPdmVybG9hZGluZyBtZXRob2RzXHJcbiAgb3BlbjxPVVRQVVQsIElOUFVUID0gdW5kZWZpbmVkPihjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8Tmd4RGlhbG9nVmlld0NvbXBvbmVudDxPVVRQVVQsIElOUFVUPj4pOiBOZ3hEaWFsb2dDb250cm9sbGVyPE9VVFBVVCwgSU5QVVQ+O1xyXG4gIG9wZW48T1VUUFVULCBJTlBVVCA9IHVuZGVmaW5lZD4oY29tcG9uZW50OiBDb21wb25lbnRUeXBlPE5neERpYWxvZ1ZpZXdDb21wb25lbnQ8T1VUUFVULCBJTlBVVD4+LCBpbnB1dERhdGE6IElOUFVUKTogTmd4RGlhbG9nQ29udHJvbGxlcjxPVVRQVVQsIElOUFVUPjtcclxuICBvcGVuPE9VVFBVVCwgSU5QVVQgPSB1bmRlZmluZWQ+KGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxOZ3hEaWFsb2dWaWV3Q29tcG9uZW50PE9VVFBVVCwgSU5QVVQ+PiwgY29uZmlnOiBPdmVybGF5Q29uZmlnKTogTmd4RGlhbG9nQ29udHJvbGxlcjxPVVRQVVQsIElOUFVUPjtcclxuICBvcGVuPE9VVFBVVCwgSU5QVVQgPSB1bmRlZmluZWQ+KGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxOZ3hEaWFsb2dWaWV3Q29tcG9uZW50PE9VVFBVVCwgSU5QVVQ+PiwgaW5wdXREYXRhOiBJTlBVVCwgY29uZmlnOiBPdmVybGF5Q29uZmlnKTogTmd4RGlhbG9nQ29udHJvbGxlcjxPVVRQVVQsIElOUFVUPjtcclxuXHJcbiAgLyoqXHJcbiAgICogSW1wbGVtZW50YXRpb24gdG8gb3BlbiBhIGN1c3RvbSBjb21wb25lbnQgaW4gYW4gb3ZlcmxheVxyXG4gICAqL1xyXG4gIG9wZW48T1VUUFVULCBJTlBVVCA9IHVuZGVmaW5lZD4oY29tcG9uZW50OiBDb21wb25lbnRUeXBlPE5neERpYWxvZ1ZpZXdDb21wb25lbnQ8T1VUUFVULCBJTlBVVD4+LCBpbnB1dERhdGE/OiBJTlBVVCwgY29uZmlnPzogT3ZlcmxheUNvbmZpZyk6IE5neERpYWxvZ0NvbnRyb2xsZXI8T1VUUFVULCBJTlBVVD4ge1xyXG4gICAgaWYgKCFjb25maWcpIHtcclxuICAgICAgLy8gRGVmYXVsdCBjb25maWc6IGdsb2JhbGx5IGNlbnRlcmVkIHBvc2l0aW9uIHN0cmF0ZWd5XHJcbiAgICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcclxuICAgICAgICAucG9zaXRpb24oKVxyXG4gICAgICAgIC5nbG9iYWwoKVxyXG4gICAgICAgIC5jZW50ZXJIb3Jpem9udGFsbHkoKVxyXG4gICAgICAgIC5jZW50ZXJWZXJ0aWNhbGx5KCk7XHJcblxyXG4gICAgICAvLyBBZGQgY3NzIGNsYXNzZXMgdG8gdGhlIGJhY2tkcm9wIGFuZCBkaWFsb2ctcGFuZWxcclxuICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgIHBvc2l0aW9uU3RyYXRlZ3ksXHJcbiAgICAgICAgaGFzQmFja2Ryb3A6IHRydWUsXHJcbiAgICAgICAgYmFja2Ryb3BDbGFzczogJ25neC1kaWFsb2ctYmFja2Ryb3AnLFxyXG4gICAgICAgIHBhbmVsQ2xhc3M6ICduZ3gtZGlhbG9nLXBhbmVsJyxcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgb3ZlcmxheSB3aXRoIGN1c3RvbWl6YWJsZSBvcHRpb25zXHJcbiAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZShjb25maWcpO1xyXG4gICAgXHJcbiAgICAvLyBDcmVhdGUgaW5qZWN0b3IgdG8gYmUgYWJsZSB0byByZWZlcmVuY2UgdGhlIERpYWxvZ0NvbnRyb2xsZXIgZnJvbSB3aXRoaW4gZGlhbG9nIGNvbXBvbmVudHNcclxuICAgIGNvbnN0IGRpYWxvZ0NvbnRyb2xsZXIgPSBuZXcgTmd4RGlhbG9nQ29udHJvbGxlcjxPVVRQVVQsIElOUFVUPihvdmVybGF5UmVmLCBpbnB1dERhdGEpO1xyXG4gICAgY29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xyXG4gICAgICBwYXJlbnQ6IHRoaXMuaW5qZWN0b3IsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHsgcHJvdmlkZTogTmd4RGlhbG9nQ29udHJvbGxlciwgdXNlVmFsdWU6IGRpYWxvZ0NvbnRyb2xsZXIgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEF0dGFjaCBjb21wb25lbnQgcG9ydGFsIHRvIHRoZSBvdmVybGF5XHJcbiAgICBjb25zdCBwb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKGNvbXBvbmVudCwgbnVsbCwgaW5qZWN0b3IpO1xyXG4gICAgb3ZlcmxheVJlZi5hdHRhY2gocG9ydGFsKTtcclxuXHJcbiAgICAvLyByZXR1cm4gdGhlIGNvbnRyb2xsZXIgdG8gdGhlIGNhbGxlclxyXG4gICAgcmV0dXJuIGRpYWxvZ0NvbnRyb2xsZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ==