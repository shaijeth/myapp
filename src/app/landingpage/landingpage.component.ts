import { Component } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {

}
document.addEventListener('DOMContentLoaded', () => {
  const whatsappButton = document.getElementById('whatsapp-join') as HTMLButtonElement;
  const registerButton = document.getElementById('register-now') as HTMLButtonElement;

  whatsappButton.addEventListener('click', () => {
      window.open('https://wa.me/YOUR_WHATSAPP_NUMBER', '_blank');
  });

  registerButton.addEventListener('click', () => {
      window.location.href = 'https://www.yourwebsite.com/register';
  });
});

