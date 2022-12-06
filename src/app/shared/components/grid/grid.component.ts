import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categories, SortData } from "../../types/types";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit {
  @Input() items: any  = [];

  filterOpened = false;
  sortData: SortData = null;
  filtersData: Categories[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(){
    if (!this.route.snapshot.queryParams['category']) return;
    this.filtersData.push(this.route.snapshot.queryParams['category'])
    console.log(this.filtersData);
  }

  onSort(value: string) {
    switch (value) {
      case 'nameAsc':
        this.sortData = { sortBy: 'name', sortDirection: 'asc' };
        break;
      case 'nameDesc':
        this.sortData = { sortBy: 'name', sortDirection: 'desc' };
        break;
      case 'priceAsc':
        this.sortData = { sortBy: 'price', sortDirection: 'asc' };
        break;
      case 'priceDesc':
        this.sortData = { sortBy: 'price', sortDirection: 'desc' };
        break;
      default:
      this.sortData = null;
    }
  }

  filterOpen(event: any){
    this.filterOpened = event
  }
}
