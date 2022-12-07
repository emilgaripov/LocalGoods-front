import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IProduct } from "../../../../shared/interfaces/product.interface";
import { ProductsService } from "../../../../shared/services/products.service";
import { categories } from "../../../../shared/types/types";

@Component({
  selector: 'app-farmer-product',
  templateUrl: './farmer-product.component.html',
  styleUrls: ['./farmer-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FarmerProductComponent {
  @Input() product!: IProduct;
  isModalOpened = false;
  categoriesList = [...categories];

  constructor(private productsService: ProductsService) {}

  onDeleteProduct() {
    // this.farmerProductsService.deleteProduct(this.product.id);
  }

  openModal() {
    this.isModalOpened = true;
  }

  closeModal() {
    this.isModalOpened = false;
  }

  onEditProduct(value: { productName: string, productDescription: string }) {
    if (!value.productName || !value.productDescription) return;

    // const newProduct: IProduct = {
    //   id: this.product.id,
    //   farmId: this.product.farmId,
    //   name: value.productName,
    //   description: value.productDescription,
    //   image: ''
    // };
    // this.farmerProductsService.editProduct(newProduct);
    this.closeModal();
  }
}
