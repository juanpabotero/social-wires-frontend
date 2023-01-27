import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AllMessagesResponse,
  Message,
  MessageResponse,
  OwnMessageResponse,
} from '../interfaces/message';
import { Observable } from 'rxjs';

@Injectable()
export class MessageService {
  authorization = {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  };

  constructor(private http: HttpClient) {}

  createMessage(message: Message): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(
      'http://localhost:3000/wires/messages',
      message,
    );
  }

  getMessages(): Observable<AllMessagesResponse[]> {
    return this.http.get<AllMessagesResponse[]>(
      'http://localhost:3000/wires/messages',
    );
  }

  getOwnMessages(): Observable<OwnMessageResponse[]> {
    return this.http.get<OwnMessageResponse[]>(
      'http://localhost:3000/wires/messages/me',
    );
  }

  commentOnMessage(message_id: string, comment: string): Observable<any> {
    return this.http.patch(
      `http://localhost:3000/wires/messages/comment/${message_id}`,
      { comment },
    );
  }

  getFilterMessage(search: string): Observable<any> {
    return this.http.get<any>(
      'http://localhost:3000/wires/messages/find',
    );
  }
}
