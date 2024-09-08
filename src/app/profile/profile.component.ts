import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IUserProfile } from '../../assets/model/iuserprofile';
import { UserprofileService } from '../userprofile.service';
import { Router } from '@angular/router';
import { ImageUploadService } from '../image-upload.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  userprofile: IUserProfile = {
    id: 0,
    userid: 0,
    fullName: '',
    fathersName: '',
    dob: new Date(),
    mobileNo: '',
    email: '',
    personalEmail: '',
    address: '',
    state: '',
    city: '',
    pincode: '',
    profilePhoto: ''

  };
  islogged: boolean = false;
  loggedinuser: any;
  usertype: any;
  message: string = "";
  selectedfiles!: FileList;
  imgURL: string = '';
  isProfileExist: boolean = false;

  constructor(private http: HttpClient, private router: Router, private userprofileservice: UserprofileService, private imageUploadService: ImageUploadService) { }
  ngOnInit(): void {
    this.islogged = localStorage['islogged'] == 'logged';
    this.loggedinuser = localStorage['userid'];
    this.usertype = localStorage['usertype'];
    this.userprofile.userid = this.loggedinuser;
    this.GetUserProfile();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.selectedfiles = event.target.files;
    if (file) {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        this.imgURL = e.target.result;
        this.userprofile.profilePhoto = file.name;

      }
      reader.readAsDataURL(file);
    }
  }

  GetUserProfile() {
    this.userprofileservice.getUserProfile(this.loggedinuser)
      .subscribe(
        (data: IUserProfile) => {
          this.userprofile = data;
          this.isProfileExist = true;
          this.imgURL = '/assets/course/' + this.userprofile.profilePhoto;
        }
      );

  }
  onNameInput() {
    this.userprofile.fullName = this.userprofile.fullName.toUpperCase();
  }

  CreateUserProfile() {
    if (this.isProfileExist) {
      this.userprofileservice.updateUserProfile(this.userprofile, this.userprofile.id)
        .subscribe(
          (data: IUserProfile) => {
            this.message = 'Profile updated';
          }
        );
    }
    else {

      this.userprofileservice.createUserProfile(this.userprofile)
        .subscribe(
          (data: IUserProfile) => {
            this.message = 'Profile created';
          }
        );
    }

  }
  upload(): void {
    const formData: FormData = new FormData;
    let newfilename = this.selectedfiles[0].name;
    formData.append('postedFiles', this.selectedfiles[0], newfilename);
    this.imageUploadService.uploadImage(formData).subscribe((data: any) => {
    },
      (error) => {
        console.log('upload error : ', error);
      })
  }

}


