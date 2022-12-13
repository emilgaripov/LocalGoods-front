import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IFarm } from 'src/app/shared/interfaces/farm.interface';
import { FarmsService } from 'src/app/shared/services/farms.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnInit {
  zoom: number = 8;
  lat: number = 51.678418;
  lng: number = 7.809007;

  farms$!: Observable<IFarm[]>

  constructor(private farmsService: FarmsService) {}

  ngOnInit() {
    this.farms$ = this.farmsService.getAllFarms()
  }

}
