import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrl: './userpanel.component.css'
})
export class UserpanelComponent implements OnInit {
  
  
  loggedinuser: any;
  
  ngOnInit(): void {
   this.loggedinuser = localStorage['userid'];
  }

}
