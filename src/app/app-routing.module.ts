import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: '',
    component: SideBarComponent,
    children: [
      {
        path: 'storeA',
        component: TableComponent,
      },
      {
        path: 'storeB',
        component: TableComponent,
      },
      {
        path: 'storeC',
        component: TableComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
