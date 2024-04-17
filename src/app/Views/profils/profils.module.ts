import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilsRoutingModule } from './profils-routing.module';
import { ProfilsComponent } from './profils/profils.component';
import {DxDataGridModule} from "devextreme-angular";


@NgModule({
  declarations: [
    ProfilsComponent
  ],
    imports: [
        CommonModule,
        ProfilsRoutingModule,
        DxDataGridModule
    ]
})
export class ProfilsModule { }
