import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['../../../assets/template-assets/lib/stroke-7/style.css', '../../../assets/template-assets/lib/jquery.nanoscroller/css/nanoscroller.css', '../../../assets/template-assets/css/style.css']
})
export class UserProfileComponent implements OnInit {
  promiseUser: Promise<User>
  user: User;
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.user = {}
    this.promiseUser = this.userService.get_profile('0604fabien@gmail.com')
    this.promiseUser.then(
      user => 
        {
          this.user = user
        }
    )
  }

  // showProfile() {
  //   this.userService.getProfile()
  //     .subscribe((data: Profile) => this.profile = { ...data });
  // }

}
