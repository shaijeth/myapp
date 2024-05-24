import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  userdata:user={
    userId: '',
    userName: '',
    mobile: '',
    userEmail: '',
    password: '',
    type: ''
  };
getdata()
{
  console.warn(this.userdata);
}
}

