import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions, MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatInput } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-basic',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    FormsModule,
    MatInput,
    MatFormField,
    MatLabel
  ],
  templateUrl: './basic-dialog.component.html',
  styleUrl: './basic-dialog.component.scss'
})
export class BasicDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<BasicDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
