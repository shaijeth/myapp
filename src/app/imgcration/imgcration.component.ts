import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
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
export class ImgcrationComponent {

  @Output() videoSelected = new EventEmitter<icoursecontent>();


  constructor(private http: HttpClient, private router: Router, private imageUploadService: ImageUploadService,
    private courseService: CourseService) {

  }
 
 
  coursedata: icoursecontent = {
    courseContentID: 0,
    courseID: 0,
    sectionName: '',
    contentName: '',
    videoFileName: '',
    createdDate: new Date
  };
 
  onVideoSelected(video:icoursecontent) {
    this.coursedata = video;
  }
  
}
