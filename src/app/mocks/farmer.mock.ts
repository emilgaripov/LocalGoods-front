import { Observable, of } from "rxjs";
import { IFarm } from "../shared/interfaces/farm.interface";
import { IProduct } from "../shared/interfaces/product.interface";

export const farms: Observable<IFarm[]> = of([
  {
    id: 1,
    name: 'First farmer'
  },
  {
    id: 2,
    name: 'Second farmer'
  },
  {
    id: 3,
    name: 'Third farmer'
  }
]);

export const products: Observable<IProduct[]> = of([
  {
    id: 1,
    farmerId: 1,
    name: 'First product',
    description: 'Description to first product',
    image: ''
  },
  {
    id: 2,
    farmerId: 1,
    name: 'Second product',
    description: 'Description to second product',
    image: ''
  },
  {
    id: 3,
    farmerId: 1,
    name: 'Third product',
    description: 'Description to third product',
    image: ''
  },
  {
    id: 4,
    farmerId: 2,
    name: 'First product',
    description: 'Description to first product',
    image: ''
  },
  {
    id: 5,
    farmerId: 3,
    name: 'First product',
    description: 'Description to first product',
    image: ''
  },
  {
    id: 6,
    farmerId: 3,
    name: 'Second product',
    description: 'Description to second product',
    image: ''
  }
]);
