import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angular-6-social-login-v2';
import { AuthenticationService } from '../../services/authentication.service'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../../../assets/template-assets/lib/stroke-7/style.css', '../../../assets/template-assets/lib/jquery.nanoscroller/css/nanoscroller.css', '../../../assets/template-assets/css/style.css']
})
export class SignInComponent implements OnInit {

  constructor( private socialAuthService: AuthService, private authenticationService : AuthenticationService ) {}

  ngOnInit() {
  }

  public socialSignIn(socialPlatform : string) {
    console.log('signin component socialSignIn');
    
    let socialPlatformProvider;
     if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else {
      console.log("There's a problem with the Google OAuth service.");
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        // ...
        this.authenticationService.sendInfos(socialPlatform, userData)
            
      }
    );

    
  }

}
