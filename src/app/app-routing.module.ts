import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';
import { UsersComponent } from './layouts/users/users.component';
import { DashboardComponent } from './Views/dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'admin', component:AdminComponent} ,
  {path: '', component:UsersComponent ,
    children: [
        {path: 'dashboard' , loadChildren: ()=> import('./Views/dashboard/dashboard.module').then(m => m.DashboardModule) },
        {path: 'utilisateurs' , loadChildren: ()=> import('./Views/utilusateurs/utilisateurs.module').then(m => m.UtilisateursModule) },
        {path: 'roles' , loadChildren: ()=> import('./Views/roles/roles.module').then(m => m.RolesModule) },
        {path: 'emails' , loadChildren: ()=> import('./Views/emails/emails.module').then(m => m.EmailsModule) },
        {path: 'segments' , loadChildren: ()=> import('./Views/segments/segments.module').then(m => m.SegmentsModule) },
        {path: 'profils' , loadChildren: ()=> import('./Views/profils/profils.module').then(m => m.ProfilsModule) },
        {path: 'workflows' , loadChildren: ()=> import('./Views/workflows/workflows.module').then(m => m.WorkflowsModule) },
      {path: 'settings' , loadChildren: ()=> import('./Views/settings/settings.module').then(m => m.SettingsModule) },

    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
