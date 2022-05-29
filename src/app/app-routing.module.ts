import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {AuthorizationPageComponent} from "./authorization-page/authorization-page.component";
import {AuthenticationGuard} from "./helpers/authentication-guard.service";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'auth',
    component: AuthorizationPageComponent,
    canActivate: [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
