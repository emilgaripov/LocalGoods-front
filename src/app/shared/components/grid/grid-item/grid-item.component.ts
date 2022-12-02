import { Component, Input, OnInit, ɵɵvalidateIframeAttribute } from '@angular/core';

import { IFarm } from 'src/app/shared/interfaces/farm.interface';
import { IProduct } from "../../../interfaces/product.interface";

import { FarmsService } from 'src/app/shared/services/farms.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {
  @Input() item!: any;

  productFarm?: IFarm;

  constructor(
    private farmsService: FarmsService
  ) { }

  ngOnInit(): void {
    this.getProductFarmInfo();
  }

  getProductFarmInfo() {
    if ('farmId' in this.item) {
      this.farmsService.getFarmById(this.item.farmId)
        .pipe(first())
        .subscribe((farm) => this.productFarm = farm)
    } 
  }
}
