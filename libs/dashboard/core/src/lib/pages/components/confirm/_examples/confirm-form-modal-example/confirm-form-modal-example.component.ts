import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { DialogWithConfirmationComponent } from '@core/pages';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
    selector: 'app-confirm-form-modal-example',
    imports: [
        MatButton,
        MatDialogModule
    ],
    templateUrl: './confirm-form-modal-example.component.html',
    styleUrl: './confirm-form-modal-example.component.scss'
})
export class ConfirmFormModalExampleComponent {
  private _dialog = inject(MatDialog);

  open(): void {
    this._dialog.open(DialogWithConfirmationComponent);
  }
}
