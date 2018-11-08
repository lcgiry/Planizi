import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { SignInComponent } from './components/sign-in/sign-in.component'

import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from "angular-6-social-login-v2";


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
=======
import { HeaderMenuComponent } from './header-menu/header-menu.component';
>>>>>>> e381c2e7ee2464f5cd5cc9ce06d3aca332e7cd32

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    SignInComponent,
=======
    HeaderMenuComponent
>>>>>>> e381c2e7ee2464f5cd5cc9ce06d3aca332e7cd32
  ],
  imports: [
    BrowserModule,
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
