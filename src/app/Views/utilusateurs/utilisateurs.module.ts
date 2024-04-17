import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateursRoutingModule } from './utilisateurs-routing.module';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import {DxDataGridModule} from "devextreme-angular";
import {MatTableModule} from "@angular/material/table";
import {SharedModule} from "../../shared/shared.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";



@NgModule({
  declarations: [
    UtilisateursComponent
  ],
  imports: [
    CommonModule,
    UtilisateursRoutingModule,
    DxDataGridModule,
    MatTableModule,
      MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule,
    SharedModule,

  ]
})
export class UtilisateursModule { }
