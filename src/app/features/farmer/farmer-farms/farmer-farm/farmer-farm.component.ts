import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IFarm } from "../../../../shared/interfaces/farm.interface";

@Component({
  selector: 'app-farmer-farm',
  templateUrl: './farmer-farm.component.html',
  styleUrls: ['./farmer-farm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FarmerFarmComponent implements OnInit {
  @Input() farm!: IFarm;

  constructor() {}

  ngOnInit(): void {
  }

}
