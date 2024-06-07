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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
message:string='';

userdata: user = {
  userId: 0,
  userName: '',
  mobile: '',
  userEmail: '',
  password: '',
  type: 'Guest',}


 constructor(private http: HttpClient,private router:Router) {}


 userLogin(){
  this.checkLogin(this.userdata.userEmail,this.userdata.password);
 }
 checkLogin(userEmail:string, pswd:string){
   this.http.get("http://learn.excelonlineservices.com/api/Users/CheckLogin?useremail="+userEmail +"&pswd="+pswd,{responseType:'text'}).subscribe(
     (response)=>{
       console.log(response);
     this.router.navigate(['/course']);
       
     },
     (error)=>{console.log(error)
      this.message="Incorrect Id or password"
     }
   );
 }
}

