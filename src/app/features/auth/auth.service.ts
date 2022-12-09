import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, catchError, Observable, Subject, tap, throwError } from "rxjs";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";

type User = {
  firstName?: string,
  lastName?: string,
  emailAddress: string,
  userName?: string,
  password: string,
  isFarmer?: boolean
}


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  url = environment.webApiUrl;
  user!: User;


  constructor(
    private http: HttpClient,
  ) { }

  get token() {
    return localStorage.getItem('token')
  }

  createUser(user: User): Observable<User>{
    return this.http.post<User>(this.url + 'Authentication/register-user', user)
      .pipe(
        tap((res)=>console.log(res)),
        // catchError(this.errorHandler.bind(this))
      )
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(this.url + 'Authentication/login-user', user)
      .pipe(
        tap((res) => {
          this.setToken(res)
          console.log(res);
          
        }),
        // catchError(this.errorHandler.bind(this))
      )
  }

  private setToken(res: any) { 
    if(res){
      localStorage.setItem('token', res.token)
    } else {
      localStorage.clear()
    }
  }

  isAuthenticated(): boolean {
    return !!this.token
  }


}