import { Observable } from 'rxjs';
import {
  IonRouterOutlet,
  ActionSheetController,
  LoadingController,
} from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Job } from './../job.model';
import { JobsService } from './../../services/jobs.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { format, parseISO } from 'date-fns';
import { PickerController } from '@ionic/angular';
@Component({
  selector: 'app-job-detial',
  templateUrl: './job-detial.page.html',
  styleUrls: ['./job-detial.page.scss'],
})
export class JobDetialPage implements OnInit {
  showPicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09.00.00.000Z';
  fromatedString = '';

  job = null;
  latestJobs: Job[] = [];
  isLogin: any;

  applyJobForm: any;
  genderString = '';
  genderValue = '';
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private jobsService: JobsService,
    private modalCtrl: ModalController,
    public routerOutlet: IonRouterOutlet,
    private actionSheetCtrl: ActionSheetController,
    private router: Router,
    private loadingCtrl: LoadingController,
    private pickerCtrl:PickerController,
  ) {
    this.setToday();
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('jobId');

    this.applyJobForm = this.formBuilder.group({
      id_job: [id],
      name: ['', [Validators.required, Validators.maxLength(20)]],
      position: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(9),Validators.maxLength(10)]],
      email: [''],
      dob: ['', Validators.required],
      address: ['', [Validators.required, Validators.maxLength(50)]],
    });

    this.jobsService.getJobDetails('jobs/', id).subscribe((res) => {
      this.job = res;
    });

    // Ralate Jobs

    this.jobsService.getTopRatedJob('jobs').subscribe((res) => {
      this.latestJobs = this.latestJobs.concat(res['data']);
    });
  }


onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }


  postJob() {
    console.log(this.applyJobForm.getRawValue());

    const id = this.activatedRoute.snapshot.paramMap.get('jobId');
    this.jobsService
      .postJob('applyjobid/', id, this.applyJobForm.getRawValue())
      .subscribe((res) => {
        return res;
      });
    this.applyJobForm.reset();

    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Loading...' })
      .then((loadnigEl) => {
        loadnigEl.present();
        setTimeout(() => {
          // this.isLoading = true;
          loadnigEl.dismiss();
          return this.router.navigateByUrl('home');
        }, 3000);
      });

      this.modalCtrl.dismiss(null, 'cancel');
  }

  

  setToday() {
    this.fromatedString = format(
      parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09.00.00.000Z'),
      ' yyyy-MM-dd HH:mm'
    );
    console.log(this.fromatedString);
  }

  dateChanged(value) {
    this.dateValue = value;

    this.fromatedString = format(parseISO(value), 'yyyy-MM-dd');

    this.showPicker = false;
    console.log(this.fromatedString);
    this.showPicker = false;
  }

  option_job = {
    slidesPerView: 2,
    // centeredSlides: true,
    loop: true,
    // spaceBetween: 5,
    autoplay: true,
    speed: 300,
  };

  async  openPickerGender(){
    const picker = await this.pickerCtrl.create({
      columns: [
        {
          name: 'gender',
          options: [
            {
              text: 'ប្រុស',
              value: '1',
            },
            {
              text: 'ស្រី',
              value: '2',
            },
            
          ],
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          
          handler: (value) => {
          
            this.genderString = value.gender.text;
            this.genderValue = value.gender.value;
            
          },
        },
      ],
    });

    await picker.present();
  }

}
