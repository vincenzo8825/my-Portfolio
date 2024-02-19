import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import AOS from 'aos';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

gsap.registerPlugin(ScrollTrigger);

interface Project {
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
      name: 'Capstone Project: Tutoring Platform',
      description: 'Descrizione del Capstone Project: Tutoring Platform...',
      videoUrl: '../../assets/Video WhatsApp 2024-02-19 ore 22.05.08_3f9b5452gggggggggg.mp4',
      githubLink: 'https://github.com/vincenzo8825/Capstone-Project-Epicode-Front-End',
      technologies: ['Angular', 'Typescript', 'Material','Node js'] // Esempio di tecnologie utilizzate
    },
    {
      name: 'Netflix Clone',
      description: 'Descrizione del Netflix Clone...',
      videoUrl: '../../assets/Video WhatsApp 2024-02-19 ore 22.05.25_2695e8b8ggggggggggg.mp4',
      githubLink: 'https://github.com/vincenzo8825/fs0523-Vincenzo-Rocca/tree/main/m2/s2/progetto%20settimanale',
      technologies: ['Bootstrap', 'Sass', 'Html' ,'Javascript'] // Esempio di tecnologie utilizzate
    }
  ];

  otherProjects: Project[] = [
    {
      name: 'Weather App Clone',
      description: 'Descrizione del Weather App Clone...',
      imageUrl: 'https://picsum.photos/200',
      githubLink: 'https://github.com/weatherappclone',
      technologies: ['Bootstrap', 'Angular', 'HTML', 'CSS'] // Aggiunto esempio di tecnologie
    },
    {
      name: 'Medium Clone',
      description: 'Descrizione del Medium Clone...',
      imageUrl: 'https://picsum.photos/200',
      githubLink: 'https://github.com/mediumclone',
      technologies: ['Html', 'Css', 'Javascript']
    },
    {
      name: 'Coming Soon',
      description: 'Prossimamente...',
      imageUrl: '',
      githubLink: '',
      technologies: [] // Nessuna tecnologia elencata per ora
    }
  ];

  constructor(config: NgbCarouselConfig) {
    // Configurazioni del carosello
    config.interval = 3000;  // Cambia ogni 3 secondi
    config.wrap = true;      // Ribalta all'inizio/fine
    config.keyboard = true;  // Abilita la navigazione tramite tastiera
    config.pauseOnHover = true; // Metti in pausa quando il mouse è sopra
  }

  ngAfterViewInit(): void {
    AOS.init({ duration: 1200, once: false }); // Imposta 'once' a false per animazioni ripetibili

    this.projectItems.forEach((item) => {
      // Animazioni GSAP con ScrollTrigger per ciascun elemento del progetto
      gsap.from(item.nativeElement, {
        scrollTrigger: {
          trigger: item.nativeElement,
          start: "top bottom-=100", // Inizia l'animazione poco prima che l'elemento entri nella viewport
          end: "bottom top+=100", // Continua l'animazione fino a quando l'elemento non esce dalla viewport
          toggleActions: "play none none reverse", // Riproduce in entrata e inverte in uscita
        },
        autoAlpha: 0,
        y: 50,
        duration: 1,
        ease: 'back.out(1.7)',
      });
    });
  }
}
