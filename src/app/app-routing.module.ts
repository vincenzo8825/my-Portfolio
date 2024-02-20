import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
// Rimuovi l'import di ProjectsComponent poiché verrà caricato in modo asincrono
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about-me', component: AboutMeComponent },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
  }, // Modifica qui per il lazy loading
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
