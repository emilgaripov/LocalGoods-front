import { Observable, of } from "rxjs";
import { IFarm } from "../shared/interfaces/farm.interface";
import { IProduct } from "../shared/interfaces/product.interface";

export const farms: Observable<IFarm[]> = of([
  {
    id: 1,
    name: 'First farm'
  },
  {
    id: 2,
    name: 'Second farm'
  },
  {
    id: 3,
    name: 'Third farm'
  }
]);

export const products: Observable<IProduct[]> = of([
  {
    id: 1,
    farmId: 1,
    name: 'First product',
    description: 'Description to first product',
    image: ''
  },
  {
    id: 2,
    farmId: 1,
    name: 'Second product',
    description: 'Description to second product',
    image: ''
  },
  {
    id: 3,
    farmId: 1,
    name: 'Third product',
    description: 'Description to third product',
    image: ''
  },
  {
    id: 4,
    farmId: 2,
    name: 'First product',
    description: 'Description to first product',
    image: ''
  },
  {
    id: 5,
    farmId: 3,
    name: 'First product',
    description: 'Description to first product',
    image: ''
  },
  {
    id: 6,
    farmId: 3,
    name: 'Second product',
    description: 'Description to second product',
    image: ''
  }
]);
