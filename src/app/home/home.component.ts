import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, Type } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxTypedJsModule],
  templateUrl: './home.component.html',
  styleUrl: 'home.component.css',
})
export class HomeComponent {
  constructor() {}

  downloadcv = '../assets/cv/yunusKobalCV.pdf';
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
}
