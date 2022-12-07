// import { Observable, of } from "rxjs";
// import { IProduct } from "../shared/interfaces/product.interface";
//
// export const products: Observable<IProduct[]> = of([
//   // Products of farmer 1 farm 1
//   {
//     id: 1,
//     farmId: 1,
//     name: 'Gold Apples',
//     description: 'Description to first product',
//     image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/apples-at-farmers-market-royalty-free-image-1627321463.jpg',
//     price: 150,
//     category: 'fruits',
//     createdAt: new Date('2012-04-23T18:25:43.511Z')
//   },
//   {
//     id: 2,
//     farmId: 1,
//     name: 'Green Apples',
//     description: 'Description to second product',
//     image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-apples-granny-smith-1658525750.jpeg',
//     price: 50,
//     category: 'fruits',
//     createdAt:  new Date('2013-02-23T18:25:43.511Z')
//   },
//   {
//     id: 3,
//     farmId: 1,
//     name: 'Yellow Pears',
//     description: 'Description to third product',
//     image: 'https://cdn.tasteatlas.com/images/ingredients/60eea3493ed944f7a4e6db7ff9b4765f.jpg',
//     price: 236,
//     category: 'fruits',
//     createdAt:  new Date('2015-04-23T18:25:43.511Z')
//   },
//
//   // Products of farmer 1 farm 2
//   {
//     id: 4,
//     farmId: 2,
//     name: 'Strawberry',
//     description: 'Description to first product',
//     image: 'https://www.gardeningknowhow.com/wp-content/uploads/2021/07/ripe-red-strawberries.jpg',
//     price: 45,
//     category: 'berries',
//     createdAt:  new Date('2011-07-23T18:25:43.511Z')
//   },
//
//   // Products of farmer 1 farm 3
//   {
//     id: 5,
//     farmId: 3,
//     name: 'Poulet',
//     description: 'Description to first product',
//     image: 'https://img-3.journaldesfemmes.fr/vFEM-3POiKT8i8NmZvqwIZiG9kg=/1500x/smart/1a712856aaaf419dbfa5d24cc9808e03/ccmcms-jdf/35925017.jpg',
//     price: 650,
//     category: 'meat',
//     createdAt:  new Date('2022-09-23T18:25:43.511Z')
//   },
//   {
//     id: 6,
//     farmId: 3,
//     name: 'Beef',
//     description: 'Description to second product',
//     image: 'https://www.jessicagavin.com/wp-content/uploads/2020/06/cuts-of-beef-12.jpg',
//     price: 1250,
//     category: 'meat',
//     createdAt:  new Date('2022-02-23T18:25:43.511Z')
//   },
//
//   // Products of farmer 2 farm 1
//   {
//     id: 7,
//     farmId: 4,
//     name: 'Pork',
//     description: 'Description to first product',
//     image: 'https://img.taste.com.au/mbStklBe/taste/2016/11/orange-and-rosemary-roast-pork-104515-1.jpeg',
//     price: 950,
//     category: 'meat',
//     createdAt:  new Date('2022-02-23T18:25:43.511Z')
//   },
//   {
//     id: 8,
//     farmId: 4,
//     name: 'Beef',
//     description: 'Description to second product',
//     image: 'https://www.jessicagavin.com/wp-content/uploads/2020/06/cuts-of-beef-12.jpg',
//     price: 700,
//     category: 'meat',
//     createdAt:  new Date('2021-04-23T18:25:43.511Z')
//   },
//   {
//     id: 9,
//     farmId: 4,
//     name: 'Rabbit meat',
//     description: 'Description to third product',
//     image: 'https://doggiliciouus.com/wp-content/uploads/2022/01/Screen-Shot-2022-01-20-at-5.21.42-PM.png',
//     price: 2560,
//     category: 'meat',
//     createdAt:  new Date('2022-07-23T18:25:43.511Z')
//   },
//   {
//     id: 10,
//     farmId: 4,
//     name: 'Turkey meat',
//     description: 'Description to fourth product',
//     image: 'https://www.dartagnan.com/on/demandware.static/-/Sites-dartagnan-live-catalog-en/default/dwe8bc24a2/images/products/FTUWI002-1.jpg',
//     price: 850,
//     category: 'meat',
//     createdAt:  new Date('2022-08-23T18:25:43.511Z')
//   },
//
//   // Products of farmer 3 farm 1
//   {
//     id: 12,
//     farmId: 5,
//     name: 'Almond',
//     description: 'Description to first product',
//     image: 'https://cdn.britannica.com/04/194904-050-1B92812A/Raw-Food-Almond-food-Nut-Snack.jpg',
//     price: 40,
//     category: 'nuts',
//     createdAt:  new Date('2020-08-23T18:25:43.511Z')
//   },
//   {
//     id: 13,
//     farmId: 5,
//     name: 'Peanut',
//     description: 'Description to second product',
//     image: 'https://cdn.britannica.com/25/82525-004-9C7BDAA8.jpg',
//     price: 50,
//     category: 'nuts',
//     createdAt:  new Date('2020-03-23T18:25:43.511Z')
//   },
//   {
//     id: 14,
//     farmId: 5,
//     name: 'Walnut',
//     description: 'Description to third product',
//     image: 'https://images.healthshots.com/healthshots/en/uploads/2022/05/17131119/walnut-recipes.jpg',
//     price: 30,
//     category: 'nuts',
//     createdAt:  new Date('2020-09-23T18:25:43.511Z')
//   },
//
//   // Products of farmer 3 farm 2
//   {
//     id: 15,
//     farmId: 6,
//     name: 'Oranges',
//     description: 'Description to first product',
//     image: 'https://media.riverford.co.uk/images/oranges-1kg-1500x1500-712d799b5f6cbe4251fcd9250ea9255b.jpg',
//     price: 80,
//     category: 'fruits',
//     createdAt:  new Date('2020-09-23T18:25:43.511Z')
//   },
//   {
//     id: 16,
//     farmId: 6,
//     name: 'Mandarin',
//     description: 'Description to second product',
//     image: 'https://s0.rbk.ru/v6_top_pics/resized/1440xH/media/img/1/98/756083939799981.jpg',
//     price: 100,
//     category: 'fruits',
//     createdAt:  new Date('2020-09-12T18:25:43.511Z')
//   },
//   {
//     id: 17,
//     farmId: 6,
//     name: 'Pamelo',
//     description: 'Description to third product',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8qk9t8CBnaICsN5o25d20Ba8gK06zKCxKBA&usqp=CAU',
//     price: 120,
//     category: 'fruits',
//     createdAt:  new Date('2020-10-12T18:25:43.511Z')
//   },
//   {
//     id: 18,
//     farmId: 6,
//     name: 'Grapefruit',
//     description: 'Description to fourth product',
//     image: 'https://cdn.shopify.com/s/files/1/2045/8185/products/9449104_600x600.png?v=1598374091',
//     price: 150,
//     category: 'fruits',
//     createdAt:  new Date('2020-10-24T18:25:43.511Z')
//   }
// ]);
