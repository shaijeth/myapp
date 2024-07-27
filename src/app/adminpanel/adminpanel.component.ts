import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrl: './adminpanel.component.css'
})
export class AdminpanelComponent implements OnInit{
  loggedinuser: any;
  
  ngOnInit(): void {
    this.loggedinuser = localStorage['loggedinuser'];
  }
}
