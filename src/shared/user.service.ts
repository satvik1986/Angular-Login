import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class UserService {

  constructor(private _http:HttpClient) { }

  register(body:any){
    debugger;
    return this._http.post('http://localhost:3000/api/users/',body,{
      observe:'body',headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

  login(body:any){
    return this._http.post('http://localhost:3000/api/authenticate/',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }
}
