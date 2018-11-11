import { Injectable } from '@angular/core';
import { compileNgModule } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

   sendInfos(socialPlatform: string, data: any) : string {
    //This function send the infos gathered from the Google API to the PLanizi API
    console.log(socialPlatform, data);
    return 'a';
  }
}
