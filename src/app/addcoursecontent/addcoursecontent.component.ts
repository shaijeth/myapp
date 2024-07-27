import { AfterViewInit, Component, OnInit } from '@angular/core';
import { icoursecontent } from '../../assets/model/icoursecontent';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import { ImageUploadService } from '../image-upload.service';
import {DataTablesModule} from 'angular-datatables';
import DataTables from 'datatables.net';

@Component({
  selector: 'app-addcoursecontent',
  templateUrl: './addcoursecontent.component.html',
  styleUrl: './addcoursecontent.component.css'
})
export class AddcoursecontentComponent implements OnInit, AfterViewInit {

  message: string = '';
  selectedfiles!: FileList;
  formData = new FormData();
  imgURL: string[] = [];
  files: File[] = [];
  pid: string = "0";
  courseid: number = 0;
  selectedcourse: string = '';
  images: '';

  coursedata: icoursecontent = {
    courseContentID: 0,
    courseID: 0,
    sectionName: '',
    contentName: '',
    videoFileName: '',
    createdDate: new Date
  };
  courseContents: icoursecontent[] = [];

  constructor(private http: HttpClient, private router: Router, private imageUploadService: ImageUploadService,
    private courseService: CourseService) {
    this.images = '';

  }
  ngAfterViewInit(): void {
    // Initialize DataTable
    
  }
  ngOnInit(): void {
    this.selectedcourse = localStorage['coursetitle'];
    this.courseid = localStorage['courseid'];
    this.coursedata.courseID= this.courseid;
    this.GetCourseList();
  }

  DeleteCourseContent(ccntid: number) {
    this.courseService.deleteCourseContent(ccntid).subscribe(() => {
      this.courseContents = this.courseContents.filter(course => course.courseID !== ccntid);
    });
  }

  EditCourseContent(arg0: number) {
    alert("Work In Progress");
  }

  GetCourseList() {
    this.courseService.getcourscontent(this.courseid)
      .subscribe(
        (data: icoursecontent[]) => {
          this.courseContents = data;
          console.log(this.courseContents[1]);
        }
      );
  }
  CreatCourseContent() {

    this.courseService.newcoursecontent(this.coursedata)
      .subscribe(
        (data: icoursecontent) => {
          this.message = 'Course content Created';
          this.upload("1");
        }
      );
    console.warn(this.coursedata);
  }
  onChange(event: any) {
    this.selectedfiles = event.target.files;
    if (this.selectedfiles) {
      for (let i = 0; i < this.selectedfiles.length; i++) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.imgURL.push(e.target.result);
        }
        reader.readAsDataURL(this.selectedfiles[i]);
        this.coursedata.videoFileName = this.selectedfiles[i].name;
        console.log(this.coursedata.videoFileName);
      }
    }
  }
  upload(newpid: string): void {
    const formData: FormData = new FormData;
    for (let i = 0; i < this.selectedfiles.length; i++) {
      let newfilename = this.selectedfiles[i].name.replace(/ /g, "_");
      this.images += this.selectedfiles[i].name.replace(/ /g, "_") + ",";
      formData.append('postedFiles', this.selectedfiles[i], newfilename);
    }

    this.imageUploadService.uploadImage( formData).subscribe((data: any) => {
      console.log(data);
    },
      (error) => {
        console.log('upload error : ', error);
      })
  }
}
