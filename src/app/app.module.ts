import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AuthorizationPageComponent} from './authorization-page/authorization-page.component';
import {SignInFormComponent} from './sign-in-form/sign-in-form.component';
import {SignUpFormComponent} from './sign-up-form/sign-up-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./material/material.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AuthorizationPageComponent,
    SignInFormComponent,
    SignUpFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
