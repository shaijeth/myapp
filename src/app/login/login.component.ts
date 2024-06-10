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

  constructor(
    private http: HttpClient,
    private router: Router,
    private sharedservice: SharedService
  ) { }

  userLogin() {
    this.checkLogin(this.userdata.userEmail, this.userdata.password);
  }
  checkLogin(userEmail: string, pswd: string) {
    let DevApiUrl:string ="http://localhost/";
    let ProdApiUrl:string ="http://learn.excelonlineservices.com/";
    this.http
      .get<user>(
        DevApiUrl+'api/Users/CheckLogin?useremail=' +
        userEmail +
        '&pswd=' +
        pswd
      )
      .subscribe(
        (response: any) => {
          console.log(response);
          localStorage.setItem('islogged', 'logged');
          localStorage.setItem('loggedinuser', response.name);
          localStorage.setItem('token', response.token);
          this.sharedservice.changetext('Logout');
          this.router.navigate(['/course']);
        },
        (error) => {
          console.log(error);
          this.message = 'Incorrect Id or password';
        }
      );
  }
}
