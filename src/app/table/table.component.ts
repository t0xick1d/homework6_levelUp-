import { Component } from '@angular/core';
import { ELEMENT_DATA } from '../data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  public dataSource = ELEMENT_DATA;
  public displayedColumns: string[] = [
    'name',
    'price',
    'sku',
    'country',
    'tags',
    'actions',
  ];
}
