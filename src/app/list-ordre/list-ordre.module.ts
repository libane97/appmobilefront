import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListOrdrePageRoutingModule } from './list-ordre-routing.module';

import { ListOrdrePage } from './list-ordre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListOrdrePageRoutingModule
  ],
  declarations: [ListOrdrePage]
})
export class ListOrdrePageModule {}
