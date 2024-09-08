import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface user {
  userId: number;
  userName: string;
  mobile: string;
  userEmail: string;
  password: string;
  type: string;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  
  message: string = '';

  userdata: user = {
    userId: 0,
    userName: '',
    mobile: '',
    userEmail: '',
    password: '',
    type: 'Guest',
  };
  /**
   *
   */
  constructor(private http: HttpClient,private router:Router) {}

  chekemail(userEmail:string){
    this.http.get("http://learn.excelonlineservices.com/api/Users/Details?useremail="+userEmail,{responseType:'text'}).subscribe(
      (response)=>{
        // console.log(response);
        if(response=='No User'){
          this.createlogin();
        }
        else{this.message="This Email is Already Exist.";}
        
      }
    );

  }

  createuser() {
    this.chekemail(this.userdata.userEmail);

  }
  createlogin(){
   
    this.http
      .post<user[]>(
        'http://learn.excelonlineservices.com/api/Users/Create',
        this.userdata
      )
      .subscribe((response) => {
        this.message = 'Login Created';
        this.userdata = {
          userId: 0,
          userName: '',
          mobile: '',
          userEmail: '',
          password: '',
          type: '',
        };
      });

    console.warn(this.userdata);
  }
 // input function for name upper case //
  onNameInput(){
    this.userdata.userName=this.userdata.userName.toUpperCase();
  }
  gotologin(){
    this.router.navigate(['/login']);
  }

}
