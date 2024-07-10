import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOrdrePage } from './list-ordre.page';

const routes: Routes = [
  {
    path: '',
    component: ListOrdrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOrdrePageRoutingModule {}
