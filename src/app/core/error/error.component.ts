import { Component } from '@angular/core';
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
    this.errorService.error$
      .subscribe((e) => console.log('e', e)
      );
  }

}
