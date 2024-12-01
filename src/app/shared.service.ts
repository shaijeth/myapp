import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private headerbtntext = new BehaviorSubject<string>('Login / Signup');
  private usertypetext = new BehaviorSubject<string>('Free');

  headerbtntext$ = this.headerbtntext.asObservable();
  usertypetext$ = this.usertypetext.asObservable();

  changetext(newtext: string) {
    this.headerbtntext.next(newtext);
  }
  changeUserType(usertext: string) {
    this.usertypetext.next(usertext);
  }
}
