import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform<T>(initialArray: T[], searchValue: string): T[] {
    if (!searchValue) return initialArray;

    return [...initialArray.filter((item: any) => {
      return item['name'].toLowerCase().includes(searchValue.trim().toLowerCase());
    })];
  }

}
