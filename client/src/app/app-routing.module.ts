import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SignInComponent} from './components/sign-in/sign-in.component';
import {HeaderMenuComponent} from './components/header-menu/header-menu.component';
const appRoutes: Routes = [
  { path: '', component: SignInComponent}, //The default route
  { path: 'signIn', component: SignInComponent },
  { path: 'header', component: HeaderMenuComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
