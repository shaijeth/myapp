import { AfterViewInit, Component, OnInit } from '@angular/core';
import { icoursecontent } from '../../assets/model/icoursecontent';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import { ImageUploadService } from '../image-upload.service';
import { DataTablesModule } from 'angular-datatables';
import DataTables from 'datatables.net';
import { Subject, takeUntil } from 'rxjs';
import { MediaService } from '../media.service';

@Component({
  selector: 'app-addcoursecontent',
  templateUrl: './addcoursecontent.component.html',
  styleUrl: './addcoursecontent.component.css'
})
export class AddcoursecontentComponent implements OnInit {

  message: string = '';
  selectedfiles!: FileList;
  formData = new FormData();
  imgURL: string[] = [];
  files: File[] = [];
  pid: string = "0";
  courseid: number = 0;
  selectedcourse: string = '';
  images: '';
  uploaded: boolean = false;
  progress: number = -1;

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
    private courseService: CourseService, private mediaService: MediaService) {
    this.images = '';

  }

  ngOnInit(): void {
    this.selectedcourse = localStorage['coursetitle'];
    this.courseid = localStorage['courseid'];
    this.coursedata.courseID = this.courseid;
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
    if (this.selectedfiles) {
      this.uploaded = true;
      this.courseService.newcoursecontent(this.coursedata)
        .subscribe(
          (data: icoursecontent) => {
            this.upload();
          }
        );
      console.warn(this.coursedata);
    }
    else {
      this.message = 'Select video for content';
    }
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
        this.coursedata.videoFileName = 'assets/course/' + this.selectedfiles[i].name;

      }
    }
  }
  upload(): void {
    if (!this.selectedfiles) {
      return;
    }

    const formData: FormData = new FormData;
    let newfilename: string = '';
    for (let i = 0; i < this.selectedfiles.length; i++) {
      newfilename = this.selectedfiles[i].name.replace(/ /g, "_");
      this.images += this.selectedfiles[i].name.replace(/ /g, "_") + ",";
      formData.append('postedFiles', this.selectedfiles[i], newfilename);
    }

    this.imageUploadService.uploadImage(formData)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          if (event.total) {
            this.progress = Math.round(100 * (event.loaded / event.total));
          }
        } else if (event.type === HttpEventType.Response) {

          this.uploaded = false;

          this.message = 'File successfully uploaded!';
          this.progress = 0; // Reset the progress bar after upload
        }
      },
        (error) => {
          console.log('upload error : ', error);
        })
  }



}
