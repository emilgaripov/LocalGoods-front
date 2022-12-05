import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'farmer', loadChildren: () => import('./features/farmer/farmer.module').then(m => m.FarmerModule) },
  { path: 'products', loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule) },
  { path: 'farm', loadChildren: () => import('./features/farm/farm.module').then(m => m.FarmModule) },
  { path: 'farms', loadChildren: () => import('./features/farms/farms.module').then(m => m.FarmsModule) },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
