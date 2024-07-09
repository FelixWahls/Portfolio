import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  ngOnInit() {
    AOS.init();
  }

  contactData: any;

  fb = inject(NonNullableFormBuilder);
  contactForm = this.fb.group({
    name: this.fb.control('', { validators: [Validators.required] }),
    email: this.fb.control('', {
      validators: [Validators.required, Validators.email],
    }),
    message: this.fb.control('', {
      validators: [Validators.required, Validators.minLength(4)],
    }),
    check: this.fb.control(false, {
      validators: [Validators.requiredTrue],
    }),
  });

  onSubmit() {
    (this.contactData = this.contactForm.getRawValue()),
      console.log(
        this.contactForm.getRawValue(),
        this.contactForm.controls.email,
        this.contactData
      );
  }
}
