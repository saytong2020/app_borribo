import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyjobPage } from './applyjob.page';

const routes: Routes = [
  {
    path: '',
    component: ApplyjobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplyjobPageRoutingModule {}
