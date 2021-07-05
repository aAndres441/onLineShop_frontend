import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HourAccesGuard } from 'src/app/@public/guards/hour-acces.guard';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent, canActivateChild:[HourAccesGuard],
    children: [
      {
        path: '', loadChildren: () =>
          import('./dashb/dashb.module')
            .then(m => m.DashbModule)
      },
      {
        path: 'client', loadChildren: () =>
          import('./client/client.module')
            .then(m => m.ClientModule)
      }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
