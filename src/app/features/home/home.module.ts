import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home.component';
import { SlideComponent } from './slide/slide.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { ProductCategoryComponent } from './product-categories/product-category/product-category.component';
import { MapComponent } from './map/map.component';
import { TopFarmsComponent } from './top-farms/top-farms.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    HomeComponent,
    SlideComponent,
    ProductCategoriesComponent,
    ProductCategoryComponent,
    MapComponent,
    TopFarmsComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB69y9kTzIpVJalAsXsQoz8p4ZT682oo6k'
    })
  ]
})
export class HomeModule { }
