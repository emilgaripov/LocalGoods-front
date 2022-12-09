import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { IFarm } from "../../../shared/interfaces/farm.interface";
import { FarmsService } from "../../../shared/services/farms.service";

@Component({
  selector: 'app-farmer-farms',
  templateUrl: './farmer-farms.component.html',
  styleUrls: ['./farmer-farms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FarmerFarmsComponent implements OnInit {
  farms$!: Observable<IFarm[]>;
  isModalAddOpened = false;
  submitted = false;

  //for map default cords of Zurich
  latitude = 47.373878;
  longitude = 8.545094;

  //image upload
  fileName = '';

  constructor(private farmsService: FarmsService) {}

  ngOnInit(): void {
    this.farms$ = this.farmsService.farmerFarms$;
  }

  onAddFarm(value: any) {
    this.submitted = true;
    if (!value.farmName) return;

    // this.farmsService.createFarm();
    this.submitted = false; // to add to success response
    this.isModalAddOpened = false;
  }

  onChoseLocation(event: any) {
    console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
    }
  }
}
