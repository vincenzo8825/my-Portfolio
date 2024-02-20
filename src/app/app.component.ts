import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Aggiungi qui la proprietà title
  title = 'Hello, Portfolio'; // Imposta il titolo come desideri

  ngOnInit() {
    AOS.init();
  }
}
