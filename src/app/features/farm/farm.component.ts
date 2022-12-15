import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';

import { IFarm } from 'src/app/shared/interfaces/farm.interface';
import { IProduct } from 'src/app/shared/interfaces/product.interface';

import { FarmsService } from 'src/app/shared/services/farms.service';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
    this.farmProducts$ = this.productsService.farmerFarmProducts$;
    this.farm$ = this.route.params.pipe(
      switchMap((param) => {
        this.isLoading = false;
        this.farmId = +param['id'];
        return this.farmsService.getFarmById(this.farmId).pipe(
          tap(() => this.productsService.getProductsByFarmId(this.farmId))
        );
      })
    );
  }

}
