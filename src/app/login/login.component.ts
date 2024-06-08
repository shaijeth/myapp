import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

interface user {
  userId: number;
  userName: string;
  mobile: string;
  userEmail: string;
  password: string;
  type: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  message: string = '';

  userdata: user = {
    userId: 0,
    userName: '',
    mobile: '',
    userEmail: '',
    password: '',
    type: 'Guest',
  };

  constructor(private http: HttpClient, private router: Router,private sharedservice:SharedService ) {}

  userLogin() {
    this.checkLogin(this.userdata.userEmail, this.userdata.password);
  }
  checkLogin(userEmail: string, pswd: string) {
    this.http
      .get <user>(
        'http://learn.excelonlineservices.com/api/Users/CheckLogin?useremail=' +
          userEmail +
          '&pswd=' +
          pswd
      )
      .subscribe(
        (response:user) => {
          console.log(response) ;
          sessionStorage.setItem("islogged", "logged");
          sessionStorage.setItem("loggedinuser",response.userName);
          this.sharedservice.changetext("Logout");
          this.router.navigate(['/course']);
        },
        (error) => {
          console.log(error);
          this.message = 'Incorrect Id or password';
        }
      );
  }
}
