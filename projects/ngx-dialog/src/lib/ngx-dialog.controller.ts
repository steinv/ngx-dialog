import {Observable, Subject} from 'rxjs';
import {DialogResolution, DialogResult} from './ngx-dialog.types';
import {OverlayRef} from '@angular/cdk/overlay';

/**
 * Controller class that is injected with each Dialog component.
 * Use this controller to read input data and write output data from your dialog
 */
export class NgxDialogController<OUTPUT, INPUT = undefined> {
  private afterClosedSubject = new Subject<DialogResult<OUTPUT>>();

  constructor(private overlayRef: OverlayRef, public readonly input?: INPUT) {
    this.input = input;
  }

  public dismiss(): void {
    this.overlayRef.dispose();
    this.afterClosedSubject.next({result: DialogResolution.DISMISS});
    this.afterClosedSubject.complete();
  }

  public confirm(data?: OUTPUT) {
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
  public afterClosed(): Observable<DialogResult<OUTPUT>> {
    return this.afterClosedSubject.asObservable();
  }

  /**
   * An Observable that notifies when the backdrop was clicked
   */
  public backdropClick(): Observable<MouseEvent> {
    return this.overlayRef.backdropClick();
  }

  
  /**
   * An Observable that notifies the keyboard down events
   */
   public keydownEvents(): Observable<KeyboardEvent> {
    return this.overlayRef.keydownEvents();
  }
}
