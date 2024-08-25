import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import AOS from 'aos';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);
  buttonReady = true;
  buttonSending = false;
  buttonSuccess = false;

  ngOnInit() {
    AOS.init();
  }

  contactData = {
    name: '',
    email: '',
    message: '',
    checked: false,
  };

  mailTest = false;

  post = {
    endPoint: 'https://felix-wahls.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.buttonReady = false;
      this.buttonSending = true;
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () =>
            setTimeout(() => {
              this.buttonSuccess = true;
            }, 2000),
        });
      (this.buttonReady = true),
        (this.buttonSending = false),
        (this.buttonSuccess = false);
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log('works');
      ngForm.resetForm();
    }
  }
}
