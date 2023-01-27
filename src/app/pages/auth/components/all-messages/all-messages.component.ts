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
  username = sessionStorage.getItem('username');

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getMessages().subscribe((res) => {
      this.messages = res;
    });
  }

  canComment(username: string): boolean {
    return username !== this.username;
  }

  search(event: any) {
    if (event.keyCode === 13) {
      const searchTerm = (document.querySelector('#search') as HTMLInputElement)
        .value;
      this.messageService.getFilterMessage(searchTerm).subscribe((res) => {
        console.log(res);
      });
    }
  }
}
