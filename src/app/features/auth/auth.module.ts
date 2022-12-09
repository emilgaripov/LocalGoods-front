import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    RegisterModule,
    RouterModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
