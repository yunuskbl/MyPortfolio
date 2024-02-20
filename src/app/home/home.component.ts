import { AfterViewInit, Component } from '@angular/core';
import Typed from 'typed.js';
import { routes } from '../app.routes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: 'home.component.css',
})
export class HomeComponent implements AfterViewInit {
  links = [
    {
      id: 1,
      routes: 'https://www.instagram.com/yunuskbll/',
      class: 'bx bxl-instagram',
      stil: '--i: 7',
    },
    {
      id: 2,
      routes: 'https://github.com/yunuskbl',
      class: 'bx bxl-github',
      stil: '--i: 8',
    },
    {
      id: 3,
      routes: 'www.linkedin.com/in/yunuskobal',
      class: 'bx bxl-linkedin',
      stil: '--i: 9',
    },
  ];
  ngAfterViewInit(): void {
    const typed = new Typed('.multiple-text', {
      strings: ['Back-End Developer.'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1500,
      loop: true,
    });
  }
}
