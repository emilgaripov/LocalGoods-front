import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/user.interface';
import { editUserFormData } from '../types/types';
import { ErrorService } from './error.service';
import { SuccessService } from './success.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
    private successService: SuccessService
  ) {}

  getUserById() {
    return this.http.get<IUser>(environment.webApiUrl + 'Users/' + this.userId)
      .pipe(catchError(this.errorHandler.bind(this)))
  }

  get userId() {
    return localStorage.getItem('userId')
  }

  editUser(data: editUserFormData) {
    console.log(data);
    
    return this.http.put<IUser>(environment.webApiUrl + 'Users/' + this.userId, data)
      .pipe(
        tap(()=> this.successService.handle('User updated successfully')),
        catchError(this.errorHandler.bind(this))
        )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.error.errors.id)
    return throwError(() => error.error.errors.id)
  }

}
