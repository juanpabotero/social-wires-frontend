import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.css'],
})
export class MessageCardComponent {
  @Input() date: Date = new Date();
  @Input() message: string = 'Message...';
  @Input() title: string = 'Title';
  @Input() username: string = 'Username';
}
