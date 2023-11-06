import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgUiComponent } from './projects/components/ng-ui/ng-ui.component';

const routes: Routes = [
  { path: '', title: 'Home | Kaz Monroy', component: HomeComponent },

  {
    path: 'about',
    title: 'About | Kaz Monroy',
    loadComponent: () =>
      import('./about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: 'projects',
    title: 'Projects | Kaz Monroy',
    loadComponent: () =>
      import('./projects/projects.component').then((c) => c.ProjectsComponent),
    children: [],
  },

  {
    path: 'projects/noter',
    title: 'Noter',
    loadComponent: () =>
      import('./projects/components/noter/noter.component').then(
        (c) => c.NoterComponent
      ),
  },
  {
    path: 'projects/opal',
    title: 'Opal',
    loadComponent: () =>
      import('./projects/components/opal/opal.component').then(
        (c) => c.OpalComponent
      ),
  },
  {
    path: 'projects/ng-ui',
    title: 'ngUI',
    loadComponent: () =>
      import('./projects/components/ng-ui/ng-ui.component').then(
        (c) => c.NgUiComponent
      ),
  },
  {
    path: 'projects/spire',
    title: 'Spire',
    loadComponent: () =>
      import('./projects/components/spire/spire.component').then(
        (c) => c.SpireComponent
      ),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '**',
    title: 'Page Not Found | Kaz Monroy ',
    loadComponent: () =>
      import('./page-not-found/page-not-found.component').then(
        (c) => c.PageNotFoundComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
