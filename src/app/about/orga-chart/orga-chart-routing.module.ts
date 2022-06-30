import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrgaChartPage } from './orga-chart.page';

const routes: Routes = [
  {
    path: '',
    component: OrgaChartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrgaChartPageRoutingModule {}
