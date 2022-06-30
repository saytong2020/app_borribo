import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class NewsService {
  
  API_EP = "https://www.borribo.com.kh/api/";
  
  constructor(private http:HttpClient) { }

  getTopRatedNews(path:String):Observable<any>{

    return this.http.get(this.API_EP+path);

  }

  getNewsDetails(path: string,id: string){
    return this.http.get(this.API_EP+path+id);
  }

}
