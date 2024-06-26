import { Component } from '@angular/core';
import AOS from 'aos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  ngOnInit() {
    AOS.init();
  }
}
