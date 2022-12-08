import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IProduct } from "../../../../shared/interfaces/product.interface";
import { ProductsService } from "../../../../shared/services/products.service";
import { ICategory } from "../../../../shared/interfaces/category.interface";
import { CategoriesService } from "../../../../shared/services/categories.service";

@Component({
  selector: 'app-farmer-product',
  templateUrl: './farmer-product.component.html',
  styleUrls: ['./farmer-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FarmerProductComponent implements OnInit {
  @Input() product!: IProduct;
  categoriesList: ICategory[] = [];
  isModalEditOpened = false;
  isModalDeleteOpened = false;

  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.categoriesList = this.categoriesService.categories;
  }

  onDeleteProduct() {
    // this.productsService.deleteProduct(this.product.id);
    this.isModalDeleteOpened = false;
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
    this.isModalEditOpened = false;
  }
}
