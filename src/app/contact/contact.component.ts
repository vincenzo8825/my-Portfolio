import { Component, AfterViewInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    AOS.init({ duration: 1200, once: true });
  }

  handleSubmit(event: Event): void {
    event.preventDefault(); // Previene il comportamento di invio di default del form

    // Qui puoi aggiungere qualsiasi gestione pre invio, come controlli di validazione o manipolazione dei dati del form

    // Puoi anche aggiungere qui la logica per mostrare un messaggio di conferma all'utente

    // Simulare l'invio del form per Netlify se necessario, altrimenti lasciare che il form prosegua normalmente
    // Se stai inviando il form tramite JavaScript o vuoi effettuare ulteriori azioni dopo l'invio, inseriscile qui.
    // Altrimenti, se il form deve essere inviato direttamente a Netlify, non è necessario aggiungere altre azioni qui
  }
}
