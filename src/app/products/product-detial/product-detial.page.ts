import { ProductsService } from './../../services/products.service';
import { Product } from './../product.model';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ActionSheetController,
  LoadingController,
  ModalController,
  NavController,
} from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { NgForm, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-detial',
  templateUrl: './product-detial.page.html',
  styleUrls: ['./product-detial.page.scss'],
})
export class ProductDetialPage implements OnInit {


  startDate: string;
  showPickerStart = false;
  showPickerTo = false;

  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09.00.00.000Z';

  fromatedStringStart = '';

  isLogin: any;

  product= null;

  lastesProduct: Product[] = [];

  applyloandForm:any;

  constructor(
  
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private modalCtrl: ModalController,
    private router: Router,
    private loadingCtrl: LoadingController,
    
  ) {}

  ngOnInit() {
  const id = this.activatedRoute.snapshot.paramMap.get('productId');
    this.applyloandForm = this.formBuilder.group (
      {
        id_loan: [id],
        name: ['',Validators.required],
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


    this.productsService.getProductDetails("products/",id).subscribe((res)=>{
      this.product = res;
    });

    // Latest Products

    this.productsService.getTopRatedProduct('products').subscribe((res)=>{
      this.lastesProduct = this.lastesProduct.concat(res['data']);
    });
  }

  applyLoan()
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

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
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

  setTodayStart() {
    this.fromatedStringStart = format(
      parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09.00.00.000Z'),
      ' dd, MM, yyyy, HH:mm'
    );
  }

  dateChangedStart(value) {
    console.log(value);
    this.dateValue = value;

    this.fromatedStringStart = format(parseISO(value), ' d-MM-yyyy ');

    this.showPickerStart = false;
  }

  pro = {
    slidesPerView:2,
    // centeredSlides: true,
    loop: true,
    // spaceBetween: 5,
    autoplay: true,
    speed: 300,
  }
}



