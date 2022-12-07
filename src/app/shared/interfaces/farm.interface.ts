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
  createdOn: string,
  rating: number,
  userId: number,
  telephone: string,
  email: string,
  faceBook: string,
  instagram: string
}

// export interface IFarm {
//   id: number,
//   farmerId: number,
//   createdAt?: Date,
//   name: string,
//   image?: string,
//   description?: string,
//   location?: {
//     address: string,
//     city: string,
//     country: string
//   },
//   rating?:number,
//   social?: {
//     fb:string,
//     instagram: string
//   },
//   contacts?: {
//     tel:string,
//     email:string
//   }
// }
