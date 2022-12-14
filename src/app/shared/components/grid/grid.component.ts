import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsType, SortData } from "../../types/types";
import { Subscription } from "rxjs";
import { CategoriesService } from "../../services/categories.service";
import { ICategory } from "../../interfaces/category.interface";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnDestroy {
  @Input() items: any  = [];
  @Input() itemsType: ItemsType = 'Farms';

  filterOpened = false;
  sortData: SortData = null;
  categoriesList: ICategory[] = [];
  filtersData: number[] = [];
  private subscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    if (window.innerWidth >= 1024) {
      this.filterOpened = true
    }

    this.categoriesList = this.categoriesService.categories;

    this.subscription = this.route.queryParams.subscribe({
      next: (params) => {
        const filterParams = params as {categories: string};
        this.filtersData = ('categories' in filterParams)
          ? this.getCategoriesIdFromNames(filterParams.categories)
          : [];
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getCategoriesIdFromNames(categoriesNames: string) {
    return categoriesNames.split(',').map((catName) => {
      const cat = this.categoriesList.find((cat) => cat.name === catName)!;
      return cat.id;
    });
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
