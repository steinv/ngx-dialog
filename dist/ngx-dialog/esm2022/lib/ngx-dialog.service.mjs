import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector, inject } from '@angular/core';
import { NgxDialogController } from './ngx-dialog.controller';
import * as i0 from "@angular/core";
/**
 * Service used to open a new Dialog component
 */
// @ts-ignore
export class NgxDialogService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRpYWxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRpYWxvZy9zcmMvbGliL25neC1kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFpQixNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBRTlEOztHQUVHO0FBRUgsYUFBYTtBQUNiLE1BQU0sT0FBTyxnQkFBZ0I7SUFGN0I7UUFHVSxZQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLGFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7S0FnRHJDO0lBeENDOztPQUVHO0lBQ0gsSUFBSSxDQUE0QixTQUErRCxFQUFFLFNBQWlCLEVBQUUsTUFBc0I7UUFDeEksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ1osc0RBQXNEO1lBQ3RELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU87aUJBQ2xDLFFBQVEsRUFBRTtpQkFDVixNQUFNLEVBQUU7aUJBQ1Isa0JBQWtCLEVBQUU7aUJBQ3BCLGdCQUFnQixFQUFFLENBQUM7WUFFdEIsbURBQW1EO1lBQ25ELE1BQU0sR0FBRztnQkFDUCxnQkFBZ0I7Z0JBQ2hCLFdBQVcsRUFBRSxJQUFJO2dCQUNqQixhQUFhLEVBQUUscUJBQXFCO2dCQUNwQyxVQUFVLEVBQUUsa0JBQWtCO2FBQy9CLENBQUE7UUFDSCxDQUFDO1FBRUQsK0NBQStDO1FBQy9DLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRS9DLDZGQUE2RjtRQUM3RixNQUFNLGdCQUFnQixHQUFHLElBQUksbUJBQW1CLENBQWdCLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN2RixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQy9CLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUTtZQUNyQixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFO2FBQzdEO1NBQ0YsQ0FBQyxDQUFDO1FBRUgseUNBQXlDO1FBQ3pDLE1BQU0sTUFBTSxHQUFHLElBQUksZUFBZSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDOUQsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUxQixzQ0FBc0M7UUFDdEMsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDOzhHQWpEVSxnQkFBZ0I7a0hBQWhCLGdCQUFnQjs7MkZBQWhCLGdCQUFnQjtrQkFGNUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlDb25maWcgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IE92ZXJsYXksIENvbXBvbmVudFR5cGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neERpYWxvZ1ZpZXdDb21wb25lbnQgfSBmcm9tICcuL25neC1kaWFsb2ctdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3hEaWFsb2dDb250cm9sbGVyIH0gZnJvbSAnLi9uZ3gtZGlhbG9nLmNvbnRyb2xsZXInO1xyXG5cclxuLyoqXHJcbiAqIFNlcnZpY2UgdXNlZCB0byBvcGVuIGEgbmV3IERpYWxvZyBjb21wb25lbnRcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuLy8gQHRzLWlnbm9yZVxyXG5leHBvcnQgY2xhc3MgTmd4RGlhbG9nU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBvdmVybGF5ID0gaW5qZWN0KE92ZXJsYXkpO1xyXG4gIHByaXZhdGUgaW5qZWN0b3IgPSBpbmplY3QoSW5qZWN0b3IpO1xyXG4gIFxyXG4gIC8vIE92ZXJsb2FkaW5nIG1ldGhvZHNcclxuICBvcGVuPE9VVFBVVCwgSU5QVVQgPSB1bmRlZmluZWQ+KGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxOZ3hEaWFsb2dWaWV3Q29tcG9uZW50PE9VVFBVVCwgSU5QVVQ+Pik6IE5neERpYWxvZ0NvbnRyb2xsZXI8T1VUUFVULCBJTlBVVD47XHJcbiAgb3BlbjxPVVRQVVQsIElOUFVUID0gdW5kZWZpbmVkPihjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8Tmd4RGlhbG9nVmlld0NvbXBvbmVudDxPVVRQVVQsIElOUFVUPj4sIGlucHV0RGF0YTogSU5QVVQpOiBOZ3hEaWFsb2dDb250cm9sbGVyPE9VVFBVVCwgSU5QVVQ+O1xyXG4gIG9wZW48T1VUUFVULCBJTlBVVCA9IHVuZGVmaW5lZD4oY29tcG9uZW50OiBDb21wb25lbnRUeXBlPE5neERpYWxvZ1ZpZXdDb21wb25lbnQ8T1VUUFVULCBJTlBVVD4+LCBjb25maWc6IE92ZXJsYXlDb25maWcpOiBOZ3hEaWFsb2dDb250cm9sbGVyPE9VVFBVVCwgSU5QVVQ+O1xyXG4gIG9wZW48T1VUUFVULCBJTlBVVCA9IHVuZGVmaW5lZD4oY29tcG9uZW50OiBDb21wb25lbnRUeXBlPE5neERpYWxvZ1ZpZXdDb21wb25lbnQ8T1VUUFVULCBJTlBVVD4+LCBpbnB1dERhdGE6IElOUFVULCBjb25maWc6IE92ZXJsYXlDb25maWcpOiBOZ3hEaWFsb2dDb250cm9sbGVyPE9VVFBVVCwgSU5QVVQ+O1xyXG5cclxuICAvKipcclxuICAgKiBJbXBsZW1lbnRhdGlvbiB0byBvcGVuIGEgY3VzdG9tIGNvbXBvbmVudCBpbiBhbiBvdmVybGF5XHJcbiAgICovXHJcbiAgb3BlbjxPVVRQVVQsIElOUFVUID0gdW5kZWZpbmVkPihjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8Tmd4RGlhbG9nVmlld0NvbXBvbmVudDxPVVRQVVQsIElOUFVUPj4sIGlucHV0RGF0YT86IElOUFVULCBjb25maWc/OiBPdmVybGF5Q29uZmlnKTogTmd4RGlhbG9nQ29udHJvbGxlcjxPVVRQVVQsIElOUFVUPiB7XHJcbiAgICBpZiAoIWNvbmZpZykge1xyXG4gICAgICAvLyBEZWZhdWx0IGNvbmZpZzogZ2xvYmFsbHkgY2VudGVyZWQgcG9zaXRpb24gc3RyYXRlZ3lcclxuICAgICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheVxyXG4gICAgICAgIC5wb3NpdGlvbigpXHJcbiAgICAgICAgLmdsb2JhbCgpXHJcbiAgICAgICAgLmNlbnRlckhvcml6b250YWxseSgpXHJcbiAgICAgICAgLmNlbnRlclZlcnRpY2FsbHkoKTtcclxuXHJcbiAgICAgIC8vIEFkZCBjc3MgY2xhc3NlcyB0byB0aGUgYmFja2Ryb3AgYW5kIGRpYWxvZy1wYW5lbFxyXG4gICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgcG9zaXRpb25TdHJhdGVneSxcclxuICAgICAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcclxuICAgICAgICBiYWNrZHJvcENsYXNzOiAnbmd4LWRpYWxvZy1iYWNrZHJvcCcsXHJcbiAgICAgICAgcGFuZWxDbGFzczogJ25neC1kaWFsb2ctcGFuZWwnLFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSBvdmVybGF5IHdpdGggY3VzdG9taXphYmxlIG9wdGlvbnNcclxuICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKGNvbmZpZyk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGluamVjdG9yIHRvIGJlIGFibGUgdG8gcmVmZXJlbmNlIHRoZSBEaWFsb2dDb250cm9sbGVyIGZyb20gd2l0aGluIGRpYWxvZyBjb21wb25lbnRzXHJcbiAgICBjb25zdCBkaWFsb2dDb250cm9sbGVyID0gbmV3IE5neERpYWxvZ0NvbnRyb2xsZXI8T1VUUFVULCBJTlBVVD4ob3ZlcmxheVJlZiwgaW5wdXREYXRhKTtcclxuICAgIGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcclxuICAgICAgcGFyZW50OiB0aGlzLmluamVjdG9yLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7IHByb3ZpZGU6IE5neERpYWxvZ0NvbnRyb2xsZXIsIHVzZVZhbHVlOiBkaWFsb2dDb250cm9sbGVyIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBdHRhY2ggY29tcG9uZW50IHBvcnRhbCB0byB0aGUgb3ZlcmxheVxyXG4gICAgY29uc3QgcG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChjb21wb25lbnQsIG51bGwsIGluamVjdG9yKTtcclxuICAgIG92ZXJsYXlSZWYuYXR0YWNoKHBvcnRhbCk7XHJcblxyXG4gICAgLy8gcmV0dXJuIHRoZSBjb250cm9sbGVyIHRvIHRoZSBjYWxsZXJcclxuICAgIHJldHVybiBkaWFsb2dDb250cm9sbGVyO1xyXG4gIH1cclxufVxyXG4iXX0=