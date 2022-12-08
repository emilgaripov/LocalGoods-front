import { IProduct } from "./product.interface";

export interface IFarm {
  id: number,
  name: string,
  image: string,
  description: string,
  address: string,
  city: string,
  country: string,
  latitude: number,
  longitude: number,
  rating: number,
  userId: number,
  createdOn: string,
  telephone: string,
  email: string,
  faceBook: string,
  instagram: string,
  products: IProduct[]
}
