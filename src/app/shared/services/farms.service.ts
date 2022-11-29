import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from "rxjs";
import { IFarm } from "../interfaces/farm.interface";
import { farms } from "../../mocks/farms.mock";

@Injectable({
  providedIn: 'root'
})
export class FarmsService {
  private farms$ = new BehaviorSubject<IFarm[]>(this.initFarms());

  private initFarms(): IFarm[] {
    let allFarms: IFarm[] = [];
    farms.pipe(take(1)).subscribe({
      next: (data) => allFarms = data
    });
    return allFarms;
  }

  get getAllFarms(): Observable<IFarm[]> {
    return this.farms$;
  }

  getFarmById(id: number): Observable<IFarm | undefined> {
    return this.farms$.pipe(
      take(1),
      map((farms) => {
        return farms.find((farm) => farm.id === id);
      })
    );
  }

  createFarm(farmName: string) {
    this.farms$.pipe(take(1)).subscribe({
      next: (data) => {
        const newFarm: IFarm = { id: data.length + 1, farmerId: 0, name: farmName };
        data.push(newFarm);
        this.farms$.next([...data]);
      }
    });
  }

  deleteFarm(id: number): void {
    this.farms$.pipe(take(1)).subscribe({
      next: (data) => {
        const indexOfFarmToBeDeleted = data.findIndex((farm) => farm.id === id);
        data.splice(indexOfFarmToBeDeleted, 1);
        this.farms$.next([...data]);
      }
    });
  }

}
