import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser} from "angularx-social-login";
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: []
})
export class SignInComponent implements OnInit {

  private user: SocialUser;
  private connected: boolean = false;

  constructor( private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  signInWithGoogle(): void {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
        (user) => {
          console.log(this.user);
          this.router.navigate(['/userprofile']);
        });
      this.connected = true;
  }


  signOut(): void {
    this.authService.signOut();
    this.connected = false;
  }

}
