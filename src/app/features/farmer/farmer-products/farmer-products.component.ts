import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable, switchMap } from "rxjs";
import { IProduct } from "../../../shared/interfaces/product.interface";
import { ProductsService } from "../../../shared/services/products.service";
import { CategoriesService } from "../../../shared/services/categories.service";
import { ICategory } from "../../../shared/interfaces/category.interface";
import { ProductFormData } from "../../../shared/types/types";

@Component({
  selector: 'app-farmer-products',
  templateUrl: './farmer-products.component.html',
  styleUrls: ['./farmer-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FarmerProductsComponent implements OnInit {
  products$!: Observable<IProduct[]>;
  farmId!: number;
  categoriesList: ICategory[] = [];
  isModalAddOpened = false;

  // image upload
  fileName = '';

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.categoriesList = this.categoriesService.categories;
    this.products$ = this.route.params.pipe(
      switchMap((param) => {
        this.farmId = +param['id'];
        this.productsService.getProductsByFarmId(this.farmId);
        return this.productsService.farmerFarmProducts$;
      })
    );
  }

  onAddProduct(newProductData: ProductFormData) {
    const newProduct: IProduct = {
      ...newProductData,
      farmId: this.farmId
    };
    console.log(newProduct);

    this.productsService.createProduct(this.farmId, newProduct);
    this.isModalAddOpened = false;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.fileName = file ? file.name : '';
  }
}
