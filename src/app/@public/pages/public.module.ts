import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';

const COMPONENTS = [PublicComponent];

const MODULES = [CommonModule, PublicRoutingModule];

@NgModule({

  declarations: [
    ...COMPONENTS
  ],

  imports: [
    ...MODULES,
  ]

})

export class PublicModule { }
