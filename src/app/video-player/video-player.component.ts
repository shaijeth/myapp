import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';
import { icoursecontent } from '../../assets/model/icoursecontent';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css'
})
export class VideoPlayerComponent implements OnInit {


  @Input() currentVideo: icoursecontent | undefined;
  @ViewChild('videoPlayer', { static: true })
  videoPlayer!: ElementRef<HTMLVideoElement>;

  currentTime: number | undefined;
  bookmark: string = '';
  progress: number = 0;
  totalTime: number | undefined;

  setCurrentTime(data: any) {
    this.currentTime = data.target.currentTime;
    
  }
  ngOnInit(): void {
    this.totalTime = 0;
    this.currentTime= localStorage["lastTimeFrame"];
    
  }
  disableRightClick(event: MouseEvent): void {
    event.preventDefault();
  }
  play() {
    // this.videoPlayer.nativeElement.currentTime=50;
    this.videoPlayer.nativeElement.play();
  }
  pause(): void {
    this.bookmark = this.videoPlayer.nativeElement.currentTime.toString();
    this.videoPlayer.nativeElement.pause();
    localStorage["lastTimeFrame"]=this.currentTime;
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
    this.bookmark=video.currentTime.toString();
  }
}
