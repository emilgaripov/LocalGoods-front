import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IProduct } from "../../../../shared/interfaces/product.interface";
import { FarmerProductsService } from "../farmer-products.service";

@Component({
  selector: 'app-farmer-product',
  templateUrl: './farmer-product.component.html',
  styleUrls: ['./farmer-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FarmerProductComponent implements OnInit {
  @Input() product!: IProduct;

  constructor(private farmerProductsService: FarmerProductsService) {}

  ngOnInit(): void {}

  onDeleteProduct() {
    this.farmerProductsService.deleteProduct(this.product.id);
  }
}
