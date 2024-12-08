import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
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

  //@Output() videoSelected = new EventEmitter<icoursecontent>();
  @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef<HTMLVideoElement>;

  coursetitle: string = "";
  currentTime: string | undefined;
  bookmark: string = '';
  progress: number = 0;
  totalTime: number | undefined;
  currentVideoSource: string = '../../assets/course/StreetCafe3DSketch.mp4';
  selectedcontentname: String = '';
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
  selectedcontent: number = 0;

  constructor(private http: HttpClient, private router: Router, private imageUploadService: ImageUploadService,
    private courseService: CourseService, public mediaservice: MediaService) {

  }
  ngOnInit(): void {
    this.courseid = localStorage['courseid'];
    this.userid = localStorage['userid'];
    this.loggedinuser = localStorage['loggedinuser'];
    this.coursetitle = localStorage['coursetitle'];
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

  // GetCourseList() {
  //   this.courseService.getcourscontentbyid(this.userid, this.courseid)
  //     .subscribe(
  //       (data: icoursecontent[]) => {
  //         this.courseContents = data.filter(d => d.courseID == this.courseid).sort((a, b) => a.order - b.order);

  //         this.sectionlist = this.courseContents.map(item => item.sectionName)
  //           .filter((__values, index, self) => self.indexOf(__values) === index);
  //           this.contenttext = 'Total Sections : ' + this.sectionlist.length.toString() +  ' Total Lessons : ' + this.courseContents.length.toString();
  //         const toaltime = this.courseContents.reduce((sum, item) => sum + item.duration, 0);          
  //         this.contenttext += ' Total Time : '+this.mediaservice.convertSeconds(toaltime);

  //       }
  //     );
  // }
  setCurrentVideo(selectedvideofilename: icoursecontent) {
    this.selectedcontent = selectedvideofilename.courseContentID;
    this.selectedcontentname= selectedvideofilename.contentName;
    //console.log(" this.selectedcontent : " + selectedvideofilename.videoFileName);
    //this.videoSelected.emit(selectedvideofilename);

  }

  setCurrentTime(data: any) {
    this.currentTime = data.target.currentTime;

  }
  // ngOnInit(): void {
  //   this.totalTime = 0;
  //   this.currentTime = localStorage["lastTimeFrame"];
  //   let newSource ='../../assets/course/StreetCafe3DSketch.mp4';

  // }

  ngAfterViewInit(): void {

  }
  ngOnDestroy(): void {
    if (this.videoPlayer) {
      // this.videoPlayer.nativeElement.; // Clean up player instance
    }
  }

  disableRightClick(event: MouseEvent): void {
    event.preventDefault();
  }
  disableContextMenu(event: MouseEvent): void {
    event.preventDefault(); // Prevent the context menu
    //alert('Right-click is disabled on this video.');
  }
  play() {
    const savedTime = localStorage.getItem('lastTimeFrame');
    if (savedTime) {
      this.videoPlayer.nativeElement.currentTime = parseFloat(savedTime);
    }
    this.videoPlayer.nativeElement.play();
  }

  start() {
    this.videoPlayer.nativeElement.currentTime = 0;
    this.videoPlayer.nativeElement.play();
  }

  onPause(): void {
    this.bookmark = this.videoPlayer.nativeElement.currentTime.toString();
    this.videoPlayer.nativeElement.pause();
    localStorage["lastTimeFrame"] = this.currentTime;

  }

  initializeVideo() {
    const video = this.videoPlayer.nativeElement;
    this.progress = 0;
    this.totalTime = video.duration;
  }

  updateProgressBar() {
    const video = this.videoPlayer.nativeElement;
    const progressPercent = (video.currentTime / video.duration) * 100;
    this.progress = progressPercent;
    this.totalTime = video.duration;
  }

  seekVideo(event: Event) {
    const input = event.target as HTMLInputElement;
    const video = this.videoPlayer.nativeElement;
    const seekTime = (input.valueAsNumber / 100) * video.duration;
    video.currentTime = seekTime;
  }

  togglePlayPause() {
    const video = this.videoPlayer.nativeElement;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    this.bookmark = video.currentTime.toString();
  }
  changeVideoSource(contenttext:string,contentfile:string) {
      
    this.currentVideoSource =contentfile;
    this.selectedcontentname = contenttext;
    // Reload the video after changing the source
    const videoElement = this.videoPlayer.nativeElement;
    videoElement.load();
    videoElement.play();
  }
}


//changeVideoSource('assets/videos/video1.mp4')