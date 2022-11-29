import { Observable, of } from "rxjs";
import { IFarm } from "../shared/interfaces/farm.interface";

export const farms: Observable<IFarm[]> = of([
  // Farms of first farmer
  {
    id: 1,
    farmerId: 1,
    name: 'First farm'
  },
  {
    id: 2,
    farmerId: 1,
    name: 'Second farm'
  },
  {
    id: 3,
    farmerId: 1,
    name: 'Third farm'
  },

  // Farms of second farmer
  {
    id: 4,
    farmerId: 2,
    name: 'First farm'
  },

  // Farms of third farmer
  {
    id: 5,
    farmerId: 3,
    name: 'First farm'
  },
  {
    id: 6,
    farmerId: 3,
    name: 'Second farm'
  }
]);
