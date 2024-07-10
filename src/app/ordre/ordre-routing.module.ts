import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdrePage } from './ordre.page';

const routes: Routes = [
  {
    path: '',
    component: OrdrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdrePageRoutingModule {}
