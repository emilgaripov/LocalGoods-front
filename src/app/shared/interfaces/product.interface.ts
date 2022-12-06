export interface IProduct {
  id: number,
  name: string,
  description: string,
  price: number,
  surplus: number,
  image: string,
  categoryId: number,
  farmId: number,
  quantityTypeId: number
}
