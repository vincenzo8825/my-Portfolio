import { Component, OnInit, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    this.initializeAnimationsOnLoad();
  }

  ngAfterViewInit(): void {
    this.initializeScrollAnimations();
    this.initializeSwiper();
  }

  private initializeAnimationsOnLoad(): void {
    gsap.from('.hero-title', { duration: 1.5, y: -100, opacity: 1, ease: 'power2.out' }); // Modificato opacity a 1
    gsap.from('.tagline', { duration: 1.5, delay: 0.5, y: 100, opacity: 1, ease: 'power2.out' }); // Modificato opacity a 1
  }

  private initializeScrollAnimations(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.btn-primary', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top center',
        end: 'top+=200 center',
        toggleActions: 'play none none none',
        scrub: true
      },
      opacity: 0,
      duration: 0.5
    });

    gsap.from('.btn-primary', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top center',
        end: 'top+=200 center',
        toggleActions: 'play none none none',
        scrub: true
      },
      opacity: 1,
      duration: 0.5
    });
  }

  private initializeSwiper(): void {
    new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 5000
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
  }
}
