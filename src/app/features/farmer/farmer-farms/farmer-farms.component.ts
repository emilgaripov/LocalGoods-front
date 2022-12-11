import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { IFarm } from "../../../shared/interfaces/farm.interface";
import { FarmsService } from "../../../shared/services/farms.service";
import { FarmFormData } from "../../../shared/types/types";

@Component({
  selector: 'app-farmer-farms',
  templateUrl: './farmer-farms.component.html',
  styleUrls: ['./farmer-farms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FarmerFarmsComponent implements OnInit {
  farms$!: Observable<IFarm[]>;
  isModalAddOpened = false;

  //for map default cords of Zurich
  latitude = 47.373878;
  longitude = 8.545094;

  //image upload
  fileName = '';

  constructor(private farmsService: FarmsService) {}

  ngOnInit(): void {
    this.farms$ = this.farmsService.farmerFarms$;
    this.farmsService.getFarmerFarms();
  }

  onAddFarm(newFarmData: FarmFormData) {
    const newFarm: IFarm = {
      ...newFarmData,
      latitude: this.latitude,
      longitude: this.longitude,
      userId: localStorage.getItem('userId') ?? '',
      createdOn: new Date().toString()
    };
    console.log(newFarm);

    this.farmsService.createFarm(newFarm);
    this.isModalAddOpened = false;
  }

  onChoseLocation(event: any) {
    console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.fileName = file ? file.name : '';
  }
}
