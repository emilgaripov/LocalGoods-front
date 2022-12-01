import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from "../../interfaces/product.interface";
import { Categories, SortData } from "../../types/types";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() items: IProduct[] = [];

  filterOpened = false;
  sortData: SortData = null;
  filtersData: Categories[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  onSort(value: string) {
    switch (value) {
      case 'nameAsc':
        this.sortData = { sortBy: 'name', sortDirection: 'asc' };
        break;
      case 'nameDesc':
        this.sortData = { sortBy: 'name', sortDirection: 'desc' };
        break;
      default:
      this.sortData = null;
    }
  }

  filterOpen(event: any){
    this.filterOpened = event
  }
}
