import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class AboutComponent {

  professionalBio =`
    I'm a web development student with a passion for clean, accessible design
    and building applications that feel intuitive and purposeful.My journey into
    development began when I wanted to challenge myself with a new skill. I realized
    how much I enjoy problem-solving and turning ideas into functional, and interactive experiences.
    Though my coursework, I've worked with HTML, CSS, JavaScript, Python, TypeScript, Angular,
    and many other applications and I'm continually expanding my skills through hands-on projects.
    `;

  personalBio =`
    My husband and I are new empty nesters. We have 3 children and 3 grandchildren. We visit as often
    as we can. Traveling is one of our favorite hobbies. I enjoy outdoors and spend as much time as I
    can outside. I love craft projects and creating different unique items when I can't get outside. I
    enjoy finding ways to keep busy.
  `;

}
