import { Observable, of } from "rxjs";
import { IFarmer } from "../shared/interfaces/farmer.interface";

export const farmers: Observable<IFarmer[]> = of([
  {
    id: 1,
    name: 'Johnny'
  },
  {
    id: 2,
    name: 'Alex'
  },
  {
    id: 3,
    name: 'Steve'
  }
]);
