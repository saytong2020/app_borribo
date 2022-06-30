import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsDetialPage } from './news-detial.page';

const routes: Routes = [
  {
    path: '',
    component: NewsDetialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsDetialPageRoutingModule {}
