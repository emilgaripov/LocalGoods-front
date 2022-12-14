import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuccessService {

  success$ = new Subject<string>()

  handle(message: string) {
    this.success$.next(message)
  } 

  close() {
    this.success$.next('')
  }
}
