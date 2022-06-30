import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyjobPageRoutingModule } from './applyjob-routing.module';

import { ApplyjobPage } from './applyjob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ApplyjobPageRoutingModule
  ],
  declarations: [ApplyjobPage]
})
export class ApplyjobPageModule {}
