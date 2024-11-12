import { Component, OnInit } from '@angular/core';
import { ModalLoginComponent } from '../component/modal-login/modal-login.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalRegisterComponent } from '../component/modal-register/modal-register.component';
import { NameComponent } from '../component/name/name.component';
import { PriceComponent } from '../component/price/price.component';
import { SkuComponent } from '../component/sku/sku.component';
import { CountryComponent } from '../component/country/country.component';
import { TagsComponent } from '../component/tags/tags.component';
import { ActionComponent } from '../component/action/action.component';
import { ConfigTable } from '../interface/table.interface';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {}
  showFiller = false;
  public openLoginModal() {
    const dialogRef = this.dialog.open(ModalLoginComponent);
    dialogRef.afterClosed().subscribe((result) => {});
  }
  public openRegisterModal() {
    const dialogRef = this.dialog.open(ModalRegisterComponent);
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
