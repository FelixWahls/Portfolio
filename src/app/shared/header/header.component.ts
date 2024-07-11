import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageDataService } from '../../language-data.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    public translateService: TranslateService,
    public languageService: LanguageDataService
  ) {}

  lang = inject(LanguageDataService);

  changeLanguage(langCode: string) {
    this.lang.changeLanguageService(langCode);
  }
}
