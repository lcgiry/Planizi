import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {TaskEditionComponent} from "./components/task-edition/task-edition.component";

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  { path: 'userprofile', component: UserProfileComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'task-edit', component: TaskEditionComponent },
  { path: 'register', component: RegisterComponent, data: {title: 'Register Page'} },
  { path: 'login', component: LoginComponent, data: {title: 'Login Page'} },
  { path: '', redirectTo: '/404', pathMatch: 'full' },
  { path: '404', component: P404Component, data: {title: 'Page 404'} },
  { path: '500', component: P500Component, data: {title: 'Page 500'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
