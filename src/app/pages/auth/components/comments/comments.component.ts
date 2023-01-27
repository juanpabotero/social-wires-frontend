import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent {
  @Input() disabled = true;
  @Input() messageId: string = '';
  @ViewChild('commentsForm') commentsForm!: NgForm;
  @Input() comment = '';

  constructor(private messageService: MessageService) {}

  submitForm() {
    const value = this.commentsForm?.controls['comment']?.value;
    this.messageService.commentOnMessage(this.messageId, value);
    this.commentsForm.resetForm();
  }
}
