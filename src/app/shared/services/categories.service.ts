import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ICategory } from "../interfaces/category.interface";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private allCategories: ICategory[] = [];

  constructor(private http: HttpClient) {
    this.getAllCategories();
  }

  get categories() {
    return [...this.allCategories];
  }

  private getAllCategories() {
    this.http.get<ICategory[]>(environment.webApiUrl + 'Categories').subscribe({
      next: (data) => this.allCategories = data
    });
  }

  getHomeCategories() {
    return this.http.get<ICategory[]>(environment.webApiUrl + 'Categories')
  }
}
