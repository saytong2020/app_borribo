import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobDetialPage } from './job-detial.page';

const routes: Routes = [
  {
    path: '',
    component: JobDetialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobDetialPageRoutingModule {}
