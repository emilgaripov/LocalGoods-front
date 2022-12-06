import { Injectable } from '@angular/core';
import { IUser } from "../interfaces/user.interface";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { IFarm } from "../interfaces/farm.interface";

@Injectable({
  providedIn: 'root'
})
export class FarmerService {
  currentUser: IUser = {
    id: 5,
    firstName: 'Johnathan',
    lastName: 'Mann',
    email: 'Bridgette_Koepp70@gmail.com',
    telePhone: '554-394-4085',
    roleId: 1
  };

  constructor(private http: HttpClient) {}

  getFarmsByUserId(): Observable<IFarm[]> {
    return this.http.get<IFarm[]>(environment.webApiUrl + 'Users/' + this.currentUser.id + '/Farms');
  }
}
