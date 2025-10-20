import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Button } from '../../../shared/ui/button/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, Button, NgIf],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactForm {
  f;
  sent = false;

  constructor(private fb: FormBuilder) {
    this.f = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  submit() {
    if (this.f.invalid) {
      this.f.markAllAsTouched();
      return;
    }
    console.log('Contact form:', this.f.value);
    this.sent = true;
    this.f.reset();
  }
}
