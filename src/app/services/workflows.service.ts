import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Workflow } from "../models/workflow.model";

@Injectable({
  providedIn: 'root'
})
export class WorkflowsService {

  public workflows: Workflow[] = [
    { id: 1, nom: "Workflow 1", description: "Description du workflow 1", regles: "Règles du workflow 1", declencher: "Déclencheur du workflow 1", action: "Action du workflow 1" },
    { id: 2, nom: "Workflow 2", description: "Description du workflow 2", regles: "Règles du workflow 2", declencher: "Déclencheur du workflow 2", action: "Action du workflow 2" },
    { id: 3, nom: "Workflow 3", description: "Description du workflow 3", regles: "Règles du workflow 3", declencher: "Déclencheur du workflow 3", action: "Action du workflow 3" },
    { id: 4, nom: "Workflow 4", description: "Description du workflow 4", regles: "Règles du workflow 4", declencher: "Déclencheur du workflow 4", action: "Action du workflow 4" },
    { id: 5, nom: "Workflow 5", description: "Description du workflow 5", regles: "Règles du workflow 5", declencher: "Déclencheur du workflow 5", action: "Action du workflow 5" },
    { id: 6, nom: "Workflow 6", description: "Description du workflow 6", regles: "Règles du workflow 6", declencher: "Déclencheur du workflow 6", action: "Action du workflow 6" },
    { id: 7, nom: "Workflow 7", description: "Description du workflow 7", regles: "Règles du workflow 7", declencher: "Déclencheur du workflow 7", action: "Action du workflow 7" },
    { id: 8, nom: "Workflow 8", description: "Description du workflow 8", regles: "Règles du workflow 8", declencher: "Déclencheur du workflow 8", action: "Action du workflow 8" },
    { id: 9, nom: "Workflow 9", description: "Description du workflow 9", regles: "Règles du workflow 9", declencher: "Déclencheur du workflow 9", action: "Action du workflow 9" },
    { id: 10, nom: "Workflow 10", description: "Description du workflow 10", regles: "Règles du workflow 10", declencher: "Déclencheur du workflow 10", action: "Action du workflow 10" },
    { id: 11, nom: "Workflow 11", description: "Description du workflow 11", regles: "Règles du workflow 11", declencher: "Déclencheur du workflow 11", action: "Action du workflow 11" },
    { id: 12, nom: "Workflow 12", description: "Description du workflow 12", regles: "Règles du workflow 12", declencher: "Déclencheur du workflow 12", action: "Action du workflow 12" },
    { id: 13, nom: "Workflow 13", description: "Description du workflow 13", regles: "Règles du workflow 13", declencher: "Déclencheur du workflow 13", action: "Action du workflow 13" },
    { id: 14, nom: "Workflow 14", description: "Description du workflow 14", regles: "Règles du workflow 14", declencher: "Déclencheur du workflow 14", action: "Action du workflow 14" },
    { id: 15, nom: "Workflow 15", description: "Description du workflow 15", regles: "Règles du workflow 15", declencher: "Déclencheur du workflow 15", action: "Action du workflow 15" },

  ];

  constructor() { }

  public getWorkflows(): Observable<Workflow[]> {
    return of(this.workflows); // Retourne directement le tableau de workflows encapsulé dans un Observable
  }

  public postWorkflow() {
    // Implémentez votre logique de POST ici...
  }

  public deleteWorkflow() {
    // Implémentez votre logique de suppression ici...
  }
}
