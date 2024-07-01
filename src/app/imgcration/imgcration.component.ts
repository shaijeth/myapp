import { Component } from '@angular/core';

@Component({
  selector: 'app-imgcration',
  templateUrl: './imgcration.component.html',
  styleUrl: './imgcration.component.css'
})
export class ImgcrationComponent {

}


document.addEventListener("DOMContentLoaded", () => {
  const videoPlayer = document.getElementById("video-player") as HTMLVideoElement;
  const playPauseButton = document.getElementById("play-pause") as HTMLButtonElement;
  const prevButton = document.getElementById("prev") as HTMLButtonElement;
  const nextButton = document.getElementById("next") as HTMLButtonElement;
  const progressBar = document.getElementById("progress") as HTMLDivElement;
  const videoList = document.getElementById("video-list") as HTMLUListElement;
  const videoItems = document.querySelectorAll(".video-item");
  
  let currentVideoIndex = 0;

  const videos = [
      "..//../assets/wellcome.mp4",
      "https://www.youtube.com/embed/9XX4UoUsQqQ",
      "video3.mp4",
      "video4.mp4",
      "video5.mp4",
      "video6.mp4"
  ];

  playPauseButton.addEventListener("click", () => {
      if (videoPlayer.paused) {
          videoPlayer.play();
          playPauseButton.textContent = "Pause";
      } else {
          videoPlayer.pause();
          playPauseButton.textContent = "Play";
      }
  });

  prevButton.addEventListener("click", () => {
      if (currentVideoIndex > 0) {
          currentVideoIndex--;
          loadVideo(currentVideoIndex);
      }
  });

  nextButton.addEventListener("click", () => {
      if (currentVideoIndex < videos.length - 1) {
          currentVideoIndex++;
          loadVideo(currentVideoIndex);
      }
  });

  videoPlayer.addEventListener("timeupdate", () => {
      const progressPercent = (videoPlayer.currentTime / videoPlayer.duration) * 100;
      progressBar.style.width = `${progressPercent}%`;
  });

  videoItems.forEach((item, index) => {
      item.addEventListener("click", () => {
          currentVideoIndex = index;
          loadVideo(currentVideoIndex);
      });
  });

  function loadVideo(index: number) {
      videoPlayer.src = videos[index];
      videoPlayer.play();
      playPauseButton.textContent = "Pause";
  }

  // Initialize the first video
  loadVideo(currentVideoIndex);
});
