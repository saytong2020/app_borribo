import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrgaChartPageRoutingModule } from './orga-chart-routing.module';

import { OrgaChartPage } from './orga-chart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrgaChartPageRoutingModule
  ],
  declarations: [OrgaChartPage]
})
export class OrgaChartPageModule {}
