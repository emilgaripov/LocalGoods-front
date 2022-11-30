import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { IFarm } from '../../interfaces/farm.interface';
import { IProduct } from "../../interfaces/product.interface";
import { SortData } from "../../types/types";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() items$!: Observable<IProduct[]>;

  filterOpened = false;
  sortData: SortData = null;

  constructor() { }

  ngOnInit(): void {
  }

  onSort(sort: HTMLSelectElement) {
    switch (sort.value) {
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
}
