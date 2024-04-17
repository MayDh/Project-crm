import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Profil } from "../models/profil.model";

@Injectable({
  providedIn: 'root'
})
export class ProfilsService {

  public profils: Profil[] = [
    { id: 1, nom: "Profil 1", type: "Type 1", adresse: "Adresse du profil 1", contact: "Contact du profil 1" },
    { id: 2, nom: "Profil 2", type: "Type 2", adresse: "Adresse du profil 2", contact: "Contact du profil 2" },
    { id: 3, nom: "Profil 3", type: "Type 3", adresse: "Adresse du profil 3", contact: "Contact du profil 3" },
    { id: 4, nom: "Profil 4", type: "Type 4", adresse: "Adresse du profil 4", contact: "Contact du profil 4" },
    { id: 5, nom: "Profil 5", type: "Type 5", adresse: "Adresse du profil 5", contact: "Contact du profil 5" },
    { id: 6, nom: "Profil 6", type: "Type 6", adresse: "Adresse du profil 6", contact: "Contact du profil 6" },
    { id: 7, nom: "Profil 7", type: "Type 7", adresse: "Adresse du profil 7", contact: "Contact du profil 7" },
    { id: 8, nom: "Profil 8", type: "Type 8", adresse: "Adresse du profil 8", contact: "Contact du profil 8" },
    { id: 9, nom: "Profil 9", type: "Type 9", adresse: "Adresse du profil 9", contact: "Contact du profil 9" },
    { id: 10, nom: "Profil 10", type: "Type 10", adresse: "Adresse du profil 10", contact: "Contact du profil 10" },
    { id: 11, nom: "Profil 11", type: "Type 11", adresse: "Adresse du profil 11", contact: "Contact du profil 11" },
    { id: 12, nom: "Profil 12", type: "Type 12", adresse: "Adresse du profil 12", contact: "Contact du profil 12" },
    { id: 13, nom: "Profil 13", type: "Type 13", adresse: "Adresse du profil 13", contact: "Contact du profil 13" },
    { id: 14, nom: "Profil 14", type: "Type 14", adresse: "Adresse du profil 14", contact: "Contact du profil 14" },
    { id: 15, nom: "Profil 15", type: "Type 15", adresse: "Adresse du profil 15", contact: "Contact du profil 15" },
    { id: 16, nom: "Profil 16", type: "Type 16", adresse: "Adresse du profil 16", contact: "Contact du profil 16" },
    { id: 17, nom: "Profil 17", type: "Type 17", adresse: "Adresse du profil 17", contact: "Contact du profil 17" },
    { id: 18, nom: "Profil 18", type: "Type 18", adresse: "Adresse du profil 18", contact: "Contact du profil 18" },
    { id: 19, nom: "Profil 19", type: "Type 19", adresse: "Adresse du profil 19", contact: "Contact du profil 19" },
    { id: 20, nom: "Profil 20", type: "Type 20", adresse: "Adresse du profil 20", contact: "Contact du profil 20" },
    { id: 21, nom: "Profil 21", type: "Type 21", adresse: "Adresse du profil 21", contact: "Contact du profil 21" },
    { id: 22, nom: "Profil 22", type: "Type 22", adresse: "Adresse du profil 22", contact: "Contact du profil 22" },
    { id: 23, nom: "Profil 23", type: "Type 23", adresse: "Adresse du profil 23", contact: "Contact du profil 23" },
    { id: 24, nom: "Profil 24", type: "Type 24", adresse: "Adresse du profil 24", contact: "Contact du profil 24" },
    { id: 25, nom: "Profil 25", type: "Type 25", adresse: "Adresse du profil 25", contact: "Contact du profil 25" },
    { id: 26, nom: "Profil 26", type: "Type 26", adresse: "Adresse du profil 26", contact: "Contact du profil 26" },
    { id: 27, nom: "Profil 27", type: "Type 27", adresse: "Adresse du profil 27", contact: "Contact du profil 27" },
    { id: 28, nom: "Profil 28", type: "Type 28", adresse: "Adresse du profil 28", contact: "Contact du profil 28" },
    { id: 29, nom: "Profil 29", type: "Type 29", adresse: "Adresse du profil 29", contact: "Contact du profil 29" },
    { id: 30, nom: "Profil 30", type: "Type 30", adresse: "Adresse du profil 30", contact: "Contact du profil 30" },
  ];

  constructor() { }

  public getProfils(): Observable<Profil[]> {
    return of(this.profils);
  }
  public postProfi() {
    // Implémentez votre logique de POST ici...
  }

  public deleteProfil() {
    // Implémentez votre logique de suppression ici...
  }
}
