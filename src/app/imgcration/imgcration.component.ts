import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import { ImageUploadService } from '../image-upload.service';
import { icoursecontent } from '../../assets/model/icoursecontent';
import { __values } from 'tslib';
import { MediaService } from '../media.service';

@Component({
  selector: 'app-imgcration',
  templateUrl: './imgcration.component.html',
  styleUrl: './imgcration.component.css'
})
export class ImgcrationComponent implements OnInit {

  @Output() videoSelected = new EventEmitter<icoursecontent>();

  courseid: number = 0;
  userid: number = 0;
  coursedata: icoursecontent = {
    courseContentID: 0,
    courseID: 0,
    sectionName: '',
    contentName: '',
    videoFileName: '',
    createdDate: new Date,
    duration: 0,
    order: 0,
    userName: '',
    userId: 0,
    watchedDuration: 0,
    completed: false
  };
  courseContents: icoursecontent[] = [];
  sectionlist: string[] = [];
  contenttext: string = '';
  loggedinuser: any = '';
  constructor(private http: HttpClient, private router: Router, private imageUploadService: ImageUploadService,
    private courseService: CourseService, public mediaservice: MediaService) {

  }
  ngOnInit(): void {
    this.courseid = localStorage['courseid'];
    this.userid = localStorage['userid'];
    this.loggedinuser = localStorage['loggedinuser'];
    if (this.loggedinuser == null) {
      this.router.navigate(['/signup']);
    }
    else {
      this.GetCourseList(this.userid, this.courseid);
    }
  }
  onVideoSelected(video: icoursecontent) {
    this.coursedata = video;

  }
  public GetCourseList(userid: number, courseid: number) {
    this.courseService.getcourscontentbyid(userid, courseid)
      .subscribe(
        (data: icoursecontent[]) => {
          this.courseContents = data.filter(d => d.courseID == courseid);
          this.sectionlist = this.courseContents.map(item => item.sectionName)
            .filter((__values, index, self) => self.indexOf(__values) === index);
          this.contenttext = 'Total Sections : ' + this.sectionlist.length.toString() + ' Total Lessons : ' + this.courseContents.length.toString();
          const toaltime = this.courseContents.reduce((sum, item) => sum + item.duration, 0);

          this.contenttext += ' Total Time : ' + this.mediaservice.convertSeconds(toaltime);
        }
      );
  }


}
