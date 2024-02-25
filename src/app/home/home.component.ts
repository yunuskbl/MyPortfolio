import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';

import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: 'home.component.css',
})
export class HomeComponent implements AfterViewInit {
  constructor(private client: HttpClient) {}
  links = [
    {
      id: 1,
      routes: 'https://www.instagram.com/yunuskbll/',
      i: 'bi bi-instagram',
    },
    {
      id: 2,
      routes: 'https://github.com/yunuskbl',
      i: 'bi bi-github',
    },
    {
      id: 3,
      routes: 'https://www.linkedin.com/in/yunuskobal',
      i: 'bi bi-linkedin',
    },
  ];
  ngAfterViewInit(): void {
    new Typed('.multiple-text', {
      strings: ['Back-End Geliştirici'],
      loop: true,
      backSpeed: 100,
      backDelay: 1500,
      typeSpeed: 100,
    });
  }
  downloadCV() {
    const cvUrl = '../assets/cv/yunusKobalCV.pdf';
    this.client
      .get(cvUrl, { responseType: 'blob' })
      .subscribe((response: any) => {
        const blob = new Blob([response], { type: response.type });
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.download = 'yunusKobalCV';
        downloadLink.click();
      });
  }
}
