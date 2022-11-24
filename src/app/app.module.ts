import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { HomeModule } from "./features/home/home.module";
import { FarmerModule } from "./features/farmer/farmer.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    FarmerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
