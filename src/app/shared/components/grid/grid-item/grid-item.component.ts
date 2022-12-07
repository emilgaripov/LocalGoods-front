import { Component, Input, OnInit } from '@angular/core';
import { IFarm } from 'src/app/shared/interfaces/farm.interface';
import { FarmsService } from 'src/app/shared/services/farms.service';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {
  @Input() item!: any;
  productFarm!: IFarm;

  constructor(private farmsService: FarmsService) {}

  ngOnInit(): void {
    this.getProductFarmInfo();
  }

  getProductFarmInfo() {
    this.farmsService.getFarmById(this.item.farmId).subscribe({
      next: (farm) => this.productFarm = farm
    });
  }

}
