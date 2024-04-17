import { Component } from '@angular/core';
import { Workflow} from "../../../models/workflow.model";
import {WorkflowsService} from "../../../services/workflows.service";
import {map, Observable, Subject, takeUntil} from "rxjs";


@Component({
  selector: 'app-workflows',
  templateUrl: './workflows.component.html',
  styleUrls: ['./workflows.component.scss']
})
export class WorkflowsComponent {
  public workflows : Workflow[] = []
  private unsubscribe$ : Subject<void> = new Subject()
  constructor(private workflowService : WorkflowsService) {
    this.getworkflows().subscribe()
    console.log(this.workflows)
  }

  private getworkflows() : Observable<Workflow[]>{
    return this.workflowService.getWorkflows().pipe(takeUntil(this.unsubscribe$) , map((data : Workflow[]) => (this.workflows = data)) )
  }

}

