import { IProduct } from "./product.interface";

export interface IFarm {
  id?: number,
  name: string,
  imagePath: string,
  description: string,
  address: string,
  city: string,
  country: string,
  latitude: number,
  longitude: number,
  rating?: number,
  userId: string,
  createdOn: string,
  telephone: string,
  email: string,
  faceBook: string,
  instagram: string,
  products?: IProduct[]
}
