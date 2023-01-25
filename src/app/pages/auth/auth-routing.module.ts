import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { CreateMessageComponent } from './components/create-message/create-message.component';

const routes: Routes = [
  {
    path: 'create-message',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: CreateMessageComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'create-message'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
