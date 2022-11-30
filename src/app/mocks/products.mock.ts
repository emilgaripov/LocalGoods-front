import { Observable, of } from "rxjs";
import { IProduct } from "../shared/interfaces/product.interface";

export const products: Observable<IProduct[]> = of([
  // Products of farmer 1 farm 1
  {
    id: 1,
    farmId: 1,
    name: 'Gold Apples',
    description: 'Description to first product',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/apples-at-farmers-market-royalty-free-image-1627321463.jpg'
  },
  {
    id: 2,
    farmId: 1,
    name: 'Green Apples',
    description: 'Description to second product',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-apples-granny-smith-1658525750.jpeg'
  },
  {
    id: 3,
    farmId: 1,
    name: 'Yellow Pears',
    description: 'Description to third product',
    image: 'https://cdn.tasteatlas.com/images/ingredients/60eea3493ed944f7a4e6db7ff9b4765f.jpg'
  },

  // Products of farmer 1 farm 2
  {
    id: 4,
    farmId: 2,
    name: 'First product',
    description: 'Description to first product',
    image: ''
  },

  // Products of farmer 1 farm 3
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
  },

  // Products of farmer 2 farm 1
  {
    id: 7,
    farmId: 4,
    name: 'First product',
    description: 'Description to first product',
    image: ''
  },
  {
    id: 8,
    farmId: 4,
    name: 'Second product',
    description: 'Description to second product',
    image: ''
  },
  {
    id: 9,
    farmId: 4,
    name: 'Third product',
    description: 'Description to third product',
    image: ''
  },
  {
    id: 10,
    farmId: 4,
    name: 'Fourth product',
    description: 'Description to fourth product',
    image: ''
  },
  {
    id: 11,
    farmId: 4,
    name: 'Fifth product',
    description: 'Description to fifth product',
    image: ''
  },

  // Products of farmer 3 farm 1
  {
    id: 12,
    farmId: 5,
    name: 'First product',
    description: 'Description to first product',
    image: ''
  },
  {
    id: 13,
    farmId: 5,
    name: 'Second product',
    description: 'Description to second product',
    image: ''
  },
  {
    id: 14,
    farmId: 5,
    name: 'Third product',
    description: 'Description to third product',
    image: ''
  },

  // Products of farmer 3 farm 2
  {
    id: 15,
    farmId: 6,
    name: 'First product',
    description: 'Description to first product',
    image: ''
  },
  {
    id: 16,
    farmId: 6,
    name: 'Second product',
    description: 'Description to second product',
    image: ''
  },
  {
    id: 17,
    farmId: 6,
    name: 'Third product',
    description: 'Description to third product',
    image: ''
  },
  {
    id: 18,
    farmId: 6,
    name: 'Fourth product',
    description: 'Description to fourth product',
    image: ''
  }
]);
