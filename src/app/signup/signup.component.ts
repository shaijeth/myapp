import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Guid} from 'guid-typescript';
//[{"userId":"1e29f8ce-9343-46d9-b7f1-a5b590be4e26","userName":"Diensh Verma","userEmail":"dinesh@gmail.com","password":"123","type":"Level1"},

interface user{
  userId:string;
  userName:string;
  mobile:string;
  userEmail:string;
  password:string;
  type:string;

}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  //http://learn.excelonlineservices.com/api/users/getusers
message:string='';

  userdata:user={
    userId: '',
    userName: '',
    mobile: '',
    userEmail: '',
    password: '',
    type: ''
  };
/**
 *
 */
constructor(private http:HttpClient) {

  
}

createuser()
{
  let id= Guid.create();
  this.userdata.userId=id.toString();
this.http.post<user[]>("http://learn.excelonlineservices.com/api/Users/Create",this.userdata).subscribe(
  (response)=>{
    this.message="Login Created "+id.toString(); 
    this.userdata={
      userId: '',
      userName: '',
      mobile: '',
      userEmail: '',
      password: '',
      type: ''
    };
  }
);

  console.warn(this.userdata);
}
}

