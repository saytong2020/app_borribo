import { Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { NewsService } from '../services/news.service';
import { News } from '../news/news.model';
import { ProductsService } from '../services/products.service';
import { Product } from '../products/product.model';

import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { RouterOutlet } from '@angular/router';


SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom ]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {

  loadedProducts: Product[] = [];
  loadedNews: News[];
  subscribe: any;

  contentLoader = false;
  constructor(
    private productsService: ProductsService,
    private newsService: NewsService,
    public platform: Platform,
  

  ) {

    

    // this.subscribe = this.platform.backButton.subscribeWithPriority(666666,()=>{
    //   if(this.constructor.name == "HomePage")
    //   {
    //     if(window.confirm("do you want exit Borribo app?")){
    //       navigator["app"].exitApp();
    //     }
    //   }
    // });
  }

  ngOnInit() {
    this.contentLoader = false;
    this.productsService.getTopRatedProduct("products").subscribe((res)=>{
      this.loadedProducts = this.loadedProducts.concat(res['data']) ;
      this.contentLoader = true;
    // this.loadedNews = res.slice(1,5);
    });
    // this.loadedNews = this.newsService.news.slice(1,5);
  }
  // optionSlide = {
  //   slidesPerView: 1,
  //   spaceBetween: 5,
  //   pagination: true,
  //   loop: true,
  //   speed: 500,
  //   initialSlide: 2,
  //   autoplay: true,
  //   centeredSlides: true,

  // }

  config = {
    slidesPerView: 1,
    spaceBetween: 1,
    pagination: true,
    loop: true,
    speed: 500,
    initialSlide: 2,
    autoplay: true,
    centeredSlides: true,
  }
}
