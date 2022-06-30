import { CompliantService } from './../services/compliant.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.page.html',
  styleUrls: ['./complaint.page.scss'],
})
export class ComplaintPage implements OnInit {
  isLogin: any;
  compliantForm: any;
  constructor(
    private formbuilder: FormBuilder,
    private compliantService: CompliantService,
    private router: Router,
    private loadingCtrl: LoadingController,
  ) {}

  ngOnInit() {
    this.compliantForm = this.formbuilder.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      email: [''],
      subject: ['', Validators.required],
      compliant_description: [
        '',
        [Validators.required, Validators.maxLength(50)],
      ],
    });
  }

  postCompliant() {
    // console.log(this.compliantForm.getRawValue());
    this.compliantService
      .postJob('applycompliant', this.compliantForm.getRawValue())
      .subscribe((res) => {
        return res;
      });
    this.compliantForm.reset();

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

  }

  
}
