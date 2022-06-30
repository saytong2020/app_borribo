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

  constructor(
    private productsService:ProductsService,
  ) { }

  ngOnInit() {
    this.productsService.getTopRatedProduct("products").subscribe((res)=>{
      this.products = this.products.concat(res["data"]);
     
    });
  }


}
