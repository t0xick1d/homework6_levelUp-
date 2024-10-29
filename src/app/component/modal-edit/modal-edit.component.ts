import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActionComponent } from '../action/action.component';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

import { Product } from 'src/app/interface/table.interface';
import { TableService } from '../../table/table.service';
interface FoodNode {
  name: string;
  children?: FoodNode[];
}
interface DataProduct {
  categories: number;
  item: Product;
}
@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss'],
})
export class ModalEditComponent {
  public activeProduct!: Product;
  public dataCategories!: FoodNode[];
  public selectedTabIndex!: number;
  treeControl = new NestedTreeControl<FoodNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  constructor(
    private tableService: TableService,
    public dialogRef: MatDialogRef<ActionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataProduct
  ) {
    console.log(this.data);
    this.selectedTabIndex = this.data.categories;
    this.dataCategories = this.data.item.tags.map((e) => {
      return {
        name: e,
        children: [],
      };
    });
    this.dataSource.data = this.dataCategories;
  }
  hasChild = (_: number, node: FoodNode) =>
    !!node.children && node.children.length > 0;
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSave(): void {
    this.tableService.putData(this.data.item).subscribe(() => {
      this.tableService.nGetData();
    });
  }
}
