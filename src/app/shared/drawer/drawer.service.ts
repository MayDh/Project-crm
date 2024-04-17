import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Navigation } from 'src/app/models/navigation';
import { DrawerConfig } from 'src/app/models/drawer-config';
Config: DrawerConfig;
@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  private drawerConfigue: DrawerConfig = {
    mode: 'shrink',
    width: 200,
    minWidth: 55,
  };
  private _drawerConfig: BehaviorSubject<DrawerConfig> =
    new BehaviorSubject<DrawerConfig>(this.drawerConfigue);
  private $drawerConfig: Observable<DrawerConfig> =
    this._drawerConfig.asObservable();
  constructor(private dataService: DataService) {}
  public getNavigationData(): Observable<Navigation[]> {
    const navigation: Navigation[] = [
      new Navigation('Dashboard', '/dashboard', 'fa-brands fa-windows'),
      new Navigation('Utilisateurs', '/utilisateurs', 'fa-solid fa-user-group'),
      new Navigation('Roles', '/roles', 'fa-solid fa-list-check'),

      new Navigation('Segments', '/segments', 'fa-solid fa-layer-group'),
      new Navigation('E-mails', '/emails', 'fa-solid fa-envelope'),
      new Navigation('Profils', '/profils', 'fa-solid fa-user'),
      new Navigation(
        'Workflows',
        '/workflows',
        'fa-solid fa-chart-simple'
      ),
      new Navigation('settings', '/settings', 'fa-solid fa-gear'),
    ];

    return of(navigation);
  }

  public getDrawerConfig(): Observable<DrawerConfig> {
    // return this.http.get<drawerConfigues>('url');
    return this.$drawerConfig;
  }

  public updateDrawerConfigue(newConfig: DrawerConfig): void {
    // this.http.post<drawerConfigues>('url', newConfig);
    // this.drawerConfigue = newConfig;
    this._drawerConfig.next(newConfig)
  }
}
