import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Categories, SortData } from "../../types/types";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent {
  @Input() items: any[]  = [];

  filterOpened = false;
  sortData: SortData = null;
  filtersData: Categories[] = [];

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
