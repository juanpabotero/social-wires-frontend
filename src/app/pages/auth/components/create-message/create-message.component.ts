import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css'],
})
export class CreateMessageComponent implements OnInit {
  formMessages: FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    text: ['', [Validators.required]],
  });
  title: string = 'Title';
  message: string = 'Message...';

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.formMessages.value);
    this.messageService
      .createMessage(this.formMessages.value)
      .subscribe((res) => {
        console.log(res);
        this.formMessages.reset();
      });
  }

  onKeyUpTitle(event: any) {
    this.title = event.target.value;
  }

  onKeyUpmessage(event: any) {
    this.message = event.target.value;
  }
}
