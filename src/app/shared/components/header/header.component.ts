import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
	selector: "app-header",
	standalone: true,
	imports: [RouterLink, RouterLinkActive],
	template: `
		<header class="bg-gray-800 text-white p-4">
			<nav class="container mx-auto flex justify-between items-center">
				<h1 class="text-xl font-bold">My Portfolio</h1>
				<ul class="flex space-x-4">
					<li>
						<a
							routerLink="/"
							routerLinkActive="text-blue-400"
							[routerLinkActiveOptions]="{ exact: true }"
							>Home</a
						>
					</li>
					<li>
						<a routerLink="/projects" routerLinkActive="text-blue-400"
							>Projects</a
						>
					</li>
					<li>
						<a routerLink="/skills" routerLinkActive="text-blue-400">Skills</a>
					</li>
					<li>
						<a routerLink="/experience" routerLinkActive="text-blue-400"
							>Experience</a
						>
					</li>
					<li>
						<a routerLink="/contact" routerLinkActive="text-blue-400"
							>Contact</a
						>
					</li>
				</ul>
			</nav>
		</header>
	`,
	styles: [
		`
			:host {
				display: block;
				position: sticky;
				top: 0;
				z-index: 1000;
			}
		`,
	],
})
export class HeaderComponent {}
