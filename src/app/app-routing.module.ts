import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about',
    children:[
      {
        path:'',loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule),
      },
      {
       path:'background', loadChildren: () => import('./about/background/background.module').then( m => m.BackgroundPageModule),
      },
      {
        path:'management', loadChildren: () => import('./about/management/management.module').then( m => m.ManagementPageModule),
       },
       {
        path:'orga-chart', loadChildren: () => import('./about/orga-chart/orga-chart.module').then( m => m.OrgaChartPageModule),
       },
       {
        path:'license', loadChildren: () => import('./about/license/license.module').then( m => m.LicensePageModule),
       }
    ]
    
    
  },
  {
    path: 'products',
    children: [
      {
        path: '', loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
      },
      {
        path: ':productId', loadChildren: () => import('./products/product-detial/product-detial.module').then(m => m.ProductDetialPageModule)
      }
    ]
    
  },
  {
    path: 'news',
    children: [
      {
        path: '',  loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
      },
      {
        path: ':newsId', loadChildren: () => import('./news/news-detial/news-detial.module').then( m => m.NewsDetialPageModule)
      }
    ]
   
  },
  {
    path: 'jobs',
    children: [
      {path: '', loadChildren: () => import('./jobs/jobs.module').then( m => m.JobsPageModule)},
      {path: ':jobId', loadChildren: () => import('./jobs/job-detial/job-detial.module').then(m => m.JobDetialPageModule)}
    ]
    
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'applyjob',
    loadChildren: () => import('./applyjob/applyjob.module').then( m => m.ApplyjobPageModule)
  },
  {
    path: 'calculator',
    loadChildren: () => import('./calculator/calculator.module').then( m => m.CalculatorPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'complaint',
    loadChildren: () => import('./complaint/complaint.module').then( m => m.ComplaintPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'applyloan',
    loadChildren: () => import('./applyloan/applyloan.module').then( m => m.ApplyloanPageModule)
  },
  {
    path: 'tong',
    loadChildren: () => import('./tong/tong.module').then( m => m.TongPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
