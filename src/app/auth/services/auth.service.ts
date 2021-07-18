import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string= environment.baseUrl;
  private _auth: Auth | undefined;

  get showUser(){
    return {...this._auth!};
  }


  constructor(private http: HttpClient) { }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/users/1`)
      .pipe(
          tap(auth=>this._auth=auth)
      )
  }

  logout(){
    this._auth=undefined;
  }


}



