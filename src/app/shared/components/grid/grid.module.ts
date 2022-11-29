import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { GridItemComponent } from './grid-item/grid-item.component';
import { SortPipe } from "../../pipes/sort.pipe";

@NgModule({
  declarations: [
    GridComponent,
    GridItemComponent,
    SortPipe
  ],
  imports: [CommonModule,],
  exports: [GridComponent]
})
export class GridModule { }
