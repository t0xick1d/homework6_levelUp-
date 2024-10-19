import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { NameComponent } from '../component/name/name.component';
import { SkuComponent } from '../component/sku/sku.component';
import { PriceComponent } from '../component/price/price.component';
import { CountryComponent } from '../component/country/country.component';
import { TagsComponent } from '../component/tags/tags.component';
import { ActionComponent } from '../component/action/action.component';

@NgModule({
  declarations: [
    TableComponent,
    NameComponent,
    SkuComponent,
    PriceComponent,
    CountryComponent,
    TagsComponent,
    ActionComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [TableComponent],
})
export class TableModule {}
