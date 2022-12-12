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
  file!: File;

  constructor(private farmsService: FarmsService) {}

  ngOnInit(): void {
    this.farms$ = this.farmsService.farmerFarms$;
    this.farmsService.getFarmerFarms();
  }

  onAddFarm(newFarmData: FarmFormData) {
    const formData = new FormData();
    const newFarm = {
      ...newFarmData,
      latitude: this.latitude,
      longitude: this.longitude,
      createdOn: new Date().toString(),
      imageFile: this.file
    };

    formData.append('name', newFarm.name);
    formData.append('description', newFarm.description);
    formData.append('imageFile', newFarm.imageFile);
    formData.append('country', newFarm.country);
    formData.append('city', newFarm.city);
    formData.append('address', newFarm.address);
    formData.append('latitude', newFarm.latitude.toString());
    formData.append('longitude', newFarm.longitude.toString());
    formData.append('email', newFarm.email);
    formData.append('telephone', newFarm.telephone);
    formData.append('faceBook', newFarm.faceBook);
    formData.append('instagram', newFarm.instagram);
    formData.append('createdOn', '12.12.2022');

    this.farmsService.createFarm(formData);
    this.isModalAddOpened = false;
  }

  onChoseLocation(event: any) {
    console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.file = file;
    this.fileName = file ? file.name : '';
  }
}
