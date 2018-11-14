import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private userService : UserService) { }

  ngOnInit() {
  }

  // showProfile() {
  //   this.userService.getProfile()
  //     .subscribe((data: Profile) => this.profile = { ...data });
  // }

}
