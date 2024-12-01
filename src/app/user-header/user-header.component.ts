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

  }


  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  ngOnInit(): void {
    this.islogged = localStorage['islogged'] == 'logged';
    this.loggedinuser = localStorage['loggedinuser'];
    this.usertype = localStorage['usertype'];
    
  }
  isAdmin(): boolean {
    return this.usertype==="Admin";
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
   // this.sharedservice.changetext('Login/Signup');
   // this.sharedservice.changeUserType('Free');
    this.router.navigate(['/signup']);
  }
  Joinwhatsapp() {

  }
  isopen: boolean = false;
  clikevent() {
    this.isopen = !this.isopen;
  }
}