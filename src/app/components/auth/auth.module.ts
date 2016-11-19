import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './auth.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthFormComponent } from './auth-form/auth-form.component';

@NgModule({
  imports: [
    routing,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthFormComponent
  ],
  providers: [
  ]
})
export class AuthModule {
}