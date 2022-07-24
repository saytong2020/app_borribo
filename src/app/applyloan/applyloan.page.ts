import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ProductsService } from './../services/products.service';
import { LoadingController } from '@ionic/angular';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-applyloan',
  templateUrl: './applyloan.page.html',
  styleUrls: ['./applyloan.page.scss'],
})
export class ApplyloanPage implements OnInit {
  isLogin: any;
  applyloandForm: any;

  currencyString = '';
  genderString ='';
  genderValue='';
  assetString='';
  assetValue='';

  constructor(
    private formBuilder:FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private pickerCtrl: PickerController
    ) { }

  ngOnInit() {

    this.applyloandForm = this.formBuilder.group (
      {
        name: ['',[Validators.required,Validators.maxLength(20)]],
        currency: ['',Validators.required],
        amount: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
        gender: ['',Validators.required],
        phone: ['',[Validators.required,Validators.minLength(9),Validators.maxLength(10)]],
        asset: ['',Validators.required],
        address: ['',[Validators.required,Validators.maxLength(50)]],
        // username: ['',Validators.required],
        // email: ['',Validators.email],
        
      }
    );
  }

  postLoan()
  {
   console.log(this.applyloandForm.getRawValue());
    let userForm:any = this.applyloandForm.getRawValue();
    // this.LocalStorageService.onCreate(userForm,"$user_info");

    this.productsService.postLoan("applyotherloanid",this.applyloandForm.getRawValue()).subscribe((res)=>{
      return res;
      
    });
    this.applyloandForm.reset();

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

  // onSubmit(form: NgForm){

  //   if (!form.valid){
  //    console.log(form);
  //   }

  //   const email = form.value.email;
  //   const password = form.value.password;

  //   console.log(email,password);

  //   if (this.isLogin){
  //     // Send a request to login servers
  //   }
  //   else
  //   {
  //     // Send a request to signup serves
  //   }
    

  // }


  async openPickerCurrency() {
    const picker = await this.pickerCtrl.create({
      columns: [
        {
          name: 'currency',
          options: [
            {
              text: 'ប្រាក់រៀល (៛)',
              value: 'ប្រាក់រៀល',
            },
            {
              text: 'ប្រាក់ដុល្លា​​ ($)',
              value: 'ប្រាក់ដុល្លា​​',
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
            this.currencyString = value.currency.value;
          },
        },
      ],
    });

    await picker.present();
  }


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



async  openPickerAsset(){
    const picker = await this.pickerCtrl.create({
      columns: [
        {
          name: 'asset',
          options: [
            {
              text: 'កាតគ្រី',
              value: 'កាតគ្រី',
            },
            {
              text: 'ប្លង់',
              value: 'ប្លង់',
            },
            {
              text: 'ផ្សេងៗ',
              value: 'ផ្សេងៗ',
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
          
          
            this.assetValue = value.asset.value;
            
          },
        },
      ],
    });

    await picker.present();
  }

}
