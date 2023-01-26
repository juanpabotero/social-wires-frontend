import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.css']
})
export class MessageCardComponent implements OnInit {
  @Input() date: Date = new Date();
  @Input() fullname: string = 'Your name';
  @Input() message: string = 'Message...';
  @Input() title: string = 'Title';

  constructor() { }

  ngOnInit(): void {
  }

}
