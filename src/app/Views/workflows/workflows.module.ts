import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowsRoutingModule } from './workflows-routing.module';
import { WorkflowsComponent } from './workflows/workflows.component';
import {DxDataGridModule} from "devextreme-angular";


@NgModule({
  declarations: [
    WorkflowsComponent
  ],
  imports: [
    CommonModule,
    WorkflowsRoutingModule,
    DxDataGridModule
  ]
})
export class WorkflowsModule { }
