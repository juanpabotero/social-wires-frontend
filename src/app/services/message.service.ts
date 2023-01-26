import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllMessagesResponse, Message, MessageResponse, OwnMessageResponse } from '../interfaces/message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private http: HttpClient) {}

  createMessage(message: Message): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(
      'http://localhost:3000/wires/messages',
      message,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      }
    );
  }

  getMessages(): Observable<AllMessagesResponse[]> {
    return this.http.get<AllMessagesResponse[]>(
      'http://localhost:3000/wires/messages',
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      }
    );
  }

  getOwnMessages(): Observable<OwnMessageResponse[]> {
    return this.http.get<OwnMessageResponse[]>(
      'http://localhost:3000/wires/messages/me',
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      }
    );
  }
}
