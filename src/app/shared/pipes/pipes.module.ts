import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPipe } from './search.pipe';
import { SortPipe } from './sort.pipe';
import { FilterPipe } from "./filter.pipe";

@NgModule({
  declarations: [
    SearchPipe,
    SortPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SearchPipe,
    SortPipe,
    FilterPipe
  ]
})
export class PipesModule { }
