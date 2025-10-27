import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink], template:`

  <div class="wrapper">
        <header class="banner">
          <img src="RPGCharacter.png" alt="website banner for rpg character builder" class="banner-img">
          </header>

        <main class="main-content">

          <nav class="navbar">
           <ul>
             <li><a routerLink="/">Home</a></li>
             <li><a href="#">Create Character</a></li>
             <li><a href="#">Your Characters</a></li>
             <li><a href="#">Log Out</a></li>
           </ul>
          </nav>

          <section class="content">
            <router-outlet/>
            </section>
        </main>

        <footer class="footer">
         <nav class="footer-nav">
          <a routerLink="/">Home</a>
          <a href="#">Create Character</a>
          <a href="#">Your Characters</a>
          <a href="#">Log Out</a>
         </nav>
         <p>&copy;2025 RPG Character Builder</p>
         </footer>
    </div>`,
      styles:[
        `
        `
      ]
  })
export class AppComponent {
  title(title: any) {
  throw new Error('Method not implemented.');
  }
}
