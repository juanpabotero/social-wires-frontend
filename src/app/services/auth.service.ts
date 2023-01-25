import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginUser, loginUserResponse, RegisterUser, RegisterUserResponse } from '../interfaces/register-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}

  registerUser(user: RegisterUser): Observable<RegisterUserResponse> {
    return this.http.post<RegisterUserResponse>('http://localhost:3000/wires/auth/signup', user);
  }

  loginUser(user: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/wires/auth/signin', user);
  }
}
