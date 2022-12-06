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
}
