import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import { environment }  from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../classes/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = environment.API_URL;
  private user = {};

  constructor(private http: HttpClient) { }

  get_profile(profileId: string): Promise<User>{
    //profileId is an email address
    // this.http.get(this.API_URL + '/user/user/' + profileId).subscribe((res)=>{
    //     console.log(res);
    //     this.user = res;
    // });
    return this.http.get(this.API_URL + '/user/user/' + profileId).toPromise()
      .then(function(res){
        console.log(res)
        return res
      }).catch(function(err){
        return err
      })
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
