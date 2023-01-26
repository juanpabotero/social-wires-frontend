import { Component, OnInit } from '@angular/core';
import { OwnMessageResponse } from 'src/app/interfaces/message';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.css'],
})
export class MyMessagesComponent implements OnInit {
  messages: OwnMessageResponse[] = [];
  username: string = sessionStorage.getItem('username') || 'Username';

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getOwnMessages().subscribe((res) => {
      this.messages = res;
    });
  }
}
