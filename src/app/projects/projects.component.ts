import { Component } from '@angular/core';
import { TextService } from '../services/textService/text-service.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: 'projects.component.css',
})
export class ProjectsComponent {
  constructor(private textService: TextService) {}
  icon = 'bi bi-link';
  projectBox = [
    {
      id: 1,
      img: '../assets/img/asianKitchen.jpg',
      header: 'Asian Kitchen Menü',
      content: this.textService.projectsText1,
      link: 'https://github.com/yunuskbl/asiankitchen',
    },
    {
      id: 2,
      img: '../assets/img/ReportingOp.jpg',
      header: 'Report İşlemleri',
      content: this.textService.projectsText2,
      link: 'https://github.com/yunuskbl/AramaVeRaporlama',
    },
    {
      id: 3,
      img: '../assets/img/backendOp.png',
      header: 'RentCar Projesi',
      content: this.textService.projectsText3,
      link: 'https://github.com/yunuskbl/ReCapProject',
    },
  ];
}
