import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

private headerbtntext=new BehaviorSubject<string>('Login');
headerbtntext$=this.headerbtntext.asObservable();
changetext(newtext:string){
  this.headerbtntext.next(newtext);
  
}

}
