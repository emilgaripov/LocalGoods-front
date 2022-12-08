import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { IProduct } from "../interfaces/product.interface";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(environment.webApiUrl + 'Products');
  }

  getProductsByFarmId(farmId: number): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(environment.webApiUrl + 'Farms/' + farmId + '/FarmProducts');
  }

  deleteProduct(id: number) {
    this.http.delete(environment.webApiUrl + 'Products/' + id).subscribe();
  }
}
