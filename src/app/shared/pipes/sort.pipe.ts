import { Pipe, PipeTransform } from '@angular/core';
import { SortData } from "../types/types";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform<T>(initialArray: T[], sortData: SortData): T[] {
    if (!initialArray.length) return [];
    if (!sortData) return [...initialArray];

    const compare = (a: any, b: any) => {
      if (sortData.sortDirection === 'asc') {
        if (a[sortData.sortBy] > b[sortData.sortBy]) return 1;
        if (a[sortData.sortBy] < b[sortData.sortBy]) return -1;
        return 0;
      }

      if (a[sortData.sortBy] > b[sortData.sortBy]) return -1;
      if (a[sortData.sortBy] < b[sortData.sortBy]) return 1;
      return 0;
    }

    return [...initialArray.sort(compare)];
  }

}
