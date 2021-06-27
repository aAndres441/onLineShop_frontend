import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { EditComponent } from './components/edit/edit.component';
// import { EditComponent, CreateComponent, DetailsComponent, ListComponent } from './components/index';
import { ClientComponent } from './container/client/client.component';

const routes: Routes = [
 
   {path:'',component:ClientComponent,
children: [
 /* {path:'edit',component:EditComponent},
  {path:'create',component:CreateComponent},
  {path:'details',component:DetailsComponent},  
  {path:'list',component:ListComponent} */
]},
  
  
  /*  {path:'',component:DetailsComponent} */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
 