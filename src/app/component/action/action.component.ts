import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import { ELEMENT_DATA as dataProduct } from '../../data';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ActionComponent implements OnInit {
  @Input() productID!: number;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalEditComponent, {
      width: '500px',
      data: {
        ...dataProduct.find((item) => item.productID === this.productID),
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  onClickDelete() {
    console.log('Видалення в розробці');
  }
}
