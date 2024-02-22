import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TextService } from '../../textService/text-service.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: 'skills.component.css',
})
export class SkillsComponent implements OnInit {
  buttonText: string = 'Devamını Oku';
  fullText: string | any;
  shortText: string | any;
  constructor(private textService: TextService) {}

  skilbox = [
    {
      id: 1,
      header: 'Web Geliştirme',
      i: 'bi bi-braces',
      content: this.textService.webApp,
      showMore: false,
    },
    {
      id: 2,
      header: 'Masaüstü Uygulamaları',
      i: 'bi bi-display',
      content: this.textService.desktopText,
      showMore: false,
    },
    {
      id: 3,
      header: 'Grafik Tasarım',
      i: 'bi bi-brush',
      content: this.textService.designText,
      showMore: false,
    },
    {
      id: 4,
      header: 'Dijital Pazarlama',
      i: 'bi bi-graph-up',
      content: this.textService.marktText,
      showMore: false,
    },
  ];
  ngOnInit(): void {
    const content = document.querySelector('p');
    this.skilbox.forEach((item) => {
      this.fullText = item.content;
      this.shortText = item.content.slice(0, item.content.indexOf('\n', 200));
    });
  }
  toggleShowMore(skillBox: any) {
    skillBox.showMore = !skillBox.showMore;

    skillBox.buttonText = skillBox.showMore ? 'Daha Az Gör' : 'Devamını Oku';
  }
}
