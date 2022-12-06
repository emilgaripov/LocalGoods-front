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
export class FarmComponent implements OnInit, OnDestroy {
  products$!: Observable<IProduct[]>;
  farm!: IFarm;
  isLoading = true;
  subscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private farmsService: FarmsService,
  ) {}

  ngOnInit(): void {
    this.products$ = this.route.params.pipe(
      switchMap((param) => {
        const farmId = +param['id'];
        this.getFarm(farmId);
        return this.productsService.getProductsByFarmId(farmId);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getFarm(id: number) {
    this.subscription = this.farmsService.getFarmById(id).subscribe({
      next: (farm) => this.farm = farm
    });
  }

}
