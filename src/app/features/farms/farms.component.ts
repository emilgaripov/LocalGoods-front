import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IFarm } from 'src/app/shared/interfaces/farm.interface';
import { FarmsService } from 'src/app/shared/services/farms.service';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'grow-container'
  }
})
export class FarmsComponent implements OnInit {
  farms$!: Observable<IFarm[]>;
  searchValue!: string;

  constructor(private farmsService: FarmsService) {}

  ngOnInit(): void {
    this.farms$ = this.farmsService.getAllFarms;
  }

}
