import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, catchError, Observable, switchMap, tap, throwError } from "rxjs";
import { environment } from "../../../environments/environment";
import { IUser } from "../interfaces/user.interface";
import { JWT, LoginFormData, RegistrationFormData } from "../types/types";
import { ErrorService } from 'src/app/shared/services/error.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ = new BehaviorSubject<IUser | null>(null);
  url = environment.webApiUrl;

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }

  get token() {
    return localStorage.getItem('token');
  }

  createUser(user: RegistrationFormData): Observable<unknown> {
    return this.http.post(this.url + 'Authentication/register-user', user)
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  login(user: LoginFormData): Observable<IUser> {
    return this.http.post<JWT>(this.url + 'Authentication/login-user', user).pipe(
      switchMap((jwt) => {
        this.setToken(jwt);
        return this.getAuthorizedUser();
      }),
      catchError(this.errorHandler.bind(this))
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
      .pipe(
        tap((user) => this.setUserId(user.id)),
        catchError(this.errorHandler.bind(this))
      );
  }

  private setToken(res: JWT) {
    localStorage.setItem('token', res.token);
  }

  private setUserId(userId: string) {
    localStorage.setItem('userId', userId);
  }
  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.error.errors.id)
    return throwError(() => error.error.errors.id)
  }

}
