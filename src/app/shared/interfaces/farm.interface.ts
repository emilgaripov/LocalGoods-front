export interface IFarm {
  id: number,
  farmerId: number,
  name: string,
  image?: string,
  description?: string,
  location?:{
    adress: string,
    coordinates:{
      lat: number,
      lon: number
    }
  }
}
