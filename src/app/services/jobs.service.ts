
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
 


  API_EP = "https://www.borribo.com.kh/api/";
  
  constructor(private http:HttpClient) { }

  postJob(path:String,id:String,body:any):Observable<any>{
    return this.http.post<any[]>(this.API_EP+path+id,body);
  }

  getTopRatedJob(path:String):Observable<any>{

    return this.http.get(this.API_EP+path);

  }

  getJobDetails(path: string,id: string){
    return this.http.get(this.API_EP+path+id);
  }

  // getJobId(path:String,jobId:String):Observable<any>{

  //   return this.http.get(this.API_EP+path+jobId);

  // }


  


  // getJobId(jobId: string) {
  //   return { ...this._jobs.find((res) => res.id === jobId) };
  // }


  // private _jobs: Job[] = [
  //   new Job(
  //     'j1',
  //     'ព័ត៌មានវិទ្យា',
  //     'ភ្នំពេញ',
  //     'ឱកាសការងារសម្រាប់តួនាទី មន្រ្តីឥណទាន...',
  //     'Job TypeFull-time Experience2 Year Up Min Salary$300 Up លក្ខខណ្ឌនៃការជ្រើសរើស: *ភេទស្រី',
  //     'https://www.borribo.com.kh/NewsPicture/rZclkhjmaxCNODCsLvaOeTp2BjHBLbQnadl0Uaq6.jpg',
  //     'Job TypeFull-time Experience2 Year Up Min Salary$300 Up លក្ខខណ្ឌនៃការជ្រើសរើស: *ភេទស្រី',
  //     new Date('2022-1-1'),
  //     'សាយ​ តុង',
  //     'avatar_image'
  //   ),

  //   new Job(
  //     'j2',
  //     'ព័ត៌មានវិទ្យា',
  //     'ភ្នំពេញ',
  //     'គ្រឹះស្ថានមានការជ្រើសរើសមុខតំណែងជា...',
  //     'Job TypeFull-time Experience2 Year Up Min Salary$300 Up លក្ខខណ្ឌនៃការជ្រើសរើស: *ភេទស្រី',
  //     'https://www.borribo.com.kh/NewsPicture/rZclkhjmaxCNODCsLvaOeTp2BjHBLbQnadl0Uaq6.jpg',
  //     'Job TypeFull-time Experience2 Year Up Min Salary$300 Up លក្ខខណ្ឌនៃការជ្រើសរើស: *ភេទស្រី',
  //     new Date('2022-1-1'),
  //     'សាយ​ តុង',
  //     'avatar_image'
  //   ),

  //   new Job(
  //     'j3',
  //     'ព័ត៌មានវិទ្យា',
  //     'ភ្នំពេញ',
  //     'ឱកាសការងារសម្រាប់តួនាទី មន្រ្តីឥណទាន...',
  //     'Job TypeFull-time Experience2 Year Up Min Salary$300 Up លក្ខខណ្ឌនៃការជ្រើសរើស: *ភេទស្រី',
  //     'https://www.borribo.com.kh/NewsPicture/rZclkhjmaxCNODCsLvaOeTp2BjHBLbQnadl0Uaq6.jpg',
  //     'Job TypeFull-time Experience2 Year Up Min Salary$300 Up លក្ខខណ្ឌនៃការជ្រើសរើស: *ភេទស្រី',
  //     new Date('2022-1-1'),
  //     'សាយ​ តុង',
  //     'avatar_image'
  //   ),

  //   new Job(
  //     'j4',
  //     'ព័ត៌មានវិទ្យា',
  //     'ភ្នំពេញ',
  //     'ផ្នែកគណនេយ្យទូទាត់ថ្លៃតូបជួលនិងបន្ទប់ជួល...',
  //     'Job TypeFull-time Experience2 Year Up Min Salary$300 Up លក្ខខណ្ឌនៃការជ្រើសរើស: *ភេទស្រី',
  //     'https://www.borribo.com.kh/NewsPicture/rZclkhjmaxCNODCsLvaOeTp2BjHBLbQnadl0Uaq6.jpg',
  //     'Job TypeFull-time Experience2 Year Up Min Salary$300 Up លក្ខខណ្ឌនៃការជ្រើសរើស: *ភេទស្រី',
  //     new Date('2022-1-1'),
  //     'សាយ​ តុង',
  //     'avatar_image'
  //   ),

  //   new Job(
  //     'j5',
  //     'ព័ត៌មានវិទ្យា',
  //     'ភ្នំពេញ',
  //     'Accountant គណនេយ្យករ​ (​ភ្នំពេញ)...',
  //     'Job TypeFull-time Experience2 Year Up Min Salary$300 Up លក្ខខណ្ឌនៃការជ្រើសរើស: *ភេទស្រី',
  //     'https://www.borribo.com.kh/NewsPicture/rZclkhjmaxCNODCsLvaOeTp2BjHBLbQnadl0Uaq6.jpg',
  //     'Job TypeFull-time Experience2 Year Up Min Salary$300 Up លក្ខខណ្ឌនៃការជ្រើសរើស: *ភេទស្រី',
  //     new Date('2022-1-1'),
  //     'សាយ​ តុង',
  //     'avatar_image'
  //   ),

  //   new Job(
  //     'j6',
  //     'ព័ត៌មានវិទ្យា',
  //     'ភ្នំពេញ',
  //     'បុគ្គលិកស្ម័គ្រចិត្តផ្នែកព័ត៌វិទ្យា IT...',
  //     'Job TypeFull-time Experience2 Year Up Min Salary$300 Up លក្ខខណ្ឌនៃការជ្រើសរើស: *ភេទស្រី',
  //     'https://www.borribo.com.kh/NewsPicture/rZclkhjmaxCNODCsLvaOeTp2BjHBLbQnadl0Uaq6.jpg',
  //     'Job TypeFull-time Experience2 Year Up Min Salary$300 Up លក្ខខណ្ឌនៃការជ្រើសរើស: *ភេទស្រី',
  //     new Date('2022-1-1'),
  //     'សាយ​ តុង',
  //     'avatar_image'
  //   ),

  //   new Job(
  //     'j7',
  //     'ព័ត៌មានវិទ្យា',
  //     'ភ្នំពេញ',
  //     'ផ្នែក IT (ជួយពិនិត្យនិងគ្រប់គ្រងលើ App)...',
  //     'Job TypeFull-time Experience2 Year Up Min Salary$300 Up លក្ខខណ្ឌនៃការជ្រើសរើស: *ភេទស្រី',
  //     'https://www.borribo.com.kh/NewsPicture/rZclkhjmaxCNODCsLvaOeTp2BjHBLbQnadl0Uaq6.jpg',
  //     'Job TypeFull-time Experience2 Year Up Min Salary$300 Up លក្ខខណ្ឌនៃការជ្រើសរើស: *ភេទស្រី',
  //     new Date('2022-1-1'),
  //     'សាយ​ តុង',
  //     'avatar_image'
  //   ),

  //   new Job(
  //     'j8',
  //     'ព័ត៌មានវិទ្យា',
  //     'ភ្នំពេញ',
  //     'អ្នកគ្រប់គ្រង​គណនេយ្យ...',
  //     'Job TypeFull-time Experience2 Year Up Min Salary$300 Up លក្ខខណ្ឌនៃការជ្រើសរើស: *ភេទស្រី',
  //     'https://www.borribo.com.kh/NewsPicture/rZclkhjmaxCNODCsLvaOeTp2BjHBLbQnadl0Uaq6.jpg',
  //     'Job TypeFull-time Experience2 Year Up Min Salary$300 Up លក្ខខណ្ឌនៃការជ្រើសរើស: *ភេទស្រី',
  //     new Date('2022-1-1'),
  //     'សាយ​ តុង',
  //     'avatar_image'
  //   ),

  //   new Job(
  //     'j9',
  //     'ព័ត៌មានវិទ្យា',
  //     'ភ្នំពេញ',
  //     'ឱកាសការងារសម្រាប់តួនាទី មន្រ្តីឥណទាន មន្រ្តីឥណទាន...',
  //     'Job TypeFull-time Experience2 Year Up Min Salary$300 Up លក្ខខណ្ឌនៃការជ្រើសរើស: *ភេទស្រី',
  //     'https://www.borribo.com.kh/NewsPicture/rZclkhjmaxCNODCsLvaOeTp2BjHBLbQnadl0Uaq6.jpg',
  //     'Job TypeFull-time Experience2 Year Up Min Salary$300 Up លក្ខខណ្ឌនៃការជ្រើសរើស: *ភេទស្រី',
  //     new Date('2022-1-1'),
  //     'សាយ​ តុង',
  //     'avatar_image'
  //   ),
  // ];



  // get job() {

    
  //   return [...this._jobs];
  // }

  // getJobId(jobId: string) {
  //   return { ...this._jobs.find((res) => res.id === jobId) };
  // }
}
