import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, switchMap } from 'rxjs';

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
  farm$!: Observable<IFarm>;
  farmProducts$!: Observable<IProduct[]>;
  farmId!: number;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private farmsService: FarmsService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.farm$ = this.route.params.pipe(
      switchMap((param) => {
        this.isLoading = false;
        this.farmId = +param['id'];
        this.productsService.getProductsByFarmId(this.farmId);
        return this.farmsService.getFarmById(this.farmId);
      })
    );
    this.farmProducts$ = this.productsService.farmerFarmProducts$;
  }

}
