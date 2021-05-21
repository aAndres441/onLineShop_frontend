import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HeaderComponent } from '@shop-core/components/header/header.component';
import { NavbarComponent } from '@shop-core/components/navbar/navbar.component';
import { FooterComponent } from '@shop-core/components/footer/footer.component';

const COMPONENTS = [
  PublicComponent,
  HeaderComponent,
  NavbarComponent,
  FooterComponent
];

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
