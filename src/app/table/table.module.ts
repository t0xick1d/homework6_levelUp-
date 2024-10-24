import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { NameComponent } from '../component/name/name.component';
import { SkuComponent } from '../component/sku/sku.component';
import { PriceComponent } from '../component/price/price.component';
import { CountryComponent } from '../component/country/country.component';
import { TagsComponent } from '../component/tags/tags.component';
import { ActionComponent } from '../component/action/action.component';
import { ModalEditComponent } from '../component/modal-edit/modal-edit.component';
import { ModalEditAddComponent } from '../component/modal-edit-add/modal-edit-add.component';

import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    TableComponent,
    NameComponent,
    SkuComponent,
    PriceComponent,
    CountryComponent,
    TagsComponent,
    ActionComponent,
    ModalEditComponent,
    ModalEditAddComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatFormFieldModule,
    MatChipsModule,
    MatDialogModule,
    MatInputModule,
  ],
  providers: [],
  exports: [TableComponent],
})
export class TableModule {}
