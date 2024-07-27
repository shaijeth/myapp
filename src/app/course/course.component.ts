import { Component, OnInit } from '@angular/core';
import { Iservice } from '../../assets/model/Iservice';
import { icourse } from '../../assets/model/icourse';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import { icoursemaster } from '../../assets/model/icoursemaster';

interface Istudent {
  coursename: string;
  age: number;
  totalFee: number;
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent implements OnInit {

  gotocourse(arg0: string,arg1: string) {
    localStorage['coursetitle']=arg0;
    localStorage['courseid']=arg1;
    this.router.navigate(['/imgcration']);
  }

  courselist: icourse[] = [];
  coursemasterlist: icoursemaster[] = [];
  ngOnInit(): void {
    this.loggedinuser = localStorage['loggedinuser'];
    this.courseservice.getcourselist().subscribe((response: icourse[]) => {
      this.courselist = response;
    });

    this.courseservice.getcoursemaster().subscribe((response: icoursemaster[]) => {
      this.coursemasterlist = response;
      console.log(response);
    });

  }
  /**
   *
   */
  constructor(private router: Router, private courseservice: CourseService) { }
  loggedinuser: any = '';

}
