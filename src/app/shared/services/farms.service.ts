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

  getFarmsByUserId(userId: number): Observable<IFarm[]> {
    return this.http.get<IFarm[]>(environment.webApiUrl + 'Farmers/' + userId + '/Farms');
  }

  getFarmById(id: number): Observable<IFarm> {
    return this.http.get<IFarm>(environment.webApiUrl + 'Farms/' + id);
  }
}
