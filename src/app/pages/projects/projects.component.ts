import { Component } from '@angular/core';
import { Project } from '../../core/models/project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section class="container mx-auto px-4 py-12">
      <h2 class="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (project of projects; track project.id) {
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            @if (project.imageUrl) {
              <img [src]="project.imageUrl" [alt]="project.title" class="w-full h-48 object-cover">
            }
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                @for (tech of project.technologies; track tech) {
                  <span class="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {{ tech }}
                  </span>
                }
              </div>
              <div class="flex justify-between">
                @if (project.repoUrl) {
                  <a [href]="project.repoUrl" target="_blank" 
                     class="text-blue-500 hover:text-blue-700">
                    View Code
                  </a>
                }
                @if (project.demoUrl) {
                  <a [href]="project.demoUrl" target="_blank"
                     class="text-green-500 hover:text-green-700">
                    Live Demo
                  </a>
                }
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'Personal portfolio built with Angular and TailwindCSS',
      technologies: ['Angular', 'TypeScript', 'TailwindCSS'],
      repoUrl: 'https://github.com/username/portfolio',
      demoUrl: 'https://portfolio.example.com'
    }
  ];
}