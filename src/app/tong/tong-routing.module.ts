import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TongPage } from './tong.page';

const routes: Routes = [
  {
    path: '',
    component: TongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TongPageRoutingModule {}
