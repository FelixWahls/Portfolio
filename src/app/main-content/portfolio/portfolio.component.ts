import { Component } from '@angular/core';
import { projects } from '../../shared/interfaces';
import { CommonModule } from '@angular/common';
import AOS from 'aos';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule, HttpClientModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  constructor(public translateService: TranslateService) {}
  ngOnInit() {
    AOS.init();
  }

  projects: projects[] = [
    {
      name: 'Join',
      skills: ['HTML', 'CSS', 'JavaScript'],
      description: 'portfolio.join',
      liveTest: '',
      github: 'https://github.com/FelixWahls/Join-dummy',
      imgSrc: 'assets/img/join.png',
    },

    {
      name: 'El pollo loco',
      skills: ['JavaScript', 'HTML', 'CSS'],
      description: 'portfolio.polloLoco',
      liveTest: '',
      github: 'https://github.com/FelixWahls/El-Pollo-Loco',
      imgSrc: 'assets/img/pollo-loco.png',
    },

    {
      name: 'Pokedex',
      skills: ['JavaScript', 'HTML', 'CSS', 'API'],
      description: 'portfolio.pokedex',
      liveTest: '',
      github: 'https://github.com/FelixWahls/Pokedex',
      imgSrc: 'assets/img/pokedex.png',
    },
  ];
}
