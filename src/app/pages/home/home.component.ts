import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="min-h-screen bg-gray-100 py-12">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p class="text-xl text-gray-600">Full Stack Developer</p>
        </div>
        <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <p class="text-lg mb-6">
            I'm a passionate developer with expertise in modern web technologies.
            I love creating efficient, scalable, and user-friendly applications.
          </p>
          <div class="flex justify-center space-x-4">
            <button class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
              View Projects
            </button>
            <button class="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {}