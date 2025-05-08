import { DestroyRef, inject, Injectable } from '@angular/core';
import { ConfirmOptionsInterface } from '../../models/confirm-options.interface';
import { ConfirmRefService } from './confirm-ref.service';
import { ConfirmComponent } from '../../components/confirm/confirm.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ConfirmManagerService {
  private _dialog = inject(MatDialog);
  private _destroyRef = inject(DestroyRef);

  open(options: ConfirmOptionsInterface): ConfirmRefService {
    const confirmRef = new ConfirmRefService();
    const dialogRef = this._dialog.open(ConfirmComponent, {
      data: options,
      closeOnNavigation: true,
      disableClose: true
    });
    dialogRef
      .afterClosed()
      .pipe(
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe((isConfirmed: any) => {
        if (isConfirmed) {
          confirmRef.confirm();
        } else {
          confirmRef.cancel();
        }
      })
    ;
    return confirmRef;
  }
}
