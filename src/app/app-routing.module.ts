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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
