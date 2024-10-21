import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { SideBarComponent } from './side-bar.component';
import { TableModule } from '../table/table.module';

@NgModule({
  declarations: [SideBarComponent],
  imports: [MatSidenavModule, TableModule, MatToolbarModule, MatIconModule],
  providers: [],
  exports: [SideBarComponent],
})
export class SideBarModule {}
