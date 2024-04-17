import {Component, ViewChild} from '@angular/core';
import {Utilisateur} from "../../../models/utilisateur.model";
import {UtilisateursService} from "../../../services/utilisateurs.service";
import {map, Observable, Subject, takeUntil} from "rxjs";
import {DxDataGridComponent} from "devextreme-angular";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent {
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  public utilisateurs : Utilisateur[] = []
    public dataSource!: MatTableDataSource<Utilisateur>;
    public displayedColumns!: string[]
    private unsubscribe$ : Subject<void> = new Subject()
  constructor(private utilisateurService : UtilisateursService) {
      this.getUtilisateurs().subscribe()
      this.dataSource = new MatTableDataSource(this.utilisateurs);
      this.displayedColumns = ['id' , 'nom' , 'email' , 'role']
  }

  private getUtilisateurs() : Observable<Utilisateur[]>{
    return this.utilisateurService.getUtilisateurs().pipe(takeUntil(this.unsubscribe$) , map((data : Utilisateur[]) => (this.utilisateurs = data)) )
  }


   public applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }



}
