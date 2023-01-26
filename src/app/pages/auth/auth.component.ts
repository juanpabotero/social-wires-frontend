import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  username: string = sessionStorage.getItem('username') || 'Username';

  constructor(private router: Router) {}

  displayMenu() {
    const menu = document.querySelector('.menu');
    menu?.classList.toggle('d-none');
  }

  logout() {
    const menu = document.querySelector('.menu');
    menu?.classList.toggle('d-none');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    this.router.navigate(['/']);
  }
}
