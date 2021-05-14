import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent, DetailsComponent, EditComponent, ListComponent } from './components/index';
import { ClientComponent } from './container/client/client.component';

const routes: Routes = [
  {path:'',component:ClientComponent},
  {path:'create',component:CreateComponent},
  {path:'details',component:DetailsComponent},
  {path:'edit',component:EditComponent},
  {path:'list',component:ListComponent},
  
  /*  {path:'',component:DetailsComponent} */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
