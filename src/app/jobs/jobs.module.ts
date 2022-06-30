import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { JobsPageRoutingModule } from './jobs-routing.module';

import { JobsPage } from './jobs.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  
    IonicModule,
    JobsPageRoutingModule,
    HttpClientModule,
    
  ],
  declarations: [JobsPage]
})
export class JobsPageModule {}
