import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { IProduct } from "../../shared/interfaces/product.interface";
import { ProductsService } from "../../shared/services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  host: {
    class: 'grow-container'
  }
})
export class ProductsComponent implements OnInit {
  products$!: Observable<IProduct[]>;

  constructor(private farmerProductsService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.farmerProductsService.getAllProducts;
  }

}
