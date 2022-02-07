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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRpYWxvZy9zcmMvbGliL25neC1kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQUU5RDs7R0FFRztBQUVILGFBQWE7QUFDYixNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLFlBQW9CLE9BQWdCLEVBQVUsUUFBa0I7UUFBNUMsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBSSxDQUFDO0lBUXJFOztPQUVHO0lBQ0gsSUFBSSxDQUE0QixTQUErRCxFQUFFLFNBQWlCLEVBQUUsTUFBc0I7UUFDeEksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLHNEQUFzRDtZQUN0RCxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPO2lCQUNsQyxRQUFRLEVBQUU7aUJBQ1YsTUFBTSxFQUFFO2lCQUNSLGtCQUFrQixFQUFFO2lCQUNwQixnQkFBZ0IsRUFBRSxDQUFDO1lBRXRCLG1EQUFtRDtZQUNuRCxNQUFNLEdBQUc7Z0JBQ1AsZ0JBQWdCO2dCQUNoQixXQUFXLEVBQUUsSUFBSTtnQkFDakIsYUFBYSxFQUFFLHFCQUFxQjtnQkFDcEMsVUFBVSxFQUFFLGtCQUFrQjthQUMvQixDQUFBO1NBQ0Y7UUFFRCwrQ0FBK0M7UUFDL0MsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFL0MsNkZBQTZGO1FBQzdGLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxtQkFBbUIsQ0FBZ0IsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZGLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDL0IsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3JCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUU7YUFDN0Q7U0FDRixDQUFDLENBQUM7UUFFSCx5Q0FBeUM7UUFDekMsTUFBTSxNQUFNLEdBQUcsSUFBSSxlQUFlLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM5RCxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFCLHNDQUFzQztRQUN0QyxPQUFPLGdCQUFnQixDQUFDO0lBQzFCLENBQUM7OzZHQWhEVSxnQkFBZ0I7aUhBQWhCLGdCQUFnQjsyRkFBaEIsZ0JBQWdCO2tCQUY1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheUNvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgT3ZlcmxheSwgQ29tcG9uZW50VHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neERpYWxvZ1ZpZXdDb21wb25lbnQgfSBmcm9tICcuL25neC1kaWFsb2ctdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3hEaWFsb2dDb250cm9sbGVyIH0gZnJvbSAnLi9uZ3gtZGlhbG9nLmNvbnRyb2xsZXInO1xyXG5cclxuLyoqXHJcbiAqIFNlcnZpY2UgdXNlZCB0byBvcGVuIGEgbmV3IERpYWxvZyBjb21wb25lbnRcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuLy8gQHRzLWlnbm9yZVxyXG5leHBvcnQgY2xhc3MgTmd4RGlhbG9nU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LCBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcikgeyB9XHJcblxyXG4gIC8vIE92ZXJsb2FkaW5nIG1ldGhvZHNcclxuICBvcGVuPE9VVFBVVCwgSU5QVVQgPSB1bmRlZmluZWQ+KGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxOZ3hEaWFsb2dWaWV3Q29tcG9uZW50PE9VVFBVVCwgSU5QVVQ+Pik6IE5neERpYWxvZ0NvbnRyb2xsZXI8T1VUUFVULCBJTlBVVD47XHJcbiAgb3BlbjxPVVRQVVQsIElOUFVUID0gdW5kZWZpbmVkPihjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8Tmd4RGlhbG9nVmlld0NvbXBvbmVudDxPVVRQVVQsIElOUFVUPj4sIGlucHV0RGF0YTogSU5QVVQpOiBOZ3hEaWFsb2dDb250cm9sbGVyPE9VVFBVVCwgSU5QVVQ+O1xyXG4gIG9wZW48T1VUUFVULCBJTlBVVCA9IHVuZGVmaW5lZD4oY29tcG9uZW50OiBDb21wb25lbnRUeXBlPE5neERpYWxvZ1ZpZXdDb21wb25lbnQ8T1VUUFVULCBJTlBVVD4+LCBjb25maWc6IE92ZXJsYXlDb25maWcpOiBOZ3hEaWFsb2dDb250cm9sbGVyPE9VVFBVVCwgSU5QVVQ+O1xyXG4gIG9wZW48T1VUUFVULCBJTlBVVCA9IHVuZGVmaW5lZD4oY29tcG9uZW50OiBDb21wb25lbnRUeXBlPE5neERpYWxvZ1ZpZXdDb21wb25lbnQ8T1VUUFVULCBJTlBVVD4+LCBpbnB1dERhdGE6IElOUFVULCBjb25maWc6IE92ZXJsYXlDb25maWcpOiBOZ3hEaWFsb2dDb250cm9sbGVyPE9VVFBVVCwgSU5QVVQ+O1xyXG5cclxuICAvKipcclxuICAgKiBJbXBsZW1lbnRhdGlvbiB0byBvcGVuIGEgY3VzdG9tIGNvbXBvbmVudCBpbiBhbiBvdmVybGF5XHJcbiAgICovXHJcbiAgb3BlbjxPVVRQVVQsIElOUFVUID0gdW5kZWZpbmVkPihjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8Tmd4RGlhbG9nVmlld0NvbXBvbmVudDxPVVRQVVQsIElOUFVUPj4sIGlucHV0RGF0YT86IElOUFVULCBjb25maWc/OiBPdmVybGF5Q29uZmlnKTogTmd4RGlhbG9nQ29udHJvbGxlcjxPVVRQVVQsIElOUFVUPiB7XHJcbiAgICBpZiAoIWNvbmZpZykge1xyXG4gICAgICAvLyBEZWZhdWx0IGNvbmZpZzogZ2xvYmFsbHkgY2VudGVyZWQgcG9zaXRpb24gc3RyYXRlZ3lcclxuICAgICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheVxyXG4gICAgICAgIC5wb3NpdGlvbigpXHJcbiAgICAgICAgLmdsb2JhbCgpXHJcbiAgICAgICAgLmNlbnRlckhvcml6b250YWxseSgpXHJcbiAgICAgICAgLmNlbnRlclZlcnRpY2FsbHkoKTtcclxuXHJcbiAgICAgIC8vIEFkZCBjc3MgY2xhc3NlcyB0byB0aGUgYmFja2Ryb3AgYW5kIGRpYWxvZy1wYW5lbFxyXG4gICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgcG9zaXRpb25TdHJhdGVneSxcclxuICAgICAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcclxuICAgICAgICBiYWNrZHJvcENsYXNzOiAnbmd4LWRpYWxvZy1iYWNrZHJvcCcsXHJcbiAgICAgICAgcGFuZWxDbGFzczogJ25neC1kaWFsb2ctcGFuZWwnLFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSBvdmVybGF5IHdpdGggY3VzdG9taXphYmxlIG9wdGlvbnNcclxuICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKGNvbmZpZyk7XHJcbiAgICBcclxuICAgIC8vIENyZWF0ZSBpbmplY3RvciB0byBiZSBhYmxlIHRvIHJlZmVyZW5jZSB0aGUgRGlhbG9nQ29udHJvbGxlciBmcm9tIHdpdGhpbiBkaWFsb2cgY29tcG9uZW50c1xyXG4gICAgY29uc3QgZGlhbG9nQ29udHJvbGxlciA9IG5ldyBOZ3hEaWFsb2dDb250cm9sbGVyPE9VVFBVVCwgSU5QVVQ+KG92ZXJsYXlSZWYsIGlucHV0RGF0YSk7XHJcbiAgICBjb25zdCBpbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XHJcbiAgICAgIHBhcmVudDogdGhpcy5pbmplY3RvcixcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgeyBwcm92aWRlOiBOZ3hEaWFsb2dDb250cm9sbGVyLCB1c2VWYWx1ZTogZGlhbG9nQ29udHJvbGxlciB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQXR0YWNoIGNvbXBvbmVudCBwb3J0YWwgdG8gdGhlIG92ZXJsYXlcclxuICAgIGNvbnN0IHBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoY29tcG9uZW50LCBudWxsLCBpbmplY3Rvcik7XHJcbiAgICBvdmVybGF5UmVmLmF0dGFjaChwb3J0YWwpO1xyXG5cclxuICAgIC8vIHJldHVybiB0aGUgY29udHJvbGxlciB0byB0aGUgY2FsbGVyXHJcbiAgICByZXR1cm4gZGlhbG9nQ29udHJvbGxlcjtcclxuICB9XHJcbn1cclxuIl19