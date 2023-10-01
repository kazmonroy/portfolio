import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent },

  {
    path: 'about',
    title: 'About',
    loadComponent: () =>
      import('./about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: 'projects',
    title: 'Projects',
    loadComponent: () =>
      import('./projects/projects.component').then((c) => c.ProjectsComponent),
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
    path: '**',
    title: '404 Page Not Found',
    loadComponent: () =>
      import('./not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
