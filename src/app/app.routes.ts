import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
  },
  {
    path: 'imprint',
    component: ImprintComponent,
  },
  {
    path: 'privacyPolicy',
    component: PrivacyPolicyComponent,
  },
  { path: 'hero', redirectTo: '', pathMatch: 'full' },
  { path: 'about-me', redirectTo: '', pathMatch: 'full' },
  { path: 'my-skills', redirectTo: '', pathMatch: 'full' },
  { path: 'portfolio', redirectTo: '', pathMatch: 'full' },
  { path: 'contact', redirectTo: '', pathMatch: 'full' },
];
