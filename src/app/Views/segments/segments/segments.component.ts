import { Component } from '@angular/core';
import {map, Observable, Subject, takeUntil} from "rxjs";
import {Segment} from "../../../models/segment.model";
import {SegmentsService} from "../../../services/segments.service";

@Component({
  selector: 'app-segments',
  templateUrl: './segments.component.html',
  styleUrls: ['./segments.component.scss']
})
export class SegmentsComponent {
  public segments : Segment[] = []
  private unsubscribe$ : Subject<void> = new Subject()
  constructor(private segmentService : SegmentsService) {
    this.getSegments().subscribe()
    console.log(this.segments)
  }

  private getSegments() : Observable<Segment[]>{
    return this.segmentService.getSegments().pipe(takeUntil(this.unsubscribe$) , map((data : Segment[]) => (this.segments = data)) )
  }


}
