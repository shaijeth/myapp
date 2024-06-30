import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
interface Course {
  id: number;
  title: string;
  description: string;
}

const courses: Course[] = [
  { id: 1, title: "Course 1", description: "Siver Membership" },
  { id: 2, title: "Course 2", description: "Gold Membership" },
  { id: 3, title: "Course 3", description: "Platinum Membership" },
];

document.addEventListener("DOMContentLoaded", () => {
  const courseList = document.getElementById("course-list") as HTMLElement;

  courses.forEach(course => {
      const listItem = document.createElement("li");
      listItem.className = "course-item";
      listItem.textContent = `${course.title}: ${course.description}`;
      listItem.onclick = () => handleCourseClick(course.id);
      courseList.appendChild(listItem);
  });
});

function handleCourseClick(courseId: number): void {
  // Navigate to the course page
  alert(`Navigating to Course ${courseId}`);
  // window.location.href = `/course/${courseId}`;
}
