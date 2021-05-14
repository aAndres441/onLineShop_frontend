import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
     path: '',
    component: PublicComponent,
    children: [
      {
        path: 'home', loadChildren: () =>
          import('./home/home.module')
            .then(m => m.HomeModule)
      },
      {
        path: 'contact', loadChildren: () =>
          import('./contact/contact.module')
            .then(m => m.ContactModule)
      },
      {
        path: 'login', loadChildren: () =>
          import('./login/login.module')
            .then(m => m.LoginModule)
      },
      {
        path: 'about', loadChildren: () =>
          import('./about/about.module')
            .then(m => m.AboutModule)
      },
      {
        path: 'error', loadChildren: () =>
          import('./error/error.module')
            .then(m => m.ErrorModule)
      },
      {
        path: 'footer', loadChildren: () =>
          import('./footer/footer.module')
            .then(m => m.FooterModule)
      },
      {
        path: 'navbar', loadChildren: () =>
          import('./navbar/navbar.module')
            .then(m => m.NavbarModule)
      }
    ]
  }
];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class PublicRoutingModule { }
