import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import { ImageUploadService } from '../image-upload.service';
import { icoursecontent } from '../../assets/model/icoursecontent';
import { __values } from 'tslib';

@Component({
  selector: 'app-imgcration',
  templateUrl: './imgcration.component.html',
  styleUrl: './imgcration.component.css'
})
export class ImgcrationComponent implements OnInit {


  constructor(private http: HttpClient, private router: Router, private imageUploadService: ImageUploadService,
    private courseService: CourseService) {

  }
  vidofilename:any='';
  courseid: number = 0;
  coursetitle: string = "";
  coursedata: icoursecontent = {
    courseContentID: 0,
    courseID: 0,
    sectionName: '',
    contentName: '',
    videoFileName: '',
    createdDate: new Date
  };
  courseContents: icoursecontent[] = [];
  sectionlist:string[] =[];
  
  ngOnInit(): void {
    this.coursetitle = localStorage['coursetitle'];
    this.courseid = localStorage['courseid'];

    this.GetCourseList();
  }

  GetCourseList() {
    this.courseService.getcourscontentbyid(this.courseid)
      .subscribe(
        (data: icoursecontent[]) => {
          this.courseContents = data.filter(d=> d.courseID==this.courseid );

          this.sectionlist=this.courseContents.map(item=> item.sectionName)
          .filter((__values,index,self)=> self.indexOf(__values)===index);
        }
      );
  }
  setCurrentVideo(selectedvideofilename:string) {
    this.vidofilename=selectedvideofilename;
    }
}
