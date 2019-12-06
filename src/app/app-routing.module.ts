import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from 'src/app/chat/chat.component';
import { LoginComponent } from 'src/app/login/login.component';


const Approutes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  { path: 'thelogin', component: LoginComponent},
  { path: 'login', component: ChatComponent},
  { path: 'categories/:id', component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
