import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: 'navbar.component.css',
})
export class NavbarComponent {
  menu = [
    { id: '1', link: 'Anasayfa', route: '#home' },
    { id: '2', link: 'Hakkımda', route: '#about' },
    { id: '3', link: 'Becerilerim', route: '#skills' },
    { id: '4', link: 'Projelerim', route: '#projects' },
    { id: '5', link: 'İletişim', route: '#contact' },
  ];
}
