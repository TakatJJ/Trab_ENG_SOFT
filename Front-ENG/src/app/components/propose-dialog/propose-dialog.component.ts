import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdvertisementRESPONSE } from '../../models/AdvertisementRESPONSE';
import { MatDivider } from '@angular/material/divider';
import { MatCard } from '@angular/material/card';

interface DialogData {
  room: AdvertisementRESPONSE;
}

@Component({
  selector: 'app-propose-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDivider,
    MatCard,
  ],
  templateUrl: './propose-dialog.component.html',
  styleUrl: './propose-dialog.component.css',
})
export class ProposeDialogComponent {
  constructor() {}
  readonly dialogRef = inject(MatDialogRef<ProposeDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly room = this.data.room;

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.dialogRef.close();
  }
}
