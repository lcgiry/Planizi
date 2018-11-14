import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private userService : UserService) { }

  ngOnInit() {
    console.log('Get Profile initiated');
    
    this.userService.get_profile('lc.giry@gmail.com')
  }

  // showProfile() {
  //   this.userService.getProfile()
  //     .subscribe((data: Profile) => this.profile = { ...data });
  // }

}
