import { Component } from '@angular/core';
import { Iservice } from '../../assets/model/Iservice';

interface Istudent {
  coursename: string;
  age: number;
  totalFee: number;
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {


  servicesicon: Iservice[] = [
    { icon: 'canva', file: '1.pdf', desc: 'Learn CANVA' },
    { icon: 'yt', file: '1.pdf', desc: 'Learn YT' },
    { icon: 'website', file: '1.pdf', desc: 'Nice 3to Meet You' },
    { icon: 'social', file: '1.pdf', desc: 'Nice 4to Meet You' },
    { icon: 'fb', file: '1.pdf', desc: 'Nice 4to Meet You' },
    { icon: 'google', file: '1.pdf', desc: 'Nice 4to Meet You' },
    { icon: 'Nich', file: '1.pdf', desc: 'Nice 4to Meet You' },
  ];
  listofstudent: Istudent[] = [
    {
      coursename: 'shai',
      age: 40,
      totalFee: 5550,
    },
    {
      coursename: 'deepi',
      age: 45,
      totalFee: 5543,
    },
  ];

  // student:string='ravi';
  // age:number=20;
  // totalFee:number=5000;
}
