import { Observable, of } from "rxjs";
import { IFarm } from "../shared/interfaces/farm.interface";

export const farms: Observable<IFarm[]> = of([
  // Farms of first farmer
  {
    id: 1,
    farmerId: 1,
    name: 'First farm',
    image: 'https://www.fao.org/typo3temp/pics/654cc0c6f7.jpg',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    location: {
      address: 'Street One, 12',
      city: 'London',
      country: 'Great Britain'
    },
    rating: 4,
    social: {
      fb:'https://www.facebook.com/firstfarmpage',
      instagram: 'https://www.instagram.com/123456'
    },
    contacts: {
      tel: '+123456789',
      email:'firstfarm@email.com'
    }
  },
  {
    id: 2,
    farmerId: 1,
    name: 'Second farm',
    image: 'https://www.arc2020.eu/wp-content/uploads/2018/05/farm-2613993_1920.jpg',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    location:{
      address: 'Street One, 12',
      city: 'Glasgow',
      country: 'Great Britain'
    },
    rating: 2,
    social:{
      fb:'https://www.facebook.com/farmpage',
      instagram: 'https://www.instagram.com/fdsdf'
    },
    contacts: {
      tel: '+124235443435',
      email:'2farm@email.com'
    }
  },
  {
    id: 3,
    farmerId: 1,
    name: 'Third farm',
    image: 'https://i0.wp.com/epthinktank.eu/wp-content/uploads/2014/02/future-of-small-farms.jpg?fit=800%2C536&ssl=1',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ',
    location:{
      address: 'Street Somertre, 12',
      city: 'Bristol',
      country: 'Great Britain'
    },
    rating: 5,
    social:{
      fb:'https://www.facebook.com/farmpage',
      instagram: 'https://www.instagram.com/fdsdf'
    },
    contacts: {
      tel: '+124235443435',
      email:'2farm@email.com'
    }
  },

  // Farms of second farmer
  {
    id: 4,
    farmerId: 2,
    name: 'First farm',
    image: 'https://hygeia-analytics.com/wp-content/uploads/2018/03/Organic-farm-europe.jpg',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ',
    location:{
      address: 'No street, 132',
      city: 'Paris',
      country: 'France'
    },
    rating: 5,
    social:{
      fb:'https://www.facebook.com/FranceFrance',
      instagram: 'https://www.instagram.com/ParisParis'
    },
    contacts: {
      tel: '+346575765662342342',
      email:'francefarm@email.com'
    }
  },

  // Farms of third farmer
  {
    id: 5,
    farmerId: 3,
    name: 'First farm',
    image: 'https://i0.wp.com/www.terratechmsc.eu/wp-content/uploads/2022/01/smart-agricalture-in-europe-1.png?resize=800%2C533',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ',
    location:{
      address: 'Sezam Street, 10',
      city: 'Berlin',
      country: 'Germany'
    },
    rating: 5,
    social:{
      fb:'https://www.facebook.com/Germany21231',
      instagram: 'https://www.instagram.com/Germany243243'
    },
    contacts: {
      tel: '+645532121654',
      email:'berlin@email.com'
    }

  },
  {
    id: 6,
    farmerId: 3,
    name: 'Second farm',
    image: 'https://preview.redd.it/55c17i2dm9i91.jpg?width=640&crop=smart&auto=webp&s=de528997ddad404d186e23dbfb1d8e6553fa79b6',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ',
    location:{
      address: 'Other Street, 342',
      city: 'Gamburg',
      country: 'Germany',
    },
    rating: 3,
    social:{
      fb:'https://www.facebook.com/33many21231',
      instagram: 'https://www.instagram.com/Ge324243'
    },
    contacts: {
      tel: '+64657675767564',
      email:'berlin2@email.com'
    }
  }
]);
