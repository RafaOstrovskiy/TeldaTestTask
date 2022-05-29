import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {AuthorizationPageComponent} from './pages/authorization-page/authorization-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./material/material.module";
import {SharedModule} from "./shared/shared.module";
import {AuthModule} from "./features/auth/auth.module";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AuthorizationPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    AuthModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
