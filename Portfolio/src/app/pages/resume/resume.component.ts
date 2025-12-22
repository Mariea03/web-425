import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.html',
  styleUrls: ['./resume.css'],
})
export class ResumeComponent {

  education = [
    {
    school: 'Bellevue University',
    program: 'Web Development, Graphic Design - Web Minor',
    year: '2021 - 2026'
    }
  ];

  skills = [
    {
      category: 'Front-End',
      items: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypeScript',
        'Angular',
        'Python'
      ]
    },
    {
      category: 'Back-End',
      items: [
        'Nodejs',
        'MongoDB',
        'NoSQL',
        'REST APIs'
      ]
    },
    {
      category: 'Design & Tools',
      items: [
        'Git & GitHub',
        'Adobe InDesign',
        'Adobe Illustrator',
        'Adobe Photoshop',
        'Digital image editing and retouching',
        'Vector graphics',
        'Print-ready file preparation',
        'Basic motion graphics',
        'File management and organization',
      ]
    }
  ];

  experience = [
    {
      role: 'Web Development Student',
      org: 'Bellevue University',
      details: 'Built responsive web applications using Angular, TypeScript, and modern CSS.'
    }
  ];

  certifications = [
    'Web Developement Program Coursework (In Progress)'
  ];

}
