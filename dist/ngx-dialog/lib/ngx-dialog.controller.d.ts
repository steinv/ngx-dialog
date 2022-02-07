import { Observable } from 'rxjs';
import { DialogResult } from './ngx-dialog.types';
import { OverlayRef } from '@angular/cdk/overlay';
/**
 * Controller class that is injected with each Dialog component.
 * Use this controller to read input data and write output data from your dialog
 */
export declare class NgxDialogController<OUTPUT, INPUT = undefined> {
    private overlayRef;
    readonly input?: INPUT | undefined;
    private afterClosedSubject;
    constructor(overlayRef: OverlayRef, input?: INPUT | undefined);
    dismiss(): void;
    confirm(data?: OUTPUT): void;
    /**
     * An Observable that notifies when the overlay has closed
     */
    afterClosed(): Observable<DialogResult<OUTPUT>>;
    /**
     * An Observable that notifies when the backdrop was clicked
     */
    backdropClick(): Observable<MouseEvent>;
    /**
     * An Observable that notifies the keyboard down events
     */
    keydownEvents(): Observable<KeyboardEvent>;
}
