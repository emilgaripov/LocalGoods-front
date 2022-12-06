import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, Observable, switchMap } from 'rxjs';

import { IFarm } from 'src/app/shared/interfaces/farm.interface';
import { IProduct } from 'src/app/shared/interfaces/product.interface';

import { FarmsService } from 'src/app/shared/services/farms.service';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.scss'],
  host: {
    class: 'grow-container'
  }
})
export class FarmComponent implements OnInit {
  products$!: Observable<IProduct[]>;
  farmId!: number;
  farm?: IFarm;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private farmerProductsService: ProductsService,
    public farmsService: FarmsService,
  ) {}

  ngOnInit(): void {
    this.products$ = this.route.params.pipe(
      switchMap((param) => {
        this.farmId = +param['id'];
        this.getFarm(this.farmId);
        return this.farmerProductsService.getProductsByFarmId(this.farmId);
      })
    );
  }

  getFarm(id: number) {
    return this.farmsService.getFarmById(id)
      .pipe(first())
      .subscribe((farm) => {
        this.farm = farm
        this.isLoading = false
      })
  }

}
