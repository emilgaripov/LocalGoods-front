import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GridComponent } from './grid.component';
import { GridItemComponent } from './grid-item/grid-item.component';
import { FiltersComponent } from './filters/filters.component';

import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    GridComponent,
    GridItemComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  exports: [GridComponent]
})
export class GridModule { }
