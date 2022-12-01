import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from "../interfaces/product.interface";
import { Categories } from "../types/types";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(initialArray: IProduct[], query: Categories[]): IProduct[] {
    if (!query.length) return initialArray;

    return initialArray.filter((product) => {
      // return product.category === query[0];
    });
  }

}
