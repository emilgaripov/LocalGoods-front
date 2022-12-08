import { Injectable } from '@angular/core';
import { IUser } from "../interfaces/user.interface";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: IUser = {
    id: 5,
    userName: 'Johnathan',
    email: 'Bridgette_Koepp70@gmail.com',
    roles: ['Farmer']
  };

  constructor(private http: HttpClient) {}


}
