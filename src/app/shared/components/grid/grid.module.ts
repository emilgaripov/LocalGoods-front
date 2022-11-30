import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { GridItemComponent } from './grid-item/grid-item.component';
import { SortPipe } from "../../pipes/sort.pipe";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    GridComponent,
    GridItemComponent,
    SortPipe
  ],
  imports: [
    CommonModule,
    RouterModule],
  exports: [GridComponent]
})
export class GridModule { }
