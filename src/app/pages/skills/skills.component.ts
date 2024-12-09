import { Component } from '@angular/core';
import { Skill } from '../../core/models/skill.interface';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section class="container mx-auto px-4 py-12">
      <h2 class="text-3xl font-bold mb-8 text-center">Skills</h2>
      @for (category of categories; track category) {
        <div class="mb-8">
          <h3 class="text-2xl font-semibold mb-4 capitalize">{{ category }}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            @for (skill of getSkillsByCategory(category); track skill.name) {
              <div class="bg-white p-4 rounded-lg shadow">
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium">{{ skill.name }}</span>
                  <span class="text-sm text-gray-600">{{ skill.level }}/5</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                  <div class="bg-blue-600 h-2.5 rounded-full"
                       [style.width]="(skill.level * 20) + '%'">
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      }
    </section>
  `
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Angular', level: 4, category: 'frontend' },
    { name: 'TypeScript', level: 4, category: 'frontend' },
    { name: 'Node.js', level: 3, category: 'backend' },
    { name: 'Git', level: 4, category: 'tools' }
  ];

  categories = ['frontend', 'backend', 'tools', 'other'];

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }
}