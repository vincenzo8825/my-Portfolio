import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import AOS from 'aos';

// Assicurati di registrare i plugin di GSAP
gsap.registerPlugin(ScrollTrigger);

interface Project {
linkedinLink: string;
  name: string;
  description: string;
  videoUrl?: string;
  imageUrl?: string;
  githubLink: string;
  technologies: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChildren('projectItem') projectItems!: QueryList<ElementRef>;

  featuredProjects: Project[] = [
    {
      name: 'Tutoring Platform',
      description: "Un innovativo progetto di tutoraggio online progettato per offrire un'esperienza educativa personalizzata e dinamica. Caratterizzato da un accesso sicuro e una vasta gamma di funzionalità, permette agli utenti di prenotare sessioni di tutoraggio, partecipare a discussioni comunitarie, lasciare recensioni, esplorare opportunità di lavoro e acquistare corsi. Sviluppato con Angular e Angular Material, offre un'esperienza utente reattiva e moderna.",
      videoUrl: '..',
      githubLink: 'https://github.com/vincenzo8825/Capstone-Project-Epicode-Front-End',
      linkedinLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7162045710983458816/',
      technologies: ['Angular', 'Typescript', 'Material', 'Node.js'] // Tecnologie utilizzate
    },

    {
      name: 'Netflix Clone',
      description: 'Un clone di Netflix che replica l\'interfaccia utente e le funzionalità principali della piattaforma di streaming. Offre un\'esperienza simile a quella dell\'originale.',
      videoUrl: '../../assets/Video WhatsApp 2024-02-19 ore 22.05.25_2695e8b8ggggggggggg.mp4',
      githubLink: 'https://github.com/vincenzo8825/fs0523-Vincenzo-Rocca/tree/main/m2/s2/progetto%20settimanale',
      linkedinLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7162100191515295745/',
      technologies: ['Bootstrap', 'Sass', 'Html', 'Javascript'] // Esempio di tecnologie utilizzate
    }

  ];
  otherProjects: Project[] = [
    {
      name: 'Weather App Clone',
      description: 'Descrizione del Weather App Clone...',
      imageUrl: 'https://picsum.photos/200',
      githubLink: 'https://github.com/utente/weatherappclone', // Assicurati che questo sia il link corretto
      linkedinLink: 'https://www.linkedin.com/in/utente', // Aggiorna con il tuo link corretto di LinkedIn
      technologies: ['Bootstrap', 'Angular', 'HTML', 'CSS']
    },
    {
      name: 'Medium Clone',
      description: 'Descrizione del Medium Clone...',
      imageUrl: 'https://picsum.photos/200',
      githubLink: 'https://github.com/vincenzo8825/clone-medium',
      linkedinLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7166090835078451200/',
      technologies: ['Html', 'Css', 'Javascript']
    },
    // Assicurati che ogni progetto abbia le informazioni aggiornate
    {
      name: 'Coming Soon',
      description: 'Prossimamente...',
      imageUrl: '',
      githubLink: '',
      linkedinLink: '',
      technologies: []
    }
  ];


  constructor() {
    // Il costruttore ora è vuoto
  }

  ngAfterViewInit(): void {
    AOS.init({ duration: 1200, once: false }); // Imposta le opzioni di AOS

    this.projectItems.forEach((item) => {
      // Imposta le animazioni GSAP per ciascun elemento del progetto
      gsap.from(item.nativeElement, {
        scrollTrigger: {
          trigger: item.nativeElement,
          start: "top bottom-=100",
          end: "bottom top+=100",
          toggleActions: "play none none reverse",
        },
        autoAlpha: 0,
        y: 50,
        duration: 1,
        ease: 'back.out(1.7)',
      });
    });
  }
}
