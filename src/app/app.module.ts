import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminModule } from './@admin/pages/admin.module';
import { PublicModule } from './@public/pages/public.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* import { ErrorComponent } from './error2/error.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
 */
const COMPONENTS = [
  /* HomeComponent,
  ErrorComponent,
  NavbarComponent,
  FooterComponent */
]

const MODULES = [ 
  AdminModule,
  PublicModule
]

@NgModule({

  declarations: [
    AppComponent,
    ...COMPONENTS
  ],

  imports: [
    BrowserModule,
    ...MODULES,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,    
  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }
