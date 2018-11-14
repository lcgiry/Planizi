import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component'

import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from "angular-6-social-login-v2";
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


// Config for social login
export function getAuthServiceConfigs() {
  console.log('app.module getAuthConfig');

  let config = new AuthServiceConfig(
      [
        {          
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("89383129382-ag1sm52nl8v5th5ee9e1valij6arencj.apps.googleusercontent.com")
        }
      ]
  );
  console.log('done');

  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HeaderMenuComponent,
    UserProfileComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SocialLoginModule,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
