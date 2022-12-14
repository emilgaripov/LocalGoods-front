import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, tap, throwError } from "rxjs";
import { IProduct } from "../interfaces/product.interface";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { ErrorService } from './error.service';
import { SuccessService } from './success.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly farmerFarmProducts$ = new Subject<IProduct[]>();
  private farmerFarmProducts: IProduct[] = [];

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
    private successService: SuccessService
  ) { }

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(environment.webApiUrl + 'Products')
      .pipe(catchError(this.errorHandler.bind(this)))
  }

  getProductsByFarmId(farmId: number) {
    this.http.get<IProduct[]>(environment.webApiUrl + 'Farms/' + farmId + '/FarmProducts')
      .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe({
        next: (products) => {
          this.farmerFarmProducts = products;
          this.farmerFarmProducts$.next([...this.farmerFarmProducts]);
        }
      });
  }

  createProduct(farmId: number, newProductData: any) {
    this.http.post<IProduct>(environment.webApiUrl + 'Products/' + farmId, newProductData)
      .pipe(
        tap(()=> this.successService.handle('Product created successfully')),
        catchError(this.errorHandler.bind(this))
        )
      .subscribe({
        next: (newProduct) => {
          console.log(newProduct)
          this.farmerFarmProducts.push(newProduct);
          this.farmerFarmProducts$.next([...this.farmerFarmProducts]);
        }
      });
  }

  deleteProduct(id: number) {
    this.http.delete<boolean>(environment.webApiUrl + 'Products/' + id)
      .pipe(
        tap(()=> this.successService.handle('Product deleted successfully')),
        catchError(this.errorHandler.bind(this))
        )
      .subscribe({
        next: () => {
          const index = this.farmerFarmProducts.findIndex((product) => product.id === id);
          this.farmerFarmProducts.splice(index, 1);
          this.farmerFarmProducts$.next([...this.farmerFarmProducts]);
        }
      });
  }

  updateProduct(id: number, updatedProductData: any) {
    this.http.put<IProduct>(environment.webApiUrl + 'Products/Update/' + id, updatedProductData)
      .pipe(
        tap(()=> this.successService.handle('Product updated successfully')),
        catchError(this.errorHandler.bind(this))
        )
      .subscribe({
        next: (updatedProd) => {
          console.log(updatedProd)
          const index = this.farmerFarmProducts.findIndex((prod) => prod.id === id);
          this.farmerFarmProducts[index] = updatedProd;
          this.farmerFarmProducts$.next([...this.farmerFarmProducts]);
        }
      });
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.error.errors.id)
    return throwError(() => error.error.errors.id)
  }
}
