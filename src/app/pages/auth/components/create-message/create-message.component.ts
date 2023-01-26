import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css'],
})
export class CreateMessageComponent implements AfterViewInit {
  formMessages: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    text: [
      '',
      [Validators.required, Validators.pattern('[a-zA-Z0-9 ]{1,700}')],
    ],
  });
  title: string = 'Title';
  message: string = 'Message...';
  username: string = sessionStorage.getItem('username') || 'Username';
  errorSpan: any;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  ngAfterViewInit(): void {
    this.errorSpan = document.querySelector('.error');
  }

  onSubmit() {
    this.messageService
      .createMessage(this.formMessages.value)
      .subscribe((res) => {
        this.formMessages.reset();
      });
  }

  onKeyUpTitle(event: any) {
    this.title = event.target.value;
  }

  onKeyUpmessage(event: any) {
    this.message = event.target.value;
    if (this.formMessages.get('text')?.errors?.['pattern']) {
      this.errorSpan.classList.remove('d-none');
      return;
    }
    this.errorSpan.classList.add('d-none');
  }
}
