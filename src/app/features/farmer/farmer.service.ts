import { Injectable } from '@angular/core';
import { map, Observable } from "rxjs";
import { farms, products } from "../../mocks/farmer.mock";
import { IFarm } from "../../shared/interfaces/farm.interface";
import { IProduct } from "../../shared/interfaces/product.interface";

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  getAllFarms(): Observable<IFarm[]> {
    return farms;
  }

  getAllProducts(): Observable<IProduct[]> {
    return products;
  }

  getProductsByFarmId(id: number): Observable<IProduct[]> {
    return products.pipe(
      map((prods) => {
        return prods.filter((prod) => prod.farmerId === id);
      })
    );
  }

  getFarmById(id: number): Observable<IFarm | undefined> {
    return farms.pipe(
      map((farms) => {
        return farms.find((farm) => farm.id === id);
      })
    );
  }

  getProductById(id: number): Observable<IProduct | undefined> {
    return products.pipe(
      map((prods) => {
        return prods.find((prod) => prod.id === id);
      })
    );
  }

}
