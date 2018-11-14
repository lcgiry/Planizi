import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['../../../assets/template-assets/lib/stroke-7/style.css', '../../../assets/template-assets/lib/jquery.nanoscroller/css/nanoscroller.css', '../../../assets/template-assets/css/style.css']
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
