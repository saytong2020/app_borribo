import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products:Product[]=[];

  contentLoader = false;

  constructor(
    private productsService:ProductsService,
  ) {
    setTimeout(()=>{
      this.contentLoader = true;
    }, 3000);
   }

  ngOnInit() {
    this.productsService.getTopRatedProduct("products").subscribe((res)=>{
      this.products = this.products.concat(res["data"]);
     
    });
  }


}
