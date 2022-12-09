import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from "../../../interfaces/category.interface";
import { CategoriesService } from "../../../services/categories.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() filtersClosed = new EventEmitter<false>();

  categoriesList: ICategory[] = [];
  checkedCategories: string[] = [];
  private subscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriesService: CategoriesService,
  ) {}

  ngOnInit(): void {
    this.categoriesList = this.categoriesService.categories;

    this.subscription = this.route.queryParams.subscribe({
      next: (params) => {
        const filterParams = params as {categories: string};
        if ('categories' in filterParams) {
          this.checkedCategories = filterParams.categories.split(',');
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  closeFilters() {
    this.filtersClosed.emit(false);
  }

  onCheck(category: string) {
    if (this.checkedCategories.includes(category)) {
      const i = this.checkedCategories.indexOf(category);
      this.checkedCategories.splice(i, 1);
    } else {
      this.checkedCategories.push(category);
    }
  }

  onCheckAll(isChecked: boolean) {
    this.checkedCategories = isChecked ? this.categoriesList.map(cat => cat.name) : [];
  }

  applyFilter() {
    this.router.navigate(
      [],
      { queryParams: { categories: this.checkedCategories.toString() } }
    );

    if(window.innerWidth <= 1024){
      this.closeFilters();
    }
  }

  clearFilters() {
    this.checkedCategories = [];
    this.router.navigate(
      [],
      { queryParams: { } }
    );
    if(window.innerWidth < 1024){
      this.closeFilters();
    }
  }

}
