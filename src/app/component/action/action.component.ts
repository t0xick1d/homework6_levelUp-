import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import { TableService } from 'src/app/table/table.service';
import { Product } from 'src/app/interface/table.interface';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ActionComponent implements OnInit {
  @Input() item!: Product;
  constructor(public dialog: MatDialog, private tableService: TableService) {}
  ngOnInit(): void {}
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalEditComponent, {
      width: '500px',
      data: { ...this.item },
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
  onClickDelete() {
    this.tableService.deleteData(this.item.productID).subscribe(() => {
      this.tableService.nGetData();
    });
  }
}
