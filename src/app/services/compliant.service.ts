import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompliantService {

  

  API_EP = "https://www.borribo.com.kh/api/";
  
  constructor(private http:HttpClient) { }

  postJob(path:String,body:any):Observable<any>{
    return this.http.post<any[]>(this.API_EP+path,body);
  }
}
