import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageDataService } from '../../language-data.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public translateService: TranslateService,
    public languageService: LanguageDataService
  ) {}

  lang = inject(LanguageDataService);
  isOpen = false;
  menuOpen = false;
  scrollPosition = 0;

  changeLanguage(langCode: string) {
    this.lang.changeLanguageService(langCode);
    this.isOpen = false;
  }

  toggleLanguageSelect() {
    this.isOpen = !this.isOpen;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      this.scrollPosition = window.scrollY;
      document.body.style.top = `-${this.scrollPosition}px`;
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
      document.body.style.top = '';
      window.scrollTo(0, this.scrollPosition);
    }
  }
}
