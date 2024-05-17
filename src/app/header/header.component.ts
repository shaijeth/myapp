import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

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

isopen:boolean=false; 
clikevent(){
  this.isopen=!this.isopen;
}

}
