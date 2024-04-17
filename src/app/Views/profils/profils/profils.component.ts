import { Component } from '@angular/core';
import {Utilisateur} from "../../../models/utilisateur.model";
import {map, Observable, Subject, takeUntil} from "rxjs";
import {UtilisateursService} from "../../../services/utilisateurs.service";
import {Profil} from "../../../models/profil.model";
import {ProfilsService} from "../../../services/profils.service";

@Component({
  selector: 'app-profils',
  templateUrl: './profils.component.html',
  styleUrls: ['./profils.component.scss']
})
export class ProfilsComponent {
  public profils : Profil[] = []
  private unsubscribe$ : Subject<void> = new Subject()
  constructor(private profilService : ProfilsService) {
    this.getprofils().subscribe()
    console.log(this.profils)
  }

  private getprofils() : Observable<Profil[]>{
    return this.profilService.getProfils().pipe(takeUntil(this.unsubscribe$) , map((data : Profil[]) => (this.profils = data)) )
  }

}
