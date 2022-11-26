import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home.component';
import { SlideComponent } from './slide/slide.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { ProductCategoryComponent } from './product-categories/product-category/product-category.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    HomeComponent,
    SlideComponent,
    ProductCategoriesComponent,
    ProductCategoryComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }])
  ]
})
export class HomeModule { }
