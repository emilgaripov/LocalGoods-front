import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IProduct } from "../../../../shared/interfaces/product.interface";
import { ProductsService } from "../../../../shared/services/products.service";
import { ICategory } from "../../../../shared/interfaces/category.interface";
import { CategoriesService } from "../../../../shared/services/categories.service";
import { ProductFormData } from "../../../../shared/types/types";

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

  // image upload
  fileName = '';
  file!: File;

  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.categoriesList = this.categoriesService.categories;
  }

  onDeleteProduct() {
    this.productsService.deleteProduct(this.product.id!);
    this.isModalDeleteOpened = false;
  }

  onEditProduct(updatedProductData: ProductFormData) {
    const formData = new FormData();

    formData.append('name', updatedProductData.name);
    formData.append('description', updatedProductData.description);
    formData.append('imageFile', this.file);
    formData.append('price', updatedProductData.price.toString());
    formData.append('categoryId', updatedProductData.categoryId.toString());

    this.productsService.updateProduct(this.product.id!, formData);
    this.isModalEditOpened = false;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.file = file;
    this.fileName = file ? file.name : '';
  }
}
