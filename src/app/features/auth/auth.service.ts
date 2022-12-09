import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, switchMap, tap } from "rxjs";
import { environment } from "../../../environments/environment";
import { IUser } from "../../shared/interfaces/user.interface";
import { JWT, LoginFormData, RegistrationFormData } from "../../shared/types/types";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.webApiUrl;

  constructor(private http: HttpClient) {}

  get token() {
    return localStorage.getItem('token');
  }

  createUser(user: RegistrationFormData): Observable<unknown> {
    return this.http.post(this.url + 'Authentication/register-user', user);
  }

  login(user: LoginFormData): Observable<IUser> {
    return this.http.post<JWT>(this.url + 'Authentication/login-user', user).pipe(
      switchMap((jwt) => {
        this.setToken(jwt);
        return this.getUser(jwt.token);
      })
    );
  }

  getUser(token: string): Observable<IUser> {
    const httpOptions = {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
    };
    return this.http
      .get<IUser>(this.url + 'Users/getidbysession', httpOptions)
      .pipe(tap((user) => this.setUserId(user.id)));
  }

  private setToken(res: JWT) {
    localStorage.setItem('token', res.token);
  }

  private setUserId(userId: string) {
    localStorage.setItem('userId', userId);
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

}
