import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { IFarm } from "../interfaces/farm.interface";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FarmsService {
  constructor(private http: HttpClient) {}

  getAllFarms(): Observable<IFarm[]> {
    return this.http.get<IFarm[]>(environment.webApiUrl + 'Farms');
  }

  getFarmById(id: number): Observable<IFarm> {
    return this.http.get<IFarm>(environment.webApiUrl + 'Farms/' + id);
  }

  // private farms$ = new BehaviorSubject<IFarm[]>(this.initFarms());
  //
  // private initFarms(): IFarm[] {
  //   let allFarms: IFarm[] = [];
  //   farms.pipe(take(1)).subscribe({
  //     next: (data) => allFarms = data
  //   });
  //   return allFarms;
  // }
  //
  // get getAllFarms(): Observable<IFarm[]> {
  //   return this.farms$;
  // }
  //
  // getFarmById(id: number): Observable<IFarm | undefined> {
  //   return this.farms$.pipe(
  //     take(1),
  //     map((farms) => {
  //       return farms.find((farm) => farm.id === id);
  //     })
  //   );
  // }
  //
  // createFarm(farmName: string) {
  //   this.farms$.pipe(take(1)).subscribe({
  //     next: (data) => {
  //       const newFarm: IFarm = { id: data.length + 1, farmerId: 0, name: farmName };
  //       data.push(newFarm);
  //       this.farms$.next([...data]);
  //     }
  //   });
  // }
  //
  // deleteFarm(id: number): void {
  //   this.farms$.pipe(take(1)).subscribe({
  //     next: (data) => {
  //       const indexOfFarmToBeDeleted = data.findIndex((farm) => farm.id === id);
  //       data.splice(indexOfFarmToBeDeleted, 1);
  //       this.farms$.next([...data]);
  //     }
  //   });
  // }


}
