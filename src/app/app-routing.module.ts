import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './@public/pages/home/home.component';

const routes: Routes = [
   {path: 'home', component: HomeComponent},
  /*{path: 'public/error', component: ErrorComponent}, */

  {path: '', redirectTo: 'home' , pathMatch: 'full'},  // determinada para cuando se carga la app
  {path: '**', redirectTo: 'error' , pathMatch: 'full'},  // comodin determinada por si n o coincide ninguna direccion y siempre al final,+

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {useHash:true,
      scrollPositionRestoration:'enabled'})],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
