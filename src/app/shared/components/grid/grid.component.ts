import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SortData } from "../../types/types";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnDestroy {
  @Input() items: any  = [];

  filterOpened = false;
  sortData: SortData = null;
  filtersData: string[] = [];
  private subscription!: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.route.queryParams.subscribe({
      next: (params) => {
        const filterParams = params as {categories: string};
        if ('categories' in filterParams) {
          this.filtersData = filterParams.categories.split(',');
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openFilters() {
    this.filterOpened = true;
  }

  closeFilters(event: false) {
    this.filterOpened = event;
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
}
