import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.css'
})
export class UserHeaderComponent implements OnInit, OnDestroy{
  islogged: boolean = false;
  menuActive: boolean = true;
  buttontext:string="";
  loggedinuser: any;
  usertype:any='';
  subscription!: Subscription;
  
  constructor(private router: Router,private sharedService:SharedService ) {
    this.sharedService.headerbtntext$.subscribe((text) => {
      this.buttontext = text;
     // this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe to prevent memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  ngOnInit(): void {
    this.subscription = this.sharedService.headerbtntext$.subscribe((text) => {
      this.buttontext = text;
      // Optionally detect changes if needed
      // this.cdr.detectChanges();
    });
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
