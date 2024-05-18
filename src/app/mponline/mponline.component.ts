import { Component } from '@angular/core';
import { Iservice } from '../../assets/model/Iservice';
// import { Iservice} from 'src/assets/model/Iservice';
@Component({
  selector: 'app-mponline',
  templateUrl: './mponline.component.html',
  styleUrl: './mponline.component.css'
})



export class MponlineComponent {

  servicesicon:Iservice[]= [{icon:"1",file:"1.pdf",desc:"Nice to Meet You"},
   {icon:"2",file:"1.pdf",desc:"Nice to Meet You"},
    {icon:"3",file:"1.pdf",desc:"Nice to Meet You"},
    {icon:"4",file:"1.pdf",desc:"Nice to Meet You"}

  ];
}
