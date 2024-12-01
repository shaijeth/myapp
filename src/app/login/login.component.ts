import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { AuthService } from '../auth.service';

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
    private sharedservice: SharedService,
    private authService: AuthService

  ) { }

  userLogin() {
    this.checkLogin(this.userdata.userEmail, this.userdata.password);

  }
  checkLogin(userEmail: string, pswd: string) {
    let DevApiUrl: string = "http://localhost/";
    let ProdApiUrl: string = "http://learn.excelonlineservices.com/";
    this.http
      .get<user>(
        ProdApiUrl + 'api/Users/CheckLogin?useremail=' +
        userEmail +
        '&pswd=' +
        pswd
      )
      .subscribe(
        (response: any) => {


          localStorage.setItem('islogged', 'logged');
          localStorage.setItem('loggedinuser', response.name);
          localStorage.setItem('usertype', response.userType);
          localStorage.setItem('token', response.token);
          localStorage.setItem('userid', response.userID);


          //this.sharedservice.changetext('Logout');
          this.sharedservice.changeUserType(response.userType);
        
          if (response.userType == "Admin") {
            this.router.navigate(['/adminpanel']);
          }
          else if (response.userType == "Guest") {
            this.router.navigate(['/course']);
          } else if (response.userType == "Paid") {
            this.router.navigate(['/course']);
          }

        },
        (error) => {
          console.log(error);
          this.message = 'Incorrect Id or password';
        }
      );
  }
}

