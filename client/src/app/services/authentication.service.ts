import { Injectable } from '@angular/core';
// import { compileNgModule } from '@angular/compiler';
import { HttpClient, } from '@angular/common/http';
import { Headers, URLSearchParams, RequestOptions} from '@angular/http';
import { environment }  from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  API_URL = environment.API_URL;



  constructor( private http: HttpClient) {}

   sendInfosToServer(user : any) : string {
    //This function sends the connection infos received by Google API
    
    // let myHeaders = new Headers({'Content-Type': 'application/json'}); 
    // let myParams = new URLSearchParams(); //append(param: string, val: string)
    // myParams.set('user_mail', user.email)
    // let options = new RequestOptions({ headers: myHeaders, params: myParams }); 
    // let url = this.API_URL + 'user'
    // return this.http.get(url, options)
    // .map(this.extractData)
	  // .catch(this.handleError);
    return 'a';
  }
}
