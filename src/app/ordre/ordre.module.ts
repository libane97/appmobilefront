import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdrePageRoutingModule } from './ordre-routing.module';

import { OrdrePage } from './ordre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdrePageRoutingModule
  ],
  declarations: [OrdrePage]
})
export class OrdrePageModule {}
