import { Observable } from 'rxjs';
import { DialogResult } from './ngx-dialog.types';
import { OverlayRef } from '@angular/cdk/overlay';
/**
 * Controller class that is injected with each Dialog component.
 * Use this controller to read input data and write output data from your dialog
 */
export declare class NgxDialogController<O, I = undefined> {
    private overlayRef;
    readonly input?: I | undefined;
    private afterClosedSubject;
    constructor(overlayRef: OverlayRef, input?: I | undefined);
    dismiss(): void;
    confirm(data?: O): void;
    /**
     * An Observable that notifies when the overlay has closed
     */
    afterClosed(): Observable<DialogResult<O>>;
}
