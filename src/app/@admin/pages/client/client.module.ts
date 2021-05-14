import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { CreateComponent, EditComponent, DetailsComponent, ListComponent } from './components/index';
import { ClientComponent } from './container/client/client.component';

const COMPONENTS = [
  CreateComponent,
  EditComponent,
  DetailsComponent,
  ListComponent
];

const CONTAINER = [
  ClientComponent
];

const MODULES = [
  CommonModule,
  ClientRoutingModule
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...CONTAINER
  ],

  imports: [
    ...MODULES
  ],

  /* exports: [
    ...COMPONENTS,
    ...CONTAINER
  ], */

})
export class ClientModule { }
