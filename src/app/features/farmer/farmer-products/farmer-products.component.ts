import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { FarmerService } from "../farmer.service";

@Component({
  selector: 'app-farmer-products',
  templateUrl: './farmer-products.component.html',
  styleUrls: ['./farmer-products.component.scss']
})
export class FarmerProductsComponent implements OnInit {
  products$!: Observable<any>;


  constructor(
    private route: ActivatedRoute,
    private farmerService: FarmerService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.products$ = this.farmerService.getProductsByFarmId(+param['id']);
    });
  }



}
