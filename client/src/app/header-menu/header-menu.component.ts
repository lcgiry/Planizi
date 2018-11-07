import { Component, OnInit } from '@angular/core';
import * from '../../assets/template-assets/lib/jquery/jquery.min.js';
import * from '../../assets/template-assets/lib/jquery.nanoscroller/javascripts/jquery.nanoscroller.min.js';
import * from '../../assets/template-assets/js/main.js';
import * from '../../assets/template-assets/lib/bootstrap/dist/js/bootstrap.min.js';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css', '../../assets/template-assets/lib/stroke-7/style.css', '../../assets/template-assets/lib/jquery.nanoscroller/css/nanoscroller.css', '../../assets/template-assets/css/style.css']
})
export class HeaderMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
