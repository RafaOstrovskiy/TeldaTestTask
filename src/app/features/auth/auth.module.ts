import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as fromComponents from './components';
import {MaterialModule} from "../../material/material.module";

@NgModule({
  declarations: [...fromComponents.components],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule],
  exports: [...fromComponents.components]
})
export class AuthModule {}
