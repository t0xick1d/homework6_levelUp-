import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { TableService } from './table.service';
import {
  ConfigTable,
  FilterConfig,
  FilterOption,
  Product,
} from '../interface/table.interface';
import { MatDialog } from '@angular/material/dialog';
import { ModalEditAddComponent } from '../component/modal-edit-add/modal-edit-add.component';
import { ModalEditComponent } from '../component/modal-edit/modal-edit.component';
import { NameComponent } from '../component/name/name.component';
import { PriceComponent } from '../component/price/price.component';
import { SkuComponent } from '../component/sku/sku.component';
import { CountryComponent } from '../component/country/country.component';
import { TagsComponent } from '../component/tags/tags.component';
import { ActionComponent } from '../component/action/action.component';

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public configure: ConfigTable[] = [
    {
      titleColums: 'name',
      component: NameComponent,
    },
    {
      titleColums: 'price',
      component: PriceComponent,
    },
    {
      titleColums: 'sku',
      component: SkuComponent,
    },
    {
      titleColums: 'country',
      component: CountryComponent,
    },
    {
      titleColums: 'tags',
      component: TagsComponent,
    },
    {
      titleColums: 'actions',
      component: ActionComponent,
    },
  ];
  public dataSource: Product[] = [];
  public filterDataSource: Product[] | undefined = undefined;
  public dataFilter: FilterConfig[] = [];
  public displayedColumns: string[] = [];
  public selectedValue: string | undefined = '';
  public selectedFilter: string | undefined = undefined;
  public activeSelectedCategori: FilterOption[] | undefined = undefined;

  constructor(public dialog: MatDialog, private tableService: TableService) {
    this.dataFilter = this.dataFilter;
  }

  ngOnInit(): void {
    this.displayedColumns = this.configure.map((e) => e.titleColums);
    this.tableService.nGetData();
    this.tableService.productSubject.subscribe((data) => {
      this.dataSource = data;
    });
    this.tableService.nGetDataDilter();
    this.tableService.filterSubject.subscribe((data) => {
      this.dataFilter = data;
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
  changeSelect(newValue: any) {
    this.activeSelectedCategori = this.dataFilter.filter(
      (e) => e.name === this.selectedValue
    )[0].options;
  }
  addFilter() {
    if (this.selectedValue === 'category') {
      this.filterDataSource = this.dataSource.filter(
        (e) => e.category === this.selectedFilter
      );
    }
    if (this.selectedValue === 'inStock') {
      this.filterDataSource = this.dataSource.filter((e) => {
        if ('Available' === this.selectedFilter) {
          return e.inStock;
        }
        if ('Out of stock' === this.selectedFilter) {
          return e.inStock === false;
        }
        return false;
      });
    }
    if (this.selectedValue === 'minPrice') {
      this.filterDataSource = [];
      this.filterDataSource.push(
        this.dataSource.reduce(
          (acc, obj) => (obj.price < acc.price ? obj : acc),
          this.dataSource[0]
        )
      );
    }
    if (this.selectedValue === 'maxPrice') {
      this.filterDataSource = [];
      this.filterDataSource.push(
        this.dataSource.reduce(
          (acc, obj) => (obj.price > acc.price ? obj : acc),
          this.dataSource[0]
        )
      );
    }
    if (this.selectedValue === 'priceRange') {
      const str: string | undefined = this.selectedFilter;
      const numbers: number[] = [];
      let currentNum: string = '';
      if (str !== undefined) {
        for (let i = 0; i < str.length; i++) {
          const char = str[i];
          if (!isNaN(Number(char)) && char !== ' ') {
            currentNum += char;
          } else if (currentNum) {
            numbers.push(parseInt(currentNum, 10));
            currentNum = '';
          }
        }
        if (currentNum) {
          numbers.push(parseInt(currentNum, 10));
        }
      }
      this.filterDataSource = this.dataSource.filter((e) => {
        if (numbers.length === 1) {
          return e.price > numbers[0];
        }
        return e.price > numbers[0] && e.price < numbers[1];
      });
    }
  }
  resetFilter(): void {
    this.filterDataSource = undefined;
    this.selectedValue = undefined;
    this.selectedFilter = undefined;
    this.activeSelectedCategori = undefined;
  }
}
