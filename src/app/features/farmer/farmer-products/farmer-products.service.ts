import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from "rxjs";
import { IProduct } from "../../../shared/interfaces/product.interface";
import { products } from "../../../mocks/farmer.mock";

@Injectable({
  providedIn: 'root'
})
export class FarmerProductsService {
  private products$ = new BehaviorSubject<IProduct[]>(this.initProducts());

  private initProducts(): IProduct[] {
    let allProducts: IProduct[] = [];
    products.pipe(take(1)).subscribe({
      next: (data) => allProducts = data
    });
    return allProducts;
  }

  get getAllProducts(): Observable<IProduct[]> {
    return this.products$;
  }

  getProductById(id: number): Observable<IProduct | undefined> {
    return this.products$.pipe(
      take(1),
      map((prods) => {
        return prods.find((prod) => prod.id === id);
      })
    );
  }

  getProductsByFarmId(farmId: number): Observable<IProduct[]> {
    return this.products$.pipe(
      map((prods) => {
        return prods.filter((prod) => prod.farmId === farmId);
      })
    );
  }

  createProduct(newProduct: IProduct) {
    this.products$.pipe(take(1)).subscribe({
      next: (data) => {
        newProduct.id = data.length + 1;
        data.push(newProduct);
        this.products$.next([...data]);
      }
    });
  }

  editProduct(editedProduct: IProduct) {
    this.products$.pipe(take(1)).subscribe({
      next: (data) => {
        const indexOfProductToBeEdited = data.findIndex((prod) => prod.id === editedProduct.id);
        data[indexOfProductToBeEdited] = editedProduct;
        this.products$.next([...data]);
      }
    });
  }

  deleteProduct(id: number): void {
    this.products$.pipe(take(1)).subscribe({
      next: (data) => {
        const indexOfProductToBeDeleted = data.findIndex((prod) => prod.id === id);
        data.splice(indexOfProductToBeDeleted, 1);
        this.products$.next([...data]);
      }
    });
  }

}
