import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { icourse } from '../assets/model/icourse';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private coursejsonurl: string = './assets/course.json';
  private coursecontentjsonurl: string = './assets/coursecontent.json';

  constructor(private http: HttpClient) {}
  getcourselist(): Observable<icourse[]> {
    let courselist = this.http.get<icourse[]>(this.coursejsonurl);
    return courselist.pipe(catchError((error) => of<icourse[]>([])));
  }
}
