import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from "../interfaces/product.interface";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(initialArray: IProduct[], query: string[]): IProduct[] {
    if (!query.length) return initialArray;

    return initialArray.filter((product) => {
      // return query.includes(product.category!);
    });
  }

}
