import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActionComponent } from '../action/action.component';
import { Product } from 'src/app/interface/table.interface';
import { TableService } from '../../table/table.service';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss'],
})
export class ModalEditComponent {
  public activeProduct!: Product;
  constructor(
    private tableService: TableService,
    public dialogRef: MatDialogRef<ActionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSave(): void {
    this.tableService.putData(this.data).subscribe(() => {
      this.tableService.nGetData();
    });
  }
}
