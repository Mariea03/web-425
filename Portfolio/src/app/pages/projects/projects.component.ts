import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class ProjectsComponent {
  projects = [
    {
      name: 'RPG Character Builder',
      description: 'A web application that allows users to create, customize, and manage fantasy RPG characters, including stats, factions and abilities. The interface dynamically updates based on user input and allows saving characters for later use.',
      tech: 'Angular, TypeScript HTML, CSS, Node.js, JSON file storage, Jasmine/Karma for testing',
      learned: 'I gained experience in Angular component architecture, reactive forms, HTTP requests, unit testing, and managing state in a modular application.',
      link: 'https://github.com/Mariea03/web-425/tree/main/rpg-character-builder'
    },
    {
      name: 'What a Book',
      description: 'A full-stack web application that lets users browse, review, and manage book recomendations, complete with personalized lists and favorite selections. Users can interact with a backend API to retrieve and update book data.',
      tech: 'Python, Node.js, Express, MySQL, MongoDB.',
      learned: 'I learned how to connect a front-end Angular application to a backend API, handle CRUD operations, and implement responsive UI components with dynamic data.',
      link: 'https://github.com/Mariea03/web-335/tree/main/week-8/what_a_book'
    },
    {
      name: 'In n Out Books',
      description: 'An online platform for selling and purchasing used books, featuring search functionality, book listings, and user accounts. The application allows users to manage inventory and track transactions efficiently.',
      tech: 'Angular, TypeScript, HTML, CSS, Node.js, Express, RESTful API',
      learned: 'I had hands-on experience with database integration, user authentication, routing in Angular, and building a fully functional e-commerce-style web application.',
      link: 'https://github.com/Mariea03/web-420/tree/main/in-n-out-books'
    }
  ];

}
