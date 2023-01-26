import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AllMessagesComponent } from './components/all-messages/all-messages.component';
import { CreateMessageComponent } from './components/create-message/create-message.component';
import { MyMessagesComponent } from './components/my-messages/my-messages.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'create-message',
        component: CreateMessageComponent,
      },
      {
        path: 'my-messages',
        component: MyMessagesComponent,
      },
      {
        path: 'all-messages',
        component: AllMessagesComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'create-message',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
