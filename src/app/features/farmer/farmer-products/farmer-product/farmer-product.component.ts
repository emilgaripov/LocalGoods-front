import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmer-product',
  templateUrl: './farmer-product.component.html',
  styleUrls: ['./farmer-product.component.scss']
})
export class FarmerProductComponent implements OnInit {
  @Input() product!: any;

  constructor() {}

  ngOnInit(): void {
  }

}
