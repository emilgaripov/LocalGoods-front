import { Injectable } from '@angular/core';
import { map } from "rxjs";
import { farmers, products } from "../../mocks/farmer.mock";

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  getAllFarms() {
    return farmers;
  }

  getAllProducts() {
    return products;
  }

  getProductsByFarmId(id: number) {
    return products.pipe(
      map((prods) => {
        return prods.filter((prod) => prod.farmerId === id);
      })
    );
  }

}
