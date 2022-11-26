import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable, switchMap } from "rxjs";
import { IProduct } from "../../../shared/interfaces/product.interface";
import { FarmerProductsService } from "./farmer-products.service";

@Component({
  selector: 'app-farmer-products',
  templateUrl: './farmer-products.component.html',
  styleUrls: ['./farmer-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FarmerProductsComponent implements OnInit {
  products$!: Observable<IProduct[]>;

  constructor(
    private route: ActivatedRoute,
    private farmerProductsService: FarmerProductsService
  ) {}

  ngOnInit(): void {
    this.products$ = this.route.params.pipe(
      switchMap((param) => {
        return this.farmerProductsService.getProductsByFarmId(+param['id']);
      }
    ));
  }

}
