import { News } from './../news.model';
import { NewsService } from './../../services/news.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-detial',
  templateUrl: './news-detial.page.html',
  styleUrls: ['./news-detial.page.scss'],
})
export class NewsDetialPage implements OnInit {

  news= null;

  latestNews: News[]=[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService
    
  ) { }

  ngOnInit() {

    // this.activatedRoute.paramMap.subscribe((paramMap) => {
    //   if(!paramMap.has('newsId')){
    //     return;
    //   }
    //   else{
    //     const newsId = paramMap.get('newsId');
    //     this.news =  this.newsService.getNewsDetails(newsId);
    //   }
    // });

    const id = this.activatedRoute.snapshot.paramMap.get('newsId');
    
    this.newsService.getNewsDetails("news/",id).subscribe((res)=>{
      this.news = res;
    });

       // Ralate Jobs

    this.newsService.getTopRatedNews("news").subscribe((res)=>{
      this.latestNews = this.latestNews.concat(res['data']) ;
    });
  }


  option_news = {
    slidesPerView:2,
    // centeredSlides: true,
    loop: true,
    // spaceBetween: 5,
    autoplay: true,
    speed: 300,
  }

}
