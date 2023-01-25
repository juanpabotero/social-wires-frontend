import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

  displayMenu() {
    const menu = document.querySelector('.menu');
    menu?.classList.toggle('d-none');
  }

}
