import { Component } from '@angular/core';
import {Utilisateur} from "../../../models/utilisateur.model";
import {map, Observable, Subject, takeUntil} from "rxjs";
import {UtilisateursService} from "../../../services/utilisateurs.service";
import {Role} from "../../../models/role.model";
import {RolesService} from "../../../services/roles.service";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {
  public roles : Role[] = []
  private unsubscribe$ : Subject<void> = new Subject()
  constructor(private rolesService : RolesService) {
    this.getRoles().subscribe()
    console.log(this.roles)
  }

  private getRoles() : Observable<Role[]>{
    return this.rolesService.getRoles().pipe(takeUntil(this.unsubscribe$) , map((data : Role[]) => (this.roles = data)) )
  }

}
