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
    // this.user = {createdAt: '',
    //   updatedAt: '',
    //   user_birthdate: '',
    //   user_cv_file: '',
    //   user_description: '',
    //   user_driver_licence_file: '',
    //   user_experience: '',
    //   user_gender: '',
    //   user_happiness_point: 0,
    //   user_identity_card_file: '',
    //   user_incapacity: '',
    //   user_involvement_point: 0,
    //   user_last_login: '',
    //   user_mail: '',
    //   user_name: '',
    //   user_nickname: '',
    //   user_phone: '',
    //   user_rights: '',
    //   user_role: '',
    //   user_social_security_card_file: '',
    //   user_social_security_card_number: '',
    //   user_surname: '',
    //   user_teeshirt_size: '',
    //   user_trust_point: 0}
    this.user = new User
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
