import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserProfile } from '../assets/model/iuserprofile';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {
  private userprofilecreate: string = '/api/UserProfile/Create';
  private userprofiledetail: string = '/api/UserProfile/UserProfileDetails';
  private userprofileupdate: string = '/api/UserProfile/Edit';
  private DevApiUrl: string = "http://localhost/";
  private ProdApiUrl: string = "http://learn.excelonlineservices.com";
  
    constructor(private http: HttpClient) {}

    getUserProfile(userid:number): Observable<IUserProfile> {
      let courselist = this.http.get<IUserProfile>(this.ProdApiUrl+this.userprofiledetail+'?userid='+userid);
     
      return courselist.pipe(catchError((error) => of<IUserProfile>()));
    }
    createUserProfile(userprofile:IUserProfile): Observable<IUserProfile> {
      let courselist = this.http.post<IUserProfile>(this.ProdApiUrl+this.userprofilecreate,userprofile);
      return courselist.pipe(catchError((error) => of<IUserProfile>()));
    }
    updateUserProfile(userprofile:IUserProfile,id:number): Observable<IUserProfile> {
    
      let courselist = this.http.post<IUserProfile>(this.ProdApiUrl+this.userprofileupdate+'?id='+id,userprofile);
      return courselist.pipe(catchError((error) => of<IUserProfile>()));
    }
}
