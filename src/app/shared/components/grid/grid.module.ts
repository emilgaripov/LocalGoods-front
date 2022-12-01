import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { GridItemComponent } from './grid-item/grid-item.component';
import { SortPipe } from "../../pipes/sort.pipe";
import { RouterModule } from '@angular/router';
import { FiltersComponent } from './filters/filters.component';
import { FilterPipe } from "../../pipes/filter.pipe";

@NgModule({
  declarations: [
    GridComponent,
    GridItemComponent,
    FiltersComponent,
    SortPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule],
  exports: [GridComponent]
})
export class GridModule { }
