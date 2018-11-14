import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import { environment }  from '../../environments/environment';
import { Observable } from 'rxjs';
import { Profile } from '../classes/profile';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  get_profile(profileId: string){
    //profileId is an email address
    this.http.get(this.API_URL + '/user/user/' + profileId).subscribe((res)=>{
        console.log(res);
    });
}
  //  getProfile (profileId: string): Observable<Profile[]> {
  //    let url = this.API_URL + profileId;
  //    let myHeaders = new Headers();
  //    myHeaders.append('Content-Type', 'application/json');    
  //    let myParams = new URLSearchParams();
  //    myParams.append('id', profileId);	
  //    //let options = new RequestOptions({ headers: myHeaders, params: myParams });
  //    return this.http.get(url)//, options)
  //       .map(this.extractData)
  //       .catch(this.handleError);
  //  } 

}
