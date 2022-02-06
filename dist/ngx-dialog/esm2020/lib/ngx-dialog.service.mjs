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
}
NgxDialogService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NgxDialogService, deps: [{ token: i1.Overlay }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable });
NgxDialogService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NgxDialogService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NgxDialogService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Overlay }, { type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRpYWxvZy9zcmMvbGliL25neC1kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQUU5RDs7R0FFRztBQUVILGFBQWE7QUFDYixNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLFlBQW9CLE9BQWdCLEVBQVUsUUFBa0I7UUFBNUMsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBSSxDQUFDO0lBUXJFOztPQUVHO0lBQ0gsSUFBSSxDQUFtQixTQUFzRCxFQUFFLFNBQWEsRUFBRSxNQUFzQjtRQUNsSCxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsc0RBQXNEO1lBQ3RELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU87aUJBQ2xDLFFBQVEsRUFBRTtpQkFDVixNQUFNLEVBQUU7aUJBQ1Isa0JBQWtCLEVBQUU7aUJBQ3BCLGdCQUFnQixFQUFFLENBQUM7WUFFdEIsbURBQW1EO1lBQ25ELE1BQU0sR0FBRztnQkFDUCxnQkFBZ0I7Z0JBQ2hCLFdBQVcsRUFBRSxJQUFJO2dCQUNqQixhQUFhLEVBQUUscUJBQXFCO2dCQUNwQyxVQUFVLEVBQUUsa0JBQWtCO2FBQy9CLENBQUE7U0FDRjtRQUVELCtDQUErQztRQUMvQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUcvQyw2RkFBNkY7UUFDN0YsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLG1CQUFtQixDQUFPLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM5RSxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQy9CLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUTtZQUNyQixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFO2FBQzdEO1NBQ0YsQ0FBQyxDQUFDO1FBRUgseUNBQXlDO1FBQ3pDLE1BQU0sTUFBTSxHQUFHLElBQUksZUFBZSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDOUQsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUxQixzQ0FBc0M7UUFDdEMsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDOzs2R0FqRFUsZ0JBQWdCO2lIQUFoQixnQkFBZ0I7MkZBQWhCLGdCQUFnQjtrQkFGNUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlDb25maWcgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IE92ZXJsYXksIENvbXBvbmVudFR5cGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ3hEaWFsb2dWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtZGlhbG9nLXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmd4RGlhbG9nQ29udHJvbGxlciB9IGZyb20gJy4vbmd4LWRpYWxvZy5jb250cm9sbGVyJztcclxuXHJcbi8qKlxyXG4gKiBTZXJ2aWNlIHVzZWQgdG8gb3BlbiBhIG5ldyBEaWFsb2cgY29tcG9uZW50XHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbi8vIEB0cy1pZ25vcmVcclxuZXhwb3J0IGNsYXNzIE5neERpYWxvZ1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHsgfVxyXG5cclxuICAvLyBPdmVybG9hZGluZyBtZXRob2RzXHJcbiAgb3BlbjxPLCBJID0gdW5kZWZpbmVkPihjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8Tmd4RGlhbG9nVmlld0NvbXBvbmVudDxPLCBJPj4pOiBOZ3hEaWFsb2dDb250cm9sbGVyPE8sIEk+O1xyXG4gIG9wZW48TywgSSA9IHVuZGVmaW5lZD4oY29tcG9uZW50OiBDb21wb25lbnRUeXBlPE5neERpYWxvZ1ZpZXdDb21wb25lbnQ8TywgST4+LCBpbnB1dERhdGE6IEkpOiBOZ3hEaWFsb2dDb250cm9sbGVyPE8sIEk+O1xyXG4gIG9wZW48TywgSSA9IHVuZGVmaW5lZD4oY29tcG9uZW50OiBDb21wb25lbnRUeXBlPE5neERpYWxvZ1ZpZXdDb21wb25lbnQ8TywgST4+LCBjb25maWc6IE92ZXJsYXlDb25maWcpOiBOZ3hEaWFsb2dDb250cm9sbGVyPE8sIEk+O1xyXG4gIG9wZW48TywgSSA9IHVuZGVmaW5lZD4oY29tcG9uZW50OiBDb21wb25lbnRUeXBlPE5neERpYWxvZ1ZpZXdDb21wb25lbnQ8TywgST4+LCBpbnB1dERhdGE6IEksIGNvbmZpZzogT3ZlcmxheUNvbmZpZyk6IE5neERpYWxvZ0NvbnRyb2xsZXI8TywgST47XHJcblxyXG4gIC8qKlxyXG4gICAqIEltcGxlbWVudGF0aW9uIHRvIG9wZW4gYSBjdXN0b20gY29tcG9uZW50IGluIGFuIG92ZXJsYXlcclxuICAgKi9cclxuICBvcGVuPE8sIEkgPSB1bmRlZmluZWQ+KGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxOZ3hEaWFsb2dWaWV3Q29tcG9uZW50PE8sIEk+PiwgaW5wdXREYXRhPzogSSwgY29uZmlnPzogT3ZlcmxheUNvbmZpZyk6IE5neERpYWxvZ0NvbnRyb2xsZXI8TywgST4ge1xyXG4gICAgaWYgKCFjb25maWcpIHtcclxuICAgICAgLy8gRGVmYXVsdCBjb25maWc6IGdsb2JhbGx5IGNlbnRlcmVkIHBvc2l0aW9uIHN0cmF0ZWd5XHJcbiAgICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcclxuICAgICAgICAucG9zaXRpb24oKVxyXG4gICAgICAgIC5nbG9iYWwoKVxyXG4gICAgICAgIC5jZW50ZXJIb3Jpem9udGFsbHkoKVxyXG4gICAgICAgIC5jZW50ZXJWZXJ0aWNhbGx5KCk7XHJcblxyXG4gICAgICAvLyBBZGQgY3NzIGNsYXNzZXMgdG8gdGhlIGJhY2tkcm9wIGFuZCBkaWFsb2ctcGFuZWxcclxuICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgIHBvc2l0aW9uU3RyYXRlZ3ksXHJcbiAgICAgICAgaGFzQmFja2Ryb3A6IHRydWUsXHJcbiAgICAgICAgYmFja2Ryb3BDbGFzczogJ25neC1kaWFsb2ctYmFja2Ryb3AnLFxyXG4gICAgICAgIHBhbmVsQ2xhc3M6ICduZ3gtZGlhbG9nLXBhbmVsJyxcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgb3ZlcmxheSB3aXRoIGN1c3RvbWl6YWJsZSBvcHRpb25zXHJcbiAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZShjb25maWcpO1xyXG5cclxuICAgIFxyXG4gICAgLy8gQ3JlYXRlIGluamVjdG9yIHRvIGJlIGFibGUgdG8gcmVmZXJlbmNlIHRoZSBEaWFsb2dDb250cm9sbGVyIGZyb20gd2l0aGluIGRpYWxvZyBjb21wb25lbnRzXHJcbiAgICBjb25zdCBkaWFsb2dDb250cm9sbGVyID0gbmV3IE5neERpYWxvZ0NvbnRyb2xsZXI8TywgST4ob3ZlcmxheVJlZiwgaW5wdXREYXRhKTtcclxuICAgIGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcclxuICAgICAgcGFyZW50OiB0aGlzLmluamVjdG9yLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6IE5neERpYWxvZ0NvbnRyb2xsZXIsIHVzZVZhbHVlOiBkaWFsb2dDb250cm9sbGVyIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBdHRhY2ggY29tcG9uZW50IHBvcnRhbCB0byB0aGUgb3ZlcmxheVxyXG4gICAgY29uc3QgcG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChjb21wb25lbnQsIG51bGwsIGluamVjdG9yKTtcclxuICAgIG92ZXJsYXlSZWYuYXR0YWNoKHBvcnRhbCk7XHJcblxyXG4gICAgLy8gcmV0dXJuIHRoZSBjb250cm9sbGVyIHRvIHRoZSBjYWxsZXJcclxuICAgIHJldHVybiBkaWFsb2dDb250cm9sbGVyO1xyXG4gIH1cclxufVxyXG4iXX0=