import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, AfterViewInit {
  registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    fullname: ['', [Validators.required]],
    password: ['', [Validators.required]],
    username: ['', [Validators.required]],
  });
  errors: string[] = [];
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
    console.log(this.registerForm.value);
    this.authService.registerUser(this.registerForm.value).subscribe(
      (res) => {
        console.log(res);
        this.registerForm.reset();
        this.router.navigate(['/login']);
      },
      (err) => {
        this.errors = err.error.message;
        console.log(this.errors);
        this.modal.classList.toggle('d-none');
      }
    );
  }

  toggleModal() {
    this.modal.classList.toggle('d-none');
  }
}
