import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { TextService } from '../services/textService/text-service.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: 'skills.component.css',
})
export class SkillsComponent {
  buttonText: string = 'Devamını Oku';
  constructor(private textService: TextService) {
    this.ShortText();
  }

  skilbox = [
    {
      id: 1,
      header: 'Web Geliştirme',
      i: 'bi bi-braces',
      content: this.textService.webApp,
      showMore: false,
      shortText: '',
      fullText: '',
    },
    {
      id: 2,
      header: 'Masaüstü Uygulamaları',
      i: 'bi bi-display',
      content: this.textService.desktopText,
      showMore: false,
      shortText: '',
      fullText: '',
    },
    {
      id: 3,
      header: 'Grafik Tasarım',
      i: 'bi bi-brush',
      content: this.textService.designText,
      showMore: false,
      shortText: '',
      fullText: '',
    },
    {
      id: 4,
      header: 'Dijital Pazarlama',
      i: 'bi bi-graph-up',
      content: this.textService.marktText,
      showMore: false,
      shortText: '',
      fullText: '',
    },
  ];

  ShortText() {
    this.skilbox.forEach((item) => {
      item.fullText = item.content;
      item.shortText =
        item.content.slice(0, item.content.indexOf(' ', 200)) + ' ...';
    });
  }
  toggleShowMore(skillBox: any) {
    skillBox.showMore = !skillBox.showMore;

    skillBox.buttonText = skillBox.showMore ? 'Daha Az Gör' : 'Devamını Oku';
  }
}
