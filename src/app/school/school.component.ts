import { Component } from '@angular/core';
import { Iservice } from '../../assets/model/Iservice';




@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrl: './school.component.css'
})
export class SchoolComponent {


  servicesicon:Iservice[]= [{icon:"1",file:"1.pdf",desc:"Nice to Meet You"},
   {icon:"2",file:"1.pdf",desc:"Nice 2 to Meet You"},
    {icon:"3",file:"1.pdf",desc:"Nice 3to Meet You"},
    {icon:"4",file:"1.pdf",desc:"Nice 4to Meet You"}

  ];
}


