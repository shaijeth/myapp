import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.css'
})
export class UserHeaderComponent {
  islogged: boolean = false;
  menuActive: boolean = true;
  buttontext:string="";
  loggedinuser: any;
  usertype:any='';
  /**
   *
   */
  constructor(private router: Router,private sharedservice:SharedService ) {
    this.sharedservice.headerbtntext$.subscribe((newtext:string)=>{
      this.buttontext=newtext;
    });
  }


  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  ngOnInit(): void {
    this.islogged = localStorage['islogged'] == 'logged';
    this.loggedinuser = localStorage['loggedinuser'];
    this.usertype = localStorage['usertype'];
  }

  login() {
    this.router.navigate(['/signup']);
  }
  logout() {
    localStorage.removeItem('islogged');
    localStorage.removeItem('loggedinuser');
    localStorage.removeItem('token');
    localStorage.removeItem('usertype');
    this.islogged = false;
    this.router.navigate(['/signup']);
  }
  Joinwhatsapp() {

  }
  isopen: boolean = false;
  clikevent() {
    this.isopen = !this.isopen;
  }
}
