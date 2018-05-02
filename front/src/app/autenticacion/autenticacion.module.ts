import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    SharedModule
  ],
  declarations: [SigninComponent, SignupComponent]
})
export class AutenticacionModule { }
