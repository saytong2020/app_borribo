import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyloanPageRoutingModule } from './applyloan-routing.module';

import { ApplyloanPage } from './applyloan.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ApplyloanPageRoutingModule
  ],
  declarations: [ApplyloanPage]
})
export class ApplyloanPageModule {}
