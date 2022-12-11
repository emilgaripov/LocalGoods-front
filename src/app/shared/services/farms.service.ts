import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { IFarm } from "../interfaces/farm.interface";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FarmsService {
  readonly farmerFarms$ = new Subject<IFarm[]>();
  private farmerFarms: IFarm[] = [];

  constructor(private http: HttpClient) {}

  getAllFarms(): Observable<IFarm[]> {
    return this.http.get<IFarm[]>(environment.webApiUrl + 'Farms');
  }

  getFarmerFarms() {
    const userId = this.getUserId();
    this.http.get<IFarm[]>(environment.webApiUrl + 'Farmers/' + userId + '/Farms').subscribe({
      next: (farms) => {
        this.farmerFarms = farms;
        this.farmerFarms$.next([...this.farmerFarms]);
      }
    });
  }

  getFarmById(id: number): Observable<IFarm> {
    return this.http.get<IFarm>(environment.webApiUrl + 'Farms/' + id);
  }

  createFarm(newFarmData: any) {
    const userId = this.getUserId();
    this.http.post<IFarm>(environment.webApiUrl + 'Farms/' + userId, newFarmData).subscribe({
      next: (newFarm) => {
        this.farmerFarms.push(newFarm);
        this.farmerFarms$.next([...this.farmerFarms]);
      }
    });
  }

  deleteFarm(id: number) {
    this.http.delete<boolean>(environment.webApiUrl + 'Farms/' + id).subscribe({
      next: () => {
        const index = this.farmerFarms.findIndex((farm) => farm.id === id);
        this.farmerFarms.splice(index, 1);
        this.farmerFarms$.next([...this.farmerFarms]);
      }
    });
  }

  updateFarm(id: number, updatedFarmData: IFarm) {
    this.http.put<IFarm>(environment.webApiUrl + 'Farms/' + id, updatedFarmData).subscribe({
      next: (updatedFarm) => {
        const index = this.farmerFarms.findIndex((farm) => farm.id === id);
        this.farmerFarms[index] = updatedFarm;
        this.farmerFarms$.next([...this.farmerFarms]);
      }
    });
  }

  private getUserId() {
    return localStorage.getItem('userId');
  }
}
