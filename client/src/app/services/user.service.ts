import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // getProfile() (profileId: string): Observable<Profile[]> {
  //   let myHeaders = new Headers();
  //   myHeaders.append('Content-Type', 'application/json');    
  //   let myParams = new URLSearchParams();
  //   myParams.append('id', profileId);	
  //   let options = new RequestOptions({ headers: myHeaders, params: myParams });
  //   return this.http.get(this.url, options)
  // .map(this.extractData)
  // .catch(this.handleError);
  // } 

}
