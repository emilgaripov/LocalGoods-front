import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/user.interface';
import { editUserFormData } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) {}

  getUserById(){
    return this.http.get<IUser>(environment.webApiUrl + 'Users/' + this.userId);
  }

  get userId(){
    return localStorage.getItem('userId')
  }

  editUser(data: editUserFormData){
    console.log('service edit');
    
    return this.http.put<IUser>(environment.webApiUrl + 'Users/' + this.userId, data)
      .subscribe((res)=> console.log(res)
      )
  } 
}
