import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component'

//Social Login
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, LoginOpt } from "angularx-social-login";


// Config for social login
export function getAuthServiceConfigs() {
  const googleLoginOptions: LoginOpt = {
    ux_mode: 'popup',
    scope: 'profile email'
  }; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig
   
  let config = new AuthServiceConfig(
      [
        {          
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("89383129382-ag1sm52nl8v5th5ee9e1valij6arencj.apps.googleusercontent.com", googleLoginOptions)
        }
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HeaderMenuComponent,
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
