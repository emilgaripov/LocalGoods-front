import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from "../../../../shared/interfaces/product.interface";

@Component({
  selector: 'app-farmer-product',
  templateUrl: './farmer-product.component.html',
  styleUrls: ['./farmer-product.component.scss']
})
export class FarmerProductComponent implements OnInit {
  @Input() product!: IProduct;

  constructor() {}

  ngOnInit(): void {
  }

}
