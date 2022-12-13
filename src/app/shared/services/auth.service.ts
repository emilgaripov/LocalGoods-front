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
  ) {}

  get token() {
    return localStorage.getItem('token');
  }

  createUser(user: RegistrationFormData): Observable<unknown> {
    return this.http.post(this.url + 'Authentication/register-user', user)
      .pipe(catchError(this.errorHandler.bind(this)))
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
    localStorage.clear();
    this.user$.next(null);
  }

  autoLogin() {
    this.user$.next(this.getUser());
  }

  private getAuthorizedUser(): Observable<IUser> {
    return this.http
      .get<IUser>(this.url + 'Users/getidbysession')
      .pipe(
        tap((user) => this.setUser(user)),
        catchError(this.errorHandler.bind(this))
      );
  }

  private setToken(res: JWT) {
    localStorage.setItem('token', res.token);
  }

  private setUser(user: IUser) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  private getUser(): IUser | null {
    const user = localStorage.getItem('user');
    if (!user) return null;
    return JSON.parse(user);
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.error.errors.id)
    return throwError(() => error.error.errors.id)
  }

}
