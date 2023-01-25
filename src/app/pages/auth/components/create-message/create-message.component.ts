import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css']
})
export class CreateMessageComponent implements OnInit {

  formMessages: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formMessages.value);
  }

}
