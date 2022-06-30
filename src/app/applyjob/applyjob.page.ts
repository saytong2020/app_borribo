import { JobsService } from './../services/jobs.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { format, parseISO } from 'date-fns';
@Component({
  selector: 'app-applyjob',
  templateUrl: './applyjob.page.html',
  styleUrls: ['./applyjob.page.scss'],
})
export class ApplyjobPage implements OnInit {
  isLogin: any;
  applyJobForm: any;
  showPicker = false;
  dateValue = format (new Date(), 'yyyy-MM-dd');
  fromatedString = '';

  constructor( private formBuilder: FormBuilder, private jobsService:JobsService) { }

  ngOnInit() {
    this.applyJobForm = this.formBuilder.group (
      {
        id_job: [''],
        name: ['',Validators.required],
        
        gender: ['',Validators.required],
        position: [''],
        phone: ['',[Validators.required,Validators.minLength(9),Validators.maxLength(10)]],
        email: ['',Validators.required],
        dob: ['',Validators.required],
        address: ['',[Validators.required,Validators.maxLength(50)]],
        // username: ['',Validators.required],
        // email: ['',Validators.email],
        
      }
    );
  }





  setToday (){
    this.fromatedString = format ( parseISO (format (new Date(), 'yyyy-MM-dd')),'dd-MM-yyyy');
    console.log(this.fromatedString);
  }

  dateChanged(value){

    this.dateValue = value;

    this.fromatedString = format( parseISO (value), 'dd-MM-yyyy' );
    console.log(this.fromatedString);
    this.showPicker = false;
  }


  onSubmit(form: NgForm){

    if (!form.valid){
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    console.log(email,password);

    if (this.isLogin){
      // Send a request to login servers
    }
    else
    {
      // Send a request to signup serves
    }
    

  }

}
