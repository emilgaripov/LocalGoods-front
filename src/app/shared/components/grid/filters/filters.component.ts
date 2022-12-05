import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { categories, Categories } from "../../../types/types";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent {
  @Input() filterOpened = false;
  @Input() filtersData!: Categories[];
  @Output() isFilter = new EventEmitter<boolean>();
  @Output() filters = new EventEmitter<Categories[]>();

  categoriesList = [...categories];
  checkedCategories: Categories[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){}

  closeFilters() {
    this.filterOpened = false;
    this.isFilter.emit(this.filterOpened);
  }

  onCheck(category: Categories) {
    this.checkedCategories = [...this.filtersData]
    if (this.checkedCategories.includes(category)) {
      const i = this.checkedCategories.indexOf(category);
      this.checkedCategories.splice(i, 1);
    } else {
      this.checkedCategories.push(category);
    }
  }

  onCheckAll(isChecked: boolean) {
    this.checkedCategories = isChecked ? [...this.categoriesList] : [];
  }
  

  applyFilter() {
    this.filters.emit(this.checkedCategories);
    this.router.navigate(
      ['.'], 
      { relativeTo: this.route, queryParams: { } }
    );
    this.closeFilters();
  }

  clearFilters(){
    this.checkedCategories = []
    this.router.navigate(
      ['.'], 
      { relativeTo: this.route, queryParams: { } }
    );
    this.filters.emit(this.checkedCategories);
  }
}
