import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobDetialPageRoutingModule } from './job-detial-routing.module';

import { JobDetialPage } from './job-detial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    JobDetialPageRoutingModule
  ],
  declarations: [JobDetialPage]
})
export class JobDetialPageModule {}
