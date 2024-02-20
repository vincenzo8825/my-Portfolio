import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component'; // Assicurati che il percorso sia corretto

const routes: Routes = [
  { path: '', component: ProjectsComponent } // Quando si naviga verso 'projects', questo componente verrà mostrato
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
