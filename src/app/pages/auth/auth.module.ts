import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';
import { CreateMessageComponent } from './components/create-message/create-message.component';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MyMessagesComponent } from './components/my-messages/my-messages.component';
import { MessageCardComponent } from './components/message-card/message-card.component';
import { AllMessagesComponent } from './components/all-messages/all-messages.component';
import { CommentsComponent } from './components/comments/comments.component';
import { MessageService } from 'src/app/services/message.service';
import { AuthInterceptorService } from 'src/app/helpers/interceptors/auth-interceptor.service';

@NgModule({
  declarations: [
    CreateMessageComponent,
    AuthComponent,
    MyMessagesComponent,
    MessageCardComponent,
    AllMessagesComponent,
    CommentsComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
})
export class AuthModule {}
