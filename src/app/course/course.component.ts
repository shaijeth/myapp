import { Component, OnInit } from '@angular/core';
import { Iservice } from '../../assets/model/Iservice';
import { icourse } from '../../assets/model/icourse';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import { icoursemaster } from '../../assets/model/icoursemaster';
import { icoursecontent } from '../../assets/model/icoursecontent';

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

  courseContents: icoursecontent[] = [];
  courselist: icourse[] = [];
  coursemasterlist: icoursemaster[] = [];
  sectionlist: string[] = [];

  gotocourse(arg0: string, arg1: string) {
    localStorage['coursetitle'] = arg0;
    localStorage['courseid'] = arg1;
    this.router.navigate(['/imgcration']);
  }

  ngOnInit(): void {
    this.loggedinuser = localStorage['loggedinuser'];
    if (this.loggedinuser == null) {
      this.router.navigate(['/signup']);
    }
    else {
      this.courseservice.getcourselist().subscribe((response: icourse[]) => {
        this.courselist = response;
      });

      this.courseservice.getcoursemaster().subscribe((response: icoursemaster[]) => {
        this.coursemasterlist = response;

      });
    }

  }

  constructor(private router: Router, private courseservice: CourseService) { }
  loggedinuser: any = '';


}
