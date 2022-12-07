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

  // private products$ = new BehaviorSubject<IProduct[]>(this.initProducts());
  //
  // private initProducts(): IProduct[] {
  //   let allProducts: IProduct[] = [];
  //   products.pipe(take(1)).subscribe({
  //     next: (data) => allProducts = data
  //   });
  //   return allProducts;
  // }
  //
  // get getAllProducts(): Observable<IProduct[]> {
  //   return this.products$;
  // }
  //
  // getProductById(id: number): Observable<IProduct | undefined> {
  //   return this.products$.pipe(
  //     take(1),
  //     map((prods) => {
  //       return prods.find((prod) => prod.id === id);
  //     })
  //   );
  // }
  //
  // getProductsByFarmId(farmId: number): Observable<IProduct[]> {
  //   return this.products$.pipe(
  //     map((prods) => {
  //       return prods.filter((prod) => prod.farmId === farmId);
  //     })
  //   );
  // }
  //
  // createProduct(newProduct: IProduct) {
  //   this.products$.pipe(take(1)).subscribe({
  //     next: (data) => {
  //       newProduct.id = data.length + 1;
  //       data.push(newProduct);
  //       this.products$.next([...data]);
  //     }
  //   });
  // }
  //
  // editProduct(editedProduct: IProduct) {
  //   this.products$.pipe(take(1)).subscribe({
  //     next: (data) => {
  //       const indexOfProductToBeEdited = data.findIndex((prod) => prod.id === editedProduct.id);
  //       data[indexOfProductToBeEdited] = editedProduct;
  //       this.products$.next([...data]);
  //     }
  //   });
  // }
  //
  // deleteProduct(id: number): void {
  //   this.products$.pipe(take(1)).subscribe({
  //     next: (data) => {
  //       const indexOfProductToBeDeleted = data.findIndex((prod) => prod.id === id);
  //       data.splice(indexOfProductToBeDeleted, 1);
  //       this.products$.next([...data]);
  //     }
  //   });
  // }


}
