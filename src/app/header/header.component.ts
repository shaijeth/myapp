import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  islogged: boolean = false;
  buttontext:string="";
  /**
   *
   */
  constructor(private router: Router,private sharedservice:SharedService ) {
    this.sharedservice.headerbtntext$.subscribe((newtext:string)=>{
      this.buttontext=newtext;
    });
  }


  ngOnInit(): void {
    this.islogged = sessionStorage.getItem('islogged') == 'logged';
  }

  login() {
    this.router.navigate(['/login']);
  }
  logout() {
    sessionStorage.setItem('islogged', 'loggedoff');
    sessionStorage.setItem('loggedinuser', '');
    this.islogged = false;
    this.router.navigate(['/login']);
  }
  Joinwhatsapp() {

  }

  //   <script>
  //   const toggleBtn = document.querySelector('.toggle_btn')
  //   const toggleBtnIcon = document.querySelector('.toggle_btn i')
  //   const dropDownMenu = document.querySelector('.dropdown_menu')
  //   toggleBtn.onclick= function(){
  //       dropDownMenu.classList.toggle('open')
  //       const isopen= dropDownMenu.classList.contains('open')
  //       toggleBtnIcon.classList = isopen ? 'fa fa-close' :'fa fa-bars'
  //   }
  // </script>

  isopen: boolean = false;
  clikevent() {
    this.isopen = !this.isopen;
  }
}
