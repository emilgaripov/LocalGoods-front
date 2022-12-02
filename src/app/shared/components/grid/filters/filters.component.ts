import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { categories, Categories } from "../../../types/types";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent implements OnInit {
  @Input() filterOpened = false;
  @Output() isFilter = new EventEmitter<boolean>();
  @Output() filters = new EventEmitter<Categories[]>();

  showChild = false;
  categoriesList = [...categories];
  checkedCategories: Categories[] = [];

  ngOnInit(): void {}

  closeFilters() {
    this.filterOpened = false;
    this.isFilter.emit(this.filterOpened);
  }

  onCheck(category: Categories) {
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
    console.log(this.checkedCategories);
    this.filters.emit(this.checkedCategories);
  }
}
