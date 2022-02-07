import { Subject } from 'rxjs';
import { DialogResolution } from './ngx-dialog.types';
/**
 * Controller class that is injected with each Dialog component.
 * Use this controller to read input data and write output data from your dialog
 */
export class NgxDialogController {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRpYWxvZy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWRpYWxvZy9zcmMvbGliL25neC1kaWFsb2cuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWEsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBR2xFOzs7R0FHRztBQUNILE1BQU0sT0FBTyxtQkFBbUI7SUFHOUIsWUFBb0IsVUFBc0IsRUFBa0IsS0FBYTtRQUFyRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQWtCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFGakUsdUJBQWtCLEdBQUcsSUFBSSxPQUFPLEVBQXdCLENBQUM7UUFHL0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVNLE9BQU87UUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVNLE9BQU8sQ0FBQyxJQUFhO1FBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQztZQUMzQixNQUFNLEVBQUUsZ0JBQWdCLENBQUMsT0FBTztZQUNoQyxJQUFJO1NBQ0wsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7T0FFRztJQUNJLFdBQVc7UUFDaEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVEOztPQUVHO0lBQ0ksYUFBYTtRQUNsQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUdEOztPQUVHO0lBQ0ssYUFBYTtRQUNuQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtEaWFsb2dSZXNvbHV0aW9uLCBEaWFsb2dSZXN1bHR9IGZyb20gJy4vbmd4LWRpYWxvZy50eXBlcyc7XHJcbmltcG9ydCB7T3ZlcmxheVJlZn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5cclxuLyoqXHJcbiAqIENvbnRyb2xsZXIgY2xhc3MgdGhhdCBpcyBpbmplY3RlZCB3aXRoIGVhY2ggRGlhbG9nIGNvbXBvbmVudC5cclxuICogVXNlIHRoaXMgY29udHJvbGxlciB0byByZWFkIGlucHV0IGRhdGEgYW5kIHdyaXRlIG91dHB1dCBkYXRhIGZyb20geW91ciBkaWFsb2dcclxuICovXHJcbmV4cG9ydCBjbGFzcyBOZ3hEaWFsb2dDb250cm9sbGVyPE9VVFBVVCwgSU5QVVQgPSB1bmRlZmluZWQ+IHtcclxuICBwcml2YXRlIGFmdGVyQ2xvc2VkU3ViamVjdCA9IG5ldyBTdWJqZWN0PERpYWxvZ1Jlc3VsdDxPVVRQVVQ+PigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYsIHB1YmxpYyByZWFkb25seSBpbnB1dD86IElOUFVUKSB7XHJcbiAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzbWlzcygpOiB2b2lkIHtcclxuICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XHJcbiAgICB0aGlzLmFmdGVyQ2xvc2VkU3ViamVjdC5uZXh0KHtyZXN1bHQ6IERpYWxvZ1Jlc29sdXRpb24uRElTTUlTU30pO1xyXG4gICAgdGhpcy5hZnRlckNsb3NlZFN1YmplY3QuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25maXJtKGRhdGE/OiBPVVRQVVQpIHtcclxuICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XHJcbiAgICB0aGlzLmFmdGVyQ2xvc2VkU3ViamVjdC5uZXh0KHtcclxuICAgICAgcmVzdWx0OiBEaWFsb2dSZXNvbHV0aW9uLkNPTkZJUk0sXHJcbiAgICAgIGRhdGFcclxuICAgIH0pO1xyXG4gICAgdGhpcy5hZnRlckNsb3NlZFN1YmplY3QuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFuIE9ic2VydmFibGUgdGhhdCBub3RpZmllcyB3aGVuIHRoZSBvdmVybGF5IGhhcyBjbG9zZWRcclxuICAgKi9cclxuICBwdWJsaWMgYWZ0ZXJDbG9zZWQoKTogT2JzZXJ2YWJsZTxEaWFsb2dSZXN1bHQ8T1VUUFVUPj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYWZ0ZXJDbG9zZWRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQW4gT2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHdoZW4gdGhlIGJhY2tkcm9wIHdhcyBjbGlja2VkXHJcbiAgICovXHJcbiAgcHVibGljIGJhY2tkcm9wQ2xpY2soKTogT2JzZXJ2YWJsZTxNb3VzZUV2ZW50PiB7XHJcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKTtcclxuICB9XHJcblxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEFuIE9ic2VydmFibGUgdGhhdCBub3RpZmllcyB0aGUga2V5Ym9hcmQgZG93biBldmVudHNcclxuICAgKi9cclxuICAgcHVibGljIGtleWRvd25FdmVudHMoKTogT2JzZXJ2YWJsZTxLZXlib2FyZEV2ZW50PiB7XHJcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5UmVmLmtleWRvd25FdmVudHMoKTtcclxuICB9XHJcbn1cclxuIl19