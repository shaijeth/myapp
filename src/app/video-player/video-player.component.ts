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

  ngOnInit(): void {

  }
  disableRightClick(event: MouseEvent): void {
    event.preventDefault();
  }
  play() {
    this.videoPlayer.nativeElement.play();
  }
  pause(): void {
    this.videoPlayer.nativeElement.pause();
  }
  
}
