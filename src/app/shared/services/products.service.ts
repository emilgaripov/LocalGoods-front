import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { IProduct } from "../interfaces/product.interface";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly farmerFarmProducts$ = new Subject<IProduct[]>();
  private farmerFarmProducts: IProduct[] = [];

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(environment.webApiUrl + 'Products');
  }

  getProductsByFarmId(farmId: number) {
    this.http.get<IProduct[]>(environment.webApiUrl + 'Farms/' + farmId + '/FarmProducts')
      .subscribe({
        next: (products) => {
          this.farmerFarmProducts = products;
          this.farmerFarmProducts$.next([...this.farmerFarmProducts]);
        }
      });
  }

  createProduct(farmId: number, newProductData: any) {
    this.http.post<IProduct>(environment.webApiUrl + 'Products/' + farmId, newProductData)
      .subscribe({
        next: (newProduct) => {
          this.farmerFarmProducts.push(newProduct);
          this.farmerFarmProducts$.next([...this.farmerFarmProducts]);
        }
      });
  }

  deleteProduct(id: number) {
    this.http.delete<boolean>(environment.webApiUrl + 'Products/' + id).subscribe({
      next: () => {
        const index = this.farmerFarmProducts.findIndex((product) => product.id === id);
        this.farmerFarmProducts.splice(index, 1);
        this.farmerFarmProducts$.next([...this.farmerFarmProducts]);
      }
    });
  }

  updateProduct(id: number, updatedProductData: IProduct) {
    this.http.put<IProduct>(environment.webApiUrl + 'Products/Update/' + id, updatedProductData)
      .subscribe({
        next: (updatedProd) => {
          const index = this.farmerFarmProducts.findIndex((prod) => prod.id === id);
          this.farmerFarmProducts[index] = updatedProd;
          this.farmerFarmProducts$.next([...this.farmerFarmProducts]);
        }
      });
  }
}
