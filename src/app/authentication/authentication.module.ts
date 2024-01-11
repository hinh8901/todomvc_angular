import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
})
export class AuthenticationModule {}
