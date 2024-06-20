import { Component } from '@angular/core';
import { skills } from '../../shared/interfaces';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
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
