import { Component } from '@angular/core';
import { Experience } from '../../core/models/experience.interface';

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section class="container mx-auto px-4 py-12">
      <h2 class="text-3xl font-bold mb-8 text-center">Work Experience</h2>
      <div class="max-w-3xl mx-auto">
        @for (experience of experiences; track experience.company) {
          <div class="mb-8 bg-white p-6 rounded-lg shadow">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-semibold">{{ experience.position }}</h3>
                <p class="text-gray-600">{{ experience.company }}</p>
              </div>
              <div class="text-sm text-gray-500">
                {{ formatDate(experience.startDate) }} - 
                {{ experience.endDate ? formatDate(experience.endDate) : 'Present' }}
              </div>
            </div>
            <p class="text-gray-700 mb-4">{{ experience.description }}</p>
            <ul class="list-disc list-inside space-y-2">
              @for (achievement of experience.achievements; track achievement) {
                <li class="text-gray-700">{{ achievement }}</li>
              }
            </ul>
          </div>
        }
      </div>
    </section>
  `
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Tech Company',
      position: 'Senior Developer',
      startDate: new Date('2020-01-01'),
      description: 'Led development of various web applications',
      achievements: [
        'Implemented new features that increased user engagement by 40%',
        'Mentored junior developers and improved team productivity'
      ]
    }
  ];

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric' 
    });
  }
}