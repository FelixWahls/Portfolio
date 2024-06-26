import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  ngOnInit() {
    AOS.init();
  }
}
