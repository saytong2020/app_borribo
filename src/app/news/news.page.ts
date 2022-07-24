import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';
import { News } from './news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  news: News[] = [];
  page = 1;
  max = 0;

  contentLoader = false;

  searchTerm: any;

  constructor(private newsService: NewsService) { 
    setTimeout(()=>{
      this.contentLoader = true;
    }, 3000);
  }

  ngOnInit() {
    this.loadNews();
    
  }

  loadNews(event?){
    this.newsService.getTopRatedNews(`news?page=${this.page}`).subscribe((res)=>{
      // console.log(res);
      this.news = this.news.concat(res['data']);
      if (event){
        event.target.complete();
      }
    });
  }
  loadNewsMore(event: any){
    this.page++;
    // console.log(`page= ${this.page}, max_page = ${this.max}`);
    this.loadNews(event);
    if (this.page === this.max){
      event.target.disabled = true;
    }
  }

  doRefresh(event) {  
    // console.log('Pull Event Triggered!');  
    setTimeout(() => {
      this.newsService.getTopRatedNews(`news?page=${this.page}`).subscribe((res)=>{
        // console.log(res);
        this.news = this.news.concat(res['data']);
        if (event){
          event.target.complete();
        }
      });
      event.target.complete();
    }, 1500); 
  }

}
