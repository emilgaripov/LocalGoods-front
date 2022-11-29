import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from "../../../interfaces/product.interface";

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {
  @Input() item!: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
