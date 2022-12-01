export interface IProduct {
  id: number,
  farmId: number,
  name: string,
  description: string,
  image: string,
  price?: number,
  categoryId?: number,
  createdAt?: Date
}