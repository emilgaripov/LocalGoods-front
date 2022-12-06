import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { IFarm } from "../../../shared/interfaces/farm.interface";
import { FarmerService } from "../../../shared/services/farmer.service";

@Component({
  selector: 'app-farmer-farms',
  templateUrl: './farmer-farms.component.html',
  styleUrls: ['./farmer-farms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FarmerFarmsComponent implements OnInit {
  farms$!: Observable<IFarm[]>;
  isModalOpened = false;

  //for map default cords of Zurich
  latitude = 47.373878;
  longitude = 8.545094;

  constructor(private farmerService: FarmerService) {}

  ngOnInit(): void {
    this.farms$ = this.farmerService.getFarmsByUserId();
  }

  openModal() {
    this.isModalOpened = true;
  }

  closeModal() {
    this.isModalOpened = false;
  }

  onAddFarm(value: any) {
    if (!value.farmName) return;

    // this.farmerFarmsService.createFarm(value.farmName);
    this.closeModal();
  }

  onChoseLocation(event:any){
    console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }
}
