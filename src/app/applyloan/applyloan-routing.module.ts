import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyloanPage } from './applyloan.page';

const routes: Routes = [
  {
    path: '',
    component: ApplyloanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplyloanPageRoutingModule {}
