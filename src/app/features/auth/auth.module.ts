import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthUserComponent } from './auth-user/auth-user.component';
import { AuthFarmerComponent } from './auth-farmer/auth-farmer.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AuthComponent,
    AuthUserComponent,
    AuthFarmerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AuthComponent }])
  ]
})
export class AuthModule { }
