import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: '../app.component.css',
})
export class NavbarComponent {
  @ViewChild('menu-icon') menuIcon!: ElementRef;
  @ViewChild('navbar') navbar!: ElementRef;
  menu = [
    { id: '1', link: 'Anasayfa', route: '#home' },
    { id: '2', link: 'Hakkımda', route: '#about' },
    { id: '3', link: 'Becerilerim', route: '#skills' },
    { id: '4', link: 'Projelerim', route: '#projects' },
    { id: '5', link: 'İletişim', route: '#contact' },
  ];

  getMenu() {}
  toggleMenu(index: number) {
    const navbarElements = document.querySelectorAll('.navbar a');
    navbarElements.forEach((link, i) => {
      if (i === index) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}
