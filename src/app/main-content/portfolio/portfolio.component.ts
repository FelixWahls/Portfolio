import { Component } from '@angular/core';
import { projects } from '../../shared/interfaces';
import { CommonModule } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  ngOnInit() {
    AOS.init();
  }

  projects: projects[] = [
    {
      name: 'Join',
      skills: ['HTML', 'CSS', 'JavaScript'],
      description: 'portfolio.join',
      liveTest: '',
      github: '',
      imgSrc: 'assets/img/join.png',
    },

    {
      name: 'El pollo loco',
      skills: ['JavaScript', 'HTML', 'CSS'],
      description: 'portfolio.polloLoco',
      liveTest: '',
      github: '',
      imgSrc: 'assets/img/pollo-loco.png',
    },

    {
      name: 'Pokedex',
      skills: ['JavaScript', 'HTML', 'CSS', 'API'],
      description: 'portfolio.pokedex',
      liveTest: '',
      github: '',
      imgSrc: 'assets/img/pokedex.png',
    },
  ];
}
