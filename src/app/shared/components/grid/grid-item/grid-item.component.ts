import { Component, Input } from '@angular/core';
import { IFarm } from 'src/app/shared/interfaces/farm.interface';
import { ItemsType } from "../../../types/types";

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent {
  @Input() item!: any;
  @Input() itemsType!: ItemsType;
  @Input() set farms(farms: IFarm[]) {
    if (farms && this.itemsType === 'Products') {
      this.productFarm = farms.find((farm) => farm.id === this.item.farmId)!;
    }
  }
  productFarm!: IFarm;

}
