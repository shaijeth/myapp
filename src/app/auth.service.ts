import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private loginstatus=false;
  login(){
    this.loginstatus=true;
  }

  logout(){
    this.loginstatus=false;
  }

  isloggedin():boolean{
    if(sessionStorage.getItem('islogged') == 'logged'){
      this.login();
    }
    return this.loginstatus;
  }

}
