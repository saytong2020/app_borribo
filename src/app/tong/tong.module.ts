import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TongPageRoutingModule } from './tong-routing.module';

import { TongPage } from './tong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TongPageRoutingModule
  ],
  declarations: [TongPage]
})
export class TongPageModule {}
