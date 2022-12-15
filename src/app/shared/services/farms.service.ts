import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, tap, throwError } from "rxjs";
import { IFarm } from "../interfaces/farm.interface";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { ErrorService } from './error.service';
import { SuccessService } from './success.service';

@Injectable({
  providedIn: 'root'
})
export class FarmsService {
  readonly farmerFarms$ = new Subject<IFarm[]>();
  private farmerFarms: IFarm[] = [];

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
    private successService: SuccessService
  ) {}

  getAllFarms(): Observable<IFarm[]> {
    return this.http.get<IFarm[]>(environment.webApiUrl + 'Farms');
  }

  getFarmerFarms() {
    this.http.get<IFarm[]>(environment.webApiUrl + 'Farmers/MyFarms')
      .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe({
        next: (farms) => {
          this.farmerFarms = farms;
          this.farmerFarms$.next([...this.farmerFarms]);
        }
      });
  }

  getFarmById(id: number): Observable<IFarm> {
    return this.http.get<IFarm>(environment.webApiUrl + 'Farms/' + id)
      .pipe(catchError(this.errorHandler.bind(this)))
  }

  createFarm(newFarmData: any) {
    this.http.post<IFarm>(environment.webApiUrl + 'Farms/', newFarmData)
      .pipe(
        tap(()=> this.successService.handle('Farm created successfully')),
        catchError(this.errorHandler.bind(this))
        )
      .subscribe({
        next: (newFarm) => {
          this.farmerFarms.push(newFarm);
          this.farmerFarms$.next([...this.farmerFarms]);
        }
      });
  }

  deleteFarm(id: number) {
    this.http.delete<boolean>(environment.webApiUrl + 'Farms/' + id)
      .pipe(
        tap(()=> this.successService.handle('Farm deleted successfully')),
        catchError(this.errorHandler.bind(this))
        )
      .subscribe({
        next: () => {
          const index = this.farmerFarms.findIndex((farm) => farm.id === id);
          this.farmerFarms.splice(index, 1);
          this.farmerFarms$.next([...this.farmerFarms]);
        }
      });
  }

  updateFarm(id: number, updatedFarmData: IFarm) {
    this.http.put<IFarm>(environment.webApiUrl + 'Farms/' + id, updatedFarmData)
      .pipe(
        tap(()=> this.successService.handle('Farm updated successfully')),
        catchError(this.errorHandler.bind(this))
        )
      .subscribe({
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

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.error.errors.id)
    return throwError(() => error.error.errors.id)
  }
}
