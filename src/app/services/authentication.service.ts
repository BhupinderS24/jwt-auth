import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 url;
  constructor(private http: HttpClient) {
    this.url=environment.authUrl;
   }


   addUsers(addUser:any) {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
  
    const addUserUrl=this.url+'/signup';
    return this.http.post(addUserUrl,addUser,{headers:headers});
  }

  login(userCred:any){
  
     const headers=new Headers();
     headers.append('Content-Type', 'application/json; charset=utf-8');
   
     headers.append('Accept', 'application/json');
    //  headers.append('Access-Control-Request-Origin','*');
    
    
    const addUserUrl=this.url+'/login';
    return fetch(addUserUrl,{
      method:'POST',
      credentials:'include',
      headers:headers,
      body:JSON.stringify(userCred)
    })
  }
}
