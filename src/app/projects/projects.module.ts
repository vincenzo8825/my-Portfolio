import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module'; // Importa il modulo di routing
import { ProjectsComponent } from './projects.component'; // Assicurati che il percorso sia corretto
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Aggiungi questa riga

@NgModule({
  declarations: [ProjectsComponent], // Dichiarare il componente qui
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    NgbModule // Aggiungi il routing al modulo
  ]
})
export class ProjectsModule { }
