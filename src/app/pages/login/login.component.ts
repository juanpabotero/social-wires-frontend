import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  loginForm: FormGroup = this.fb.group({
    password: ['', [Validators.required]],
    username: ['', [Validators.required]],
  });
  error: string = '';
  modal: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.modal = document.querySelector('.modal-error');
  }

  SubmitForm() {
    console.log(this.loginForm.value);
    this.authService.loginUser(this.loginForm.value).subscribe(
      (res) => {
        console.log(res);
        this.loginForm.reset();
        sessionStorage.setItem('token', res.access_token);
        this.router.navigate(['/auth/create-message']);
      },
      (err) => {
        this.error = err.error.message;
        console.warn(err);
        this.loginForm.reset();
        this.modal.classList.toggle('d-none');
      }
    );
  }

  toggleModal() {
    this.modal.classList.toggle('d-none');
  }
}
