export interface IFarm {
  id: number,
  farmerId: number,
  createdAt?: Date,
  name: string,
  image?: string,
  description?: string,
  location?: {
    address: string,
    city: string,
    country: string
  },
  rating?:number,
  social?: {
    fb:string,
    instagram: string
  },
  contacts?: {
    tel:string,
    email:string
  }
}
