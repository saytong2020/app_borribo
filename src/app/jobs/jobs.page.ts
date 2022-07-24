
import { Job } from './job.model';
import { JobsService } from '../services/jobs.service';
import { NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common"
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {
  jobs: Job[] = [];

  page = 1;
  max = 0;
  subscribe: any;

  applyJobForm: any;
  
  contentLoader = false;

  searchTerm: string;

  constructor(
   
    private jobsService: JobsService,
    private platform: Platform,
    private location: Location,
    private router: Router
    ) 
    {

      setTimeout(()=>{
      this.contentLoader = true;
    }, 3000);

      // this.subscribe = this.platform.backButton.subscribeWithPriority(666666,()=>{
      //   if(this.constructor.name == "JobsPage")
      //   {
      //     if(window.confirm("do you want exit Borribo app?")){
      //       this.router.navigateByUrl('tabs/t')
      //     }
      //   }
      // });

      // this.platform.ready().then(()=>{
      //   this.platform.backButton.subscribeWithPriority(999999,()=>{
      //     var url = this.router['tabs/tabs/home'].snapshot.url;
      //     if(url != "tabs/tabs/jobs"){
      //       this.location.back();
      //     }
      //   });
      // });
    }

  ngOnInit() {
    // this.loadedJobs = this.jobsService.job;
    this.loadJob();
    
  }

  goback(url){
    this.router.navigate([url]);
  }

  loadJob(event?){
    this.jobsService.getTopRatedJob(`jobs?page=${this.page}`).subscribe((res) => {
      // console.log(res);
      this.jobs = this.jobs.concat(res['data']);
      this.max = res.last_page;
      if(event){
        event.target.complete();
      }
    });
  }

  loadJobsMore(event){
    this.page++;
    // console.log(`page= ${this.page}, max_page = ${this.max}`);
    this.loadJob(event);
    if (this.page === this.max){
      event.target.disabled = true;
    }
  }
  

  doRefresh(event) {  
    // console.log('Pull Event Triggered!');  
    setTimeout(() => {
      this.jobsService.getTopRatedJob(`jobs?page=${this.page}`).subscribe((res) => {
        // console.log(res);
        this.jobs = this.jobs.concat(res['data']);
        this.max = res.last_page;
        if(event){
          event.target.complete();
        }
      });
      event.target.complete();
    }, 1500); 
  }  
}
