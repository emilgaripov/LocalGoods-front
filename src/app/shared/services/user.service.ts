import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/user.interface';
import { editUserFormData } from '../types/types';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {}

  getUserById() {
    return this.http.get<IUser>(environment.webApiUrl + 'Users/' + this.userId)
      .pipe(catchError(this.errorHandler.bind(this)))
  }

  get userId() {
    return localStorage.getItem('userId')
  }

  editUser(data: editUserFormData) {
    return this.http.put<IUser>(environment.webApiUrl + 'Users/' + this.userId, data)
      .pipe(catchError(this.errorHandler.bind(this)))
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.error.errors.id)
    return throwError(() => error.error.errors.id)
  }

}
