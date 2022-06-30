import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsDetialPageRoutingModule } from './news-detial-routing.module';

import { NewsDetialPage } from './news-detial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsDetialPageRoutingModule
  ],
  declarations: [NewsDetialPage]
})
export class NewsDetialPageModule {}
