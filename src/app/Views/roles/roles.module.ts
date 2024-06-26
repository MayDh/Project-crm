import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles/roles.component';
import {DxDataGridModule} from "devextreme-angular";


@NgModule({
  declarations: [
    RolesComponent
  ],
    imports: [
        CommonModule,
        RolesRoutingModule,
        DxDataGridModule
    ]
})
export class RolesModule { }
