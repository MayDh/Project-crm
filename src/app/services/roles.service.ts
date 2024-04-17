import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Role } from "../models/role.model";

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private roles: Role[] = [
    { id: 1, nom: "Admin" },
    { id: 2, nom: "Utilisateur" },
    { id: 3, nom: "Manager" },
    { id: 4, nom: "Admin" },
    { id: 5, nom: "Utilisateur" },
    { id: 6, nom: "Manager" },
    // Ajoutez d'autres objets de rôle ici...
  ];

  constructor() { }

  public getRoles(): Observable<Role[]> {
    return of(this.roles); // Retourne directement le tableau de rôles encapsulé dans un Observable
  }
}
