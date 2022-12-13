import { Component, Input, OnInit } from '@angular/core';
import { first, Observable } from 'rxjs';
import { IFarm } from 'src/app/shared/interfaces/farm.interface';
import { FarmsService } from 'src/app/shared/services/farms.service';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {
  @Input() item!: any;
  farm$!: Observable<IFarm>

  constructor(
    private farmsService: FarmsService,
  ){
  }

  ngOnInit(){
    if(this.item.farmId){
      this.farm$! = this.farmsService.getFarmById(this.item.farmId)
    }
  }
  
}
