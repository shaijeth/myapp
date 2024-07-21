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


function handleCourseClick(courseId: number): void {
  // Navigate to the course page
  alert(`Navigating to Course ${courseId}`);
  // window.location.href = `/course/${courseId}`;
}
