import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
  
})
export class UploadComponent {

}

document.addEventListener("DOMContentLoaded", () => {
  const uploadButton = document.getElementById("upload-button") as HTMLButtonElement;
  const uploadedList = document.getElementById("uploaded-list") as HTMLUListElement;

  uploadButton.addEventListener("click", () => {
      const courseName = (document.getElementById("course-name") as HTMLInputElement).value;
      const videoTitle = (document.getElementById("video-title") as HTMLInputElement).value;
      const videoSection = (document.getElementById("video-section") as HTMLInputElement).value;
      const videoFile = (document.getElementById("video-file") as HTMLInputElement).files?.[0];

      if (courseName && videoTitle && videoSection && videoFile) {
          const listItem = document.createElement("li");

          listItem.innerHTML = `
              <span>${courseName} - ${videoTitle} (${videoSection})</span>
              <button class="delete-button">Delete</button>
          `;

          listItem.querySelector(".delete-button")?.addEventListener("click", () => {
              uploadedList.removeChild(listItem);
          });

          uploadedList.appendChild(listItem);

          // Reset form
          (document.getElementById("upload-form") as HTMLFormElement).reset();
      } else {
          alert("Please fill in all fields and select a video file.");
      }
  });
});
