import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable, switchMap } from "rxjs";
import { IProduct } from "../../../shared/interfaces/product.interface";
import { ProductsService } from "../../../shared/services/products.service";
import { CategoriesService } from "../../../shared/services/categories.service";
import { ICategory } from "../../../shared/interfaces/category.interface";

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
  categoriesList: ICategory[] = [];

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
        return this.productsService.getProductsByFarmId(this.farmId);
      })
    );
  }

  openModal() {
    this.isModalOpened = true;
  }

  closeModal() {
    this.isModalOpened = false;
  }

  onAddProduct(value: { productName: string, productDescription: string }) {
    if (!value.productName || !value.productDescription) return;

    // const newProduct: IProduct = {
    //   id: 0,
    //   farmId: this.farmId,
    //   name: value.productName,
    //   description: value.productDescription,
    //   image: ''
    // };
    // this.farmerProductsService.createProduct(newProduct);
    this.closeModal();
  }
}
