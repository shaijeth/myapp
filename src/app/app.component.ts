import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
  islogged: boolean = false;
  loggedinuser: any;

  constructor(private router: Router,private sharedservice:SharedService ) {
    
  }


  ngOnInit(): void {
    this.islogged = localStorage['islogged'] == 'logged';
    this.loggedinuser = localStorage['loggedinuser'];
    
  }
  
}

