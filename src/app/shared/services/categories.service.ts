import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ICategory } from "../interfaces/category.interface";
import { environment } from "../../../environments/environment";
import { catchError, throwError } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private allCategories: ICategory[] = [];

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {
    this.getAllCategories();
  }

  get categories() {
    return [...this.allCategories];
  }

  private getAllCategories() {
    this.http.get<ICategory[]>(environment.webApiUrl + 'Categories')
      .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe({
        next: (data) => this.allCategories = data
      });
  }

  getHomeCategories() {
    return this.http.get<ICategory[]>(environment.webApiUrl + 'Categories')
      .pipe(catchError(this.errorHandler.bind(this)))
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.error.errors.id)
    return throwError(() => error.error.errors.id)
  }
}
