import { Component, OnInit } from '@angular/core';
import { SuccessService } from 'src/app/shared/services/success.service';
import { Observable, tap } from "rxjs";

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  success$!: Observable<string>;

  constructor(private successService: SuccessService) {}

  ngOnInit() {
    this.success$ = this.successService.success$.pipe(
      tap((value) => {
        if (value) {
          setTimeout(() => {
            this.onClose();
          }, 2000);
        }
      })
    );
  }

  onClose() {
    this.successService.close();
  }

}
