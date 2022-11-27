import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { IFarm } from "../../../shared/interfaces/farm.interface";
import { FarmerFarmsService } from "./farmer-farms.service";

@Component({
  selector: 'app-farmer-farms',
  templateUrl: './farmer-farms.component.html',
  styleUrls: ['./farmer-farms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FarmerFarmsComponent implements OnInit {
  farms$!: Observable<IFarm[]>;
  isModalOpened = false;

  constructor(private farmerFarmsService: FarmerFarmsService) {}

  ngOnInit(): void {
    this.farms$ = this.farmerFarmsService.getAllFarms;
  }

  openModal() {
    this.isModalOpened = true;
  }

  closeModal() {
    this.isModalOpened = false;
  }

  onAddFarm(value: { farmName: string }) {
    if (!value.farmName) return;

    this.farmerFarmsService.createFarm(value.farmName);
    this.closeModal();
  }
}
