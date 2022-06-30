import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_EP = "https://www.borribo.com.kh/api/";
  
  constructor(private http:HttpClient) { }

  postLoan(path:String,body:any):Observable<any>{
    return this.http.post<any[]>(this.API_EP+path,body);
  }

  getTopRatedProduct(path:String):Observable<any>{

    return this.http.get(this.API_EP+path);

  }

  getProductDetails(path: string,id: string){
    return this.http.get(this.API_EP+path+id);
  }
}
