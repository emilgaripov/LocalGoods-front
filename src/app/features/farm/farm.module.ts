import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from 'src/app/shared/components/grid/grid.module';
import { RouterModule } from '@angular/router';

import { FarmComponent } from './farm.component';

@NgModule({
  declarations: [
    FarmComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    RouterModule.forChild([{
      path: ':id',
      component: FarmComponent,
    }
    ])
  ]
})
export class FarmModule { }
