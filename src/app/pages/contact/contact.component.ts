import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section class="container mx-auto px-4 py-12">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" 
              class="bg-white p-6 rounded-lg shadow">
          <div class="mb-4">
            <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
            <input type="text" id="name" formControlName="name"
                   class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            @if (contactForm.get('name')?.invalid && contactForm.get('name')?.touched) {
              <p class="text-red-500 text-sm mt-1">Name is required</p>
            }
          </div>

          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
            <input type="email" id="email" formControlName="email"
                   class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            @if (contactForm.get('email')?.invalid && contactForm.get('email')?.touched) {
              <p class="text-red-500 text-sm mt-1">Please enter a valid email</p>
            }
          </div>

          <div class="mb-4">
            <label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
            <textarea id="message" formControlName="message" rows="5"
                      class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            @if (contactForm.get('message')?.invalid && contactForm.get('message')?.touched) {
              <p class="text-red-500 text-sm mt-1">Message is required</p>
            }
          </div>

          <button type="submit" 
                  [disabled]="contactForm.invalid"
                  class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-gray-400">
            Send Message
          </button>
        </form>
      </div>
    </section>
  `
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Here you would typically send the form data to a backend service
      this.contactForm.reset();
    }
  }
}