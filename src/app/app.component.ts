import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'social-wires-frontend';
  user = {
    email: 'juan@gmail.com',
    fullname: 'juanpa',
    password: '1234',
    username: 'juan',
  };

  constructor(private http: HttpClient) {
    // this.postData();
  }

  postData() {
    this.http
      .post('http://localhost:3000/wires/auth/signup', this.user)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
