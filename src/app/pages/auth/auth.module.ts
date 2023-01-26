import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { CreateMessageComponent } from './components/create-message/create-message.component';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MyMessagesComponent } from './components/my-messages/my-messages.component';
import { MessageCardComponent } from './components/message-card/message-card.component';
import { AllMessagesComponent } from './components/all-messages/all-messages.component';

@NgModule({
  declarations: [
    CreateMessageComponent,
    AuthComponent,
    MyMessagesComponent,
    MessageCardComponent,
    AllMessagesComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, FormsModule],
})
export class AuthModule {}
