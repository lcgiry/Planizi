import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser} from "angularx-social-login";
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../../../assets/template-assets/lib/stroke-7/style.css', '../../../assets/template-assets/lib/jquery.nanoscroller/css/nanoscroller.css', '../../../assets/template-assets/css/style.css']
})
export class SignInComponent implements OnInit {

  private user: SocialUser;
  private connected: boolean = false; 

  constructor( private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log( 'test',user);
      
    });
  }

  signInWithGoogle(): void {
    if (this.user == null){
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
        (user) => {
          console.log(this.user);
          this.router.navigate(['/header']);
        });
      this.connected = true;
    }
    else {
      console.log('The user was already logged',this.user);
      this.router.navigate(['/header']);
    }
  }


  signOut(): void {
    this.authService.signOut();
    this.connected = false;

  }

}
