import { Component } from '@angular/core';
import { TableService } from './table.service';
import { Product } from '../interface/table.interface';
import { MatDialog } from '@angular/material/dialog';
import { ModalEditAddComponent } from '../component/modal-edit-add/modal-edit-add.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  public dataSource: Product[] = [];
  public displayedColumns: string[] = [
    'name',
    'price',
    'sku',
    'country',
    'tags',
    'actions',
  ];
  constructor(public dialog: MatDialog, private tableService: TableService) {}

  ngOnInit(): void {
    this.tableService.nGetData();
    this.tableService.productSubject.subscribe((data) => {
      this.dataSource = data;
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalEditAddComponent, {
      width: '500px',
      data: {},
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
  clear(): void {
    this.tableService.productSubject.next([]);
  }
}
