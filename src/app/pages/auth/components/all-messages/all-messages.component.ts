import { Component, OnInit } from '@angular/core';
import { AllMessagesResponse } from 'src/app/interfaces/message';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-all-messages',
  templateUrl: './all-messages.component.html',
  styleUrls: ['./all-messages.component.css'],
})
export class AllMessagesComponent implements OnInit {
  messages: AllMessagesResponse[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getMessages().subscribe((res) => {
      this.messages = res;
    });
  }
}
