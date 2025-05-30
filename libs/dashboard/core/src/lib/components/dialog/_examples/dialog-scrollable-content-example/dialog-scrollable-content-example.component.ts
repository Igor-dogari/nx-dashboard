import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogScrollableContentDialogComponent } from '@core/components';

@Component({
  selector: 'app-dialog-scrollable-content-example',
  imports: [
    MatButton
  ],
  templateUrl: './dialog-scrollable-content-example.component.html',
  styleUrl: './dialog-scrollable-content-example.component.scss'
})
export class DialogScrollableContentExampleComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(DialogScrollableContentDialogComponent);
  }
}
