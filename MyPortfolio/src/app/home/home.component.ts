import { AfterViewInit, Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: 'home.component.css',
})
export class HomeComponent implements AfterViewInit {
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
