import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Segment } from "../models/segment.model";

@Injectable({
  providedIn: 'root'
})
export class SegmentsService {

  public segments: Segment[] = [
    { id: 1, nom: "Segment 1", critere: "Critère du segment 1" },
    { id: 2, nom: "Segment 2", critere: "Critère du segment 2" },
    { id: 3, nom: "Segment 3", critere: "Critère du segment 3" },
    { id: 4, nom: "Segment 4", critere: "Critère du segment 4" },
    { id: 5, nom: "Segment 5", critere: "Critère du segment 5" },
    { id: 6, nom: "Segment 6", critere: "Critère du segment 6" },
    { id: 7, nom: "Segment 7", critere: "Critère du segment 7" },
    { id: 8, nom: "Segment 8", critere: "Critère du segment 8" },
    { id: 9, nom: "Segment 9", critere: "Critère du segment 9" },
    { id: 10, nom: "Segment 10", critere: "Critère du segment 10" },
    { id: 11, nom: "Segment 11", critere: "Critère du segment 11" },
    { id: 12, nom: "Segment 12", critere: "Critère du segment 12" },
    { id: 13, nom: "Segment 13", critere: "Critère du segment 13" },
    { id: 14, nom: "Segment 14", critere: "Critère du segment 14" },
    { id: 15, nom: "Segment 15", critere: "Critère du segment 15" },
    { id: 16, nom: "Segment 16", critere: "Critère du segment 16" },
    { id: 17, nom: "Segment 17", critere: "Critère du segment 17" },
    { id: 18, nom: "Segment 18", critere: "Critère du segment 18" },
    { id: 19, nom: "Segment 19", critere: "Critère du segment 19" },
    { id: 20, nom: "Segment 20", critere: "Critère du segment 20" },
    { id: 21, nom: "Segment 21", critere: "Critère du segment 21" },
    { id: 22, nom: "Segment 22", critere: "Critère du segment 22" },
    { id: 23, nom: "Segment 23", critere: "Critère du segment 23" },
    { id: 24, nom: "Segment 24", critere: "Critère du segment 24" },
    { id: 25, nom: "Segment 25", critere: "Critère du segment 25" },
    { id: 26, nom: "Segment 26", critere: "Critère du segment 26" },
    { id: 27, nom: "Segment 27", critere: "Critère du segment 27" },
    { id: 28, nom: "Segment 28", critere: "Critère du segment 28" },
    { id: 29, nom: "Segment 29", critere: "Critère du segment 29" },
    { id: 30, nom: "Segment 30", critere: "Critère du segment 30" }
  ];

  constructor() { }

  public getSegments(): Observable<Segment[]> {
    return of(this.segments);
  }

}
