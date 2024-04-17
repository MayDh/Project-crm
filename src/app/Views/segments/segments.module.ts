import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegmentsRoutingModule } from './segments-routing.module';
import { SegmentsComponent } from './segments/segments.component';
import {DxDataGridModule} from "devextreme-angular";


@NgModule({
  declarations: [
    SegmentsComponent
  ],
    imports: [
        CommonModule,
        SegmentsRoutingModule,
        DxDataGridModule
    ]
})
export class SegmentsModule { }
