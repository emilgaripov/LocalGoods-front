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
  isModalOpened = false;
  farmId!: number;

  constructor(
    private route: ActivatedRoute,
    private farmerProductsService: FarmerProductsService
  ) {}

  ngOnInit(): void {
    this.products$ = this.route.params.pipe(
      switchMap((param) => {
        this.farmId = +param['id'];
        return this.farmerProductsService.getProductsByFarmId(this.farmId);
      }
    ));
  }

  openModal() {
    this.isModalOpened = true;
  }

  closeModal() {
    this.isModalOpened = false;
  }

  onAddProduct(value: { productName: string, productDescription: string }) {
    if (!value.productName || !value.productDescription) return;

    const newProduct: IProduct = {
      id: 0,
      farmId: this.farmId,
      name: value.productName,
      description: value.productDescription,
      image: ''
    };
    this.farmerProductsService.createProduct(newProduct);
    this.closeModal();
  }
}
