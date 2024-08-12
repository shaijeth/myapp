import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrl: './adminpanel.component.css'
})
export class AdminpanelComponent implements OnInit{
  /**
   *
   */
  constructor(private router: Router) {
    
    
  }
  loggedinuser: any;
  usertype: any;
  
  ngOnInit(): void {
    this.loggedinuser = localStorage['loggedinuser'];
    this.usertype = localStorage['usertype'];

    if(this.usertype!='Admin')
    {
      
    this.router.navigate(['home']);
    }
  }
}
