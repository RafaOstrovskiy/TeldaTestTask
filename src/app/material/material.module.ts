import { NgModule } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTableModule} from "@angular/material/table";
import {MatSnackBarModule} from "@angular/material/snack-bar";



@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatTableModule,
    MatSnackBarModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatTableModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
