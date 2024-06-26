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
      description:
        'Task manager inspired by the Kanban system. Create and organize tasks using drag and drop functions, assign users and categories.',
      liveTest: '',
      github: '',
      imgSrc: 'assets/img/join.png',
    },

    {
      name: 'El pollo loco',
      skills: ['JavaScript', 'HTML', 'CSS'],
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to collect coins and salsa bottles to fight the killer chicken.',
      liveTest: '',
      github: '',
      imgSrc: 'assets/img/pollo-loco.png',
    },

    {
      name: 'Pokedex',
      skills: ['JavaScript', 'HTML', 'CSS', 'API'],
      description:
        'Based on the Poke-API. A simple library that provides and catalogues pokemon information.',
      liveTest: '',
      github: '',
      imgSrc: 'assets/img/pokedex.png',
    },
  ];
}
