import { Component } from '@angular/core';
import { skills } from '../../shared/interfaces';
import AOS from 'aos';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  ngOnInit() {
    AOS.init();
  }

  skills: skills[] = [
    {
      name: 'HTML',
      img: 'html',
    },
    {
      name: 'CSS',
      img: 'css',
    },
    {
      name: 'JavaScript',
      img: 'html',
    },
    {
      name: 'TypeScript',
      img: 'typescript',
    },
    {
      name: 'Angular',
      img: 'angular',
    },
    {
      name: 'Rest-API',
      img: 'api',
    },
    {
      name: 'Firebase',
      img: 'firebase',
    },
    {
      name: 'Git',
      img: 'git',
    },
    {
      name: 'Scrum',
      img: 'scrum',
    },
    {
      name: 'Material Design',
      img: 'materialDesign',
    },
  ];
}
