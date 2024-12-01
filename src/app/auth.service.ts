import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userType: string = '';

  constructor() { }
  private loginstatus = false;
  login() {
    this.loginstatus = true;
  }

  logout() {
    this.loginstatus = false;
  }

  isloggedin(): boolean {
    if (localStorage['islogged'] == 'logged') {
      this.login();
    }
    return this.loginstatus;
  }
  setUserType(type: string): void {
    this.userType = type;
  }

  getUserType(): string {
    return this.userType;
  }
}
