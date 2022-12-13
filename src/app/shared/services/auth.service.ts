import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, switchMap, tap } from "rxjs";
import { environment } from "../../../environments/environment";
import { IUser } from "../interfaces/user.interface";
import { JWT, LoginFormData, RegistrationFormData } from "../types/types";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ = new BehaviorSubject<IUser | null>(null);
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
        return this.getAuthorizedUser();
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.user$.next(null);
  }

  autoLogin() {
    if (!this.token) return this.user$.next(null);

    this.getAuthorizedUser().subscribe({
      next: (user) => this.user$.next(user)
    });
  }

  private getAuthorizedUser(): Observable<IUser> {
    return this.http
      .get<IUser>(this.url + 'Users/getidbysession')
      .pipe(tap((user) => this.setUserId(user.id)));
  }

  private setToken(res: JWT) {
    localStorage.setItem('token', res.token);
  }

  private setUserId(userId: string) {
    localStorage.setItem('userId', userId);
  }

}
