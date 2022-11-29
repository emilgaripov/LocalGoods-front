import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { GridModule } from 'src/app/shared/components/grid/grid.module';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    RouterModule.forChild([{ path: '', component: ProductsComponent }])
  ]
})
export class ProductsModule { }
