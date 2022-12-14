import { Component } from '@angular/core';
import { delay } from 'rxjs';
import { ErrorService } from 'src/app/shared/services/error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {

  constructor(
    public errorService: ErrorService,
  ) { }

  ngOnInit() {
    this.errorService.error$.pipe(
      delay(2000)
    ).subscribe(
      () => {
        this.errorService.error$.next('')
      }
    )    
  }

}
