import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageDataService {
  constructor(public translateService: TranslateService) {}

  english = true;
  german = false;
  currentFlag = 'assets/img/american-flag.png';

  changeLanguageService(langCode: string) {
    this.translateService.use(langCode);

    if (langCode === 'en') {
      this.english = true;
      this.german = false;
      this.currentFlag = 'assets/img/american-flag.png';
    } else if (langCode === 'de') {
      this.english = false;
      this.german = true;
      this.currentFlag = 'assets/img/german-flag.png';
    }
  }
}
