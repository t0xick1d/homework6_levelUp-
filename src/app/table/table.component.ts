import { Component } from '@angular/core';
import { TableService } from './table.service';
import { Product } from '../interface/table.interface';
import { MatDialog } from '@angular/material/dialog';
import { ModalEditAddComponent } from '../component/modal-edit-add/modal-edit-add.component';
import { ModalEditComponent } from '../component/modal-edit/modal-edit.component';

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
  openEditCtegories(element: Product): void {
    const dialogRef = this.dialog.open(ModalEditComponent, {
      data: { categories: 1, item: { ...element } },
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalEditAddComponent, {
      data: {},
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
  clear(): void {
    this.tableService.productSubject.next([]);
  }
}
