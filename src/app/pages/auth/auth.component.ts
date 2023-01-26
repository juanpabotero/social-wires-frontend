import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

  displayMenu() {
    const menu = document.querySelector('.menu');
    menu?.classList.toggle('d-none');
  }

  logout() {
    const menu = document.querySelector('.menu');
    menu?.classList.toggle('d-none');
    sessionStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
