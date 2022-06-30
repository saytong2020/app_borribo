import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDetialPageRoutingModule } from './product-detial-routing.module';

import { ProductDetialPage } from './product-detial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProductDetialPageRoutingModule
  ],
  declarations: [ProductDetialPage]
})
export class ProductDetialPageModule {}
