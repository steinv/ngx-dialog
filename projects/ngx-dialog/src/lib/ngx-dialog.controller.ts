import {Observable, Subject} from 'rxjs';
import {DialogResolution, DialogResult} from './ngx-dialog.types';
import {OverlayRef} from '@angular/cdk/overlay';

/**
 * Controller class that is injected with each Dialog component.
 * Use this controller to read input data and write output data from your dialog
 */
export class NgxDialogController<O, I = undefined> {
  private afterClosedSubject = new Subject<DialogResult<O>>();

  constructor(private overlayRef: OverlayRef, public readonly input?: I) {
    this.input = input;
  }

  public dismiss(): void {
    this.overlayRef.dispose();
    this.afterClosedSubject.next({result: DialogResolution.DISMISS})
  }

  public confirm(data?: O) {
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
  public afterClosed(): Observable<DialogResult<O>> {
    return this.afterClosedSubject.asObservable();
  }
}
