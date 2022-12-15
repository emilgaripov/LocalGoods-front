import { Component, OnInit } from '@angular/core';
import { delay, timeout } from 'rxjs';
import { SuccessService } from 'src/app/shared/services/success.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor(
    public successService: SuccessService
  ) { }

  ngOnInit() {
    this.successService.success$.pipe(
      delay(2000)
    ).subscribe(
      () => {
        this.successService.success$.next('')
      }
    )    
  }

}
