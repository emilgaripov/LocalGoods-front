import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, catchError, Observable, Subject, switchMap, tap, throwError } from "rxjs";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";
import { IUser } from "../../shared/interfaces/user.interface";

type User = {
  firstName?: string,
  lastName?: string,
  emailAddress: string,
  userName?: string,
  password: string,
  isFarmer?: boolean
}

type Tokens = {
  expiresAt: string,
  refreshToken: string,
  token: string
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

  login(user: User): Observable<IUser> {
    return this.http.post<Tokens>(this.url + 'Authentication/login-user', user)
      .pipe(
        switchMap((res) => {
          this.setToken(res);
          return this.getUser(res.token);
        })
        // catchError(this.errorHandler.bind(this))
      )
  }

  getUser(token: string): Observable<IUser> {
    const httpOptions = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
    }

    return this.http
      .get<IUser>(this.url + 'Users/getidbysession', httpOptions)
      .pipe(tap((user) => this.setUserId(user.id)));
  }

  private setToken(res: Tokens) {
    if(res){
      localStorage.setItem('token', res.token);
    } else {
      localStorage.clear()
    }
  }

  private setUserId(userId: string) {
    localStorage.setItem('userId', userId);
  }

  isAuthenticated(): boolean {
    return !!this.token
  }


}
