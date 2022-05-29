import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';
import {MaterialModule} from "../material/material.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [...fromComponents.components]
})
export class SharedModule { }
