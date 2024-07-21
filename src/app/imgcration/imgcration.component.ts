import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imgcration',
  templateUrl: './imgcration.component.html',
  styleUrl: './imgcration.component.css'
})
export class ImgcrationComponent implements OnInit{
   
 coursetitle:string="" ;

    ngOnInit(): void {

        this.coursetitle=localStorage['coursetitle'];
    }

}
